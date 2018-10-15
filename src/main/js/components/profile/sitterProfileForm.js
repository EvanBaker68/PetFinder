import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Cookies from 'universal-cookie';
import axios from 'axios/index';

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

		axios.get('/sitter/' + principal, principal)
			.then(res => {
				this.setState({
					rate: res.rate});
			}).then(response => console.log(response))
			.catch(error => this.setState({error}));
	}

	handleAddClose = () => {
		const cookies = new Cookies();
		const sitter = {
			principal: cookies.get('username').replace(/@/g, '%40'),
			numPets: this.state.numPets
		};
		axios.post('/sitter/add-sitter', sitter)
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