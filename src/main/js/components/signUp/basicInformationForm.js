import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Cookies from 'universal-cookie';
import axios from 'axios/index';
import {connect} from 'react-redux';
import * as Users from 'js/users';
import Button from '@material-ui/core/es/Button/Button';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    dense: {
        marginTop: 16,
    },
    menu: {
        width: 200,
    },
});

class OutlinedTextFields extends React.Component {
    state = {
        firstname: '',
        lastname: '',
        address: '',
        phone: '(000)000-0000'
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

	handleNext = () => {
		const cookies = new Cookies();
		const user = {
			principal: cookies.get('username'),
			password: cookies.get('password'),
			firstName: this.state.firstName,
			lastName: this.state.lastName,
			phoneNumber: this.state.phoneNumber,
			address: this.state.address
		};
		return this.props.register(user);
	}


	render() {
        const { classes } = this.props;

        return (
            <form className={classes.container} noValidate autoComplete="off">
                <TextField
                    id="outlined-name"
                    label="First Name"
                    className={classes.textField}
                    value={this.state.name}
                    onChange={this.handleChange('firstname')}
                    margin="normal"
                    variant="standard"
                />
                <TextField
                    id="outlined-name"
                    label="Last Name"
                    className={classes.textField}
                    value={this.state.name}
                    onChange={this.handleChange('lastname')}
                    margin="normal"
                    variant="standard"
                />
                <TextField
                    id="outlined-name"
                    label="Street Address"
                    className={classes.textField}
                    value={this.state.name}
                    onChange={this.handleChange('address')}
                    margin="normal"
                    variant="standard"
                />
                <TextField
                    id="outlined-name"
                    label="Phone Number"
                    className={classes.textField}
                    value={this.state.name}
                    onChange={this.handleChange('phone')}
                    margin="normal"
                    variant="standard"
                />
				<Button
					type="submit"
					fullWidth
					variant="raised"
					color="primary"
					className={classes.submit}
					onClick={this.handleNext}
				>
					Save
				</Button>
            </form>
        );
    }
}


OutlinedTextFields = connect(
	state => ({

	}),
	dispatch => ({
		//TODO: In complete registration, set a field in user specifying if it is an owner,
		//sitter, or both. Then, if you try to log in as something you're not, you will
		//be refused access.
		register: (user) => dispatch(Users.Actions.register(user))
		// register: (user) => dispatch(Users.Actions.register(user))
	})
)(OutlinedTextFields);

OutlinedTextFields.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OutlinedTextFields);