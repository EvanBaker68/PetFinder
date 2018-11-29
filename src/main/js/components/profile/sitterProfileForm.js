import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Cookies from 'universal-cookie';
import axios from 'axios/index';
import {Redirect} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
    },
});

class ProfileForm extends React.Component {
    state = {
        rate: 0,
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

	componentDidMount() {
		const cookies = new Cookies();
		const principal = cookies.get('username');
		var formattedPrincipal = principal.replace(/@/g, '%40');

		axios.get('/api/sitter/' + principal, principal)
			.then(res => {
				this.setState({
					rate: res.rate,
					rating: res.rating});
			}).then(response => console.log(response))
			.catch(error => this.setState({error}));
	}

	handleAddClose = () => {
		const cookies = new Cookies();
		const sitter = {
			principal: cookies.get('username'),
			numPets: this.state.numPets
		};
		axios.post('/api/sitter/add-sitter', sitter)
			.then(res => {
				console.log(res);
				console.log(res.data);
			})
			.catch(error => {
				console.log(error.response);
			});
	};

    render() {
        const { classes } = this.props;

		const cookies = new Cookies();
		if( cookies.get('sitter') !== 'true' ) {
			return <div><Redirect to='/'/></div>;
		}

        return (
            <div>
                <form className={classes.container} noValidate autoComplete="off">
                    <TextField
                        id="standard-name"
                        label="Rate per hour"
                        className={classes.textField}
                        value={this.state.rate}
                        onChange={this.handleChange('rate')}
                        margin="normal"
                    />
                    <Grid>
					<Typography variant="display2">
						Rating: {this.state.rating}
					</Typography>
                    </Grid>

                </form>
                <Button onClick={this.handleAddClose}>Save Sitter Info</Button>
            </div>
        );
    }
}

ProfileForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProfileForm);