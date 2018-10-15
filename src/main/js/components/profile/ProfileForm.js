import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Cookies from 'universal-cookie';
import axios from 'axios/index';
import * as Users from 'js/users';
import {connect} from 'react-redux';

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
        firstName: '',
        lastName: '',
        address: '',
        phoneNumber: '(000)000-0000'
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    setAuthentication = ({username, password}) => {
        this.props.authenticate({username, password});
    }

	componentDidMount() {
		const cookies = new Cookies();
		const username = cookies.get('username');
		const password = cookies.get('password');

		this.setAuthentication({username, password});

		axios.get('/api/user')
			.then(res => {
				this.setState({
					firstName: res.firstName,
                    lastName: res.lastName,
                    address: res.address,
                    phoneNumber: res.phoneNumber});
			}).then(response => console.log(response))
			.catch(error => this.setState({error}));
	}

    render() {
        const { classes } = this.props;

        return (
            <div>
            <form className={classes.container} noValidate autoComplete="off">
                <TextField
                    id="standard-name"
                    label="Name"
                    className={classes.textField}
                    value={this.state.firstName}
                    onChange={this.handleChange('firstName')}
                    margin="normal"
                />
                <TextField
                    id="standard-name"
                    label="Last Name"
                    className={classes.textField}
                    value={this.state.lastName}
                    onChange={this.handleChange('lastName')}
                    margin="normal"
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
                    label="Phone"
                    className={classes.textField}
                    value={this.state.phoneNumber}
                    onChange={this.handleChange('phoneNumber')}
                    margin="normal"
                    variant="standard"
                />
            </form>
                <Button>Save User Info</Button>
            </div>
        );
    }
}

ProfileForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

ProfileForm = connect(
	state => ({

	}),
	dispatch => ({
		//TODO: In complete registration, set a field in user specifying if it is an owner,
		//sitter, or both. Then, if you try to log in as something you're not, you will
		//be refused access.
		authenticate: ({username, password}) => dispatch(Users.Actions.shortHandAuthenticate({username, password}))
		// register: (user) => dispatch(Users.Actions.register(user))
	})
)(ProfileForm);

export default withStyles(styles)(ProfileForm);