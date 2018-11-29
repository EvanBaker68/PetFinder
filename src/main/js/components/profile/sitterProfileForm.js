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
    constructor(props) {
        super(props);
        this.state = {
            rate: 0,
        };
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

	componentDidMount() {
		const cookies = new Cookies();
		const principal = cookies.get('username');

		axios.get('/api/sitter/' + principal, principal)
			.then(res => {
				this.setState({
					rate: res.rate,
					rating: res.rating});
			}).then(response => console.log(response))
			.catch(error => this.setState({error}));
	}

    validateForm() {
        let hasErrors = false;

        if(!(this.state.rate >= 0)) {
            hasErrors = true;
            alert('Invalid rate.');
        }

        return !hasErrors;
    }

	handleAddClose = () => {
        if (!this.validateForm()) {
            //return if not valid
            return;
        }

		const cookies = new Cookies();
		const sitter = {
			principal: cookies.get('username'),
            rate: this.state.rate
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
                        id="outlined-name"
                        label="Rate per hour"
                        className={classes.textField}
                        //value={'$ ' + ((this.state.rate).toFixed(2)).toString()}
                        value={this.state.rate}
                        onChange={this.handleChange('rate')}
                        margin="normal"
                    />
                </form>
                <Button
                    onClick={this.handleAddClose}
                    type="submit"
                    variant="raised"
                    color="primary"
                    className={classes.submit}
                >
                    Update Rate
                </Button>
                <div>
                    <Grid>
                        <Typography variant="display1">
                            Rating: {this.state.rating}
                        </Typography>
                    </Grid>
                </div>
            </div>

        );
    }
}

ProfileForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProfileForm);