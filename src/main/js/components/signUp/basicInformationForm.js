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
import Button from '@material-ui/core/Button';
import * as Bessemer from 'js/alloy/bessemer/components';
import * as Validation from 'js/alloy/utils/validation';
import FormControl from '@material-ui/core/es/FormControl/FormControl';
import * as ReduxForm from 'redux-form';

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
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            address: '',
            city: '',
            phoneNumber: '(000) 000-0000'
        };
    }

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
			city: this.state.city,
			address: this.state.address,
			sitter: cookies.get('sitter'),
			owner: cookies.get('owner')
		};
		return this.props.register(user);
	}

    componentDidMount() {

        axios.get('/api/user')
            .then(res => {
                this.setState({
                    firstName: res.firstName,
                    lastName: res.lastName,
                    address: res.address,
                    phoneNumber: res.phoneNumber,
                    city: res.city
                });
            }).then(response => console.log(response))
            .catch(error => this.setState({error}));
    }


	render() {
        const { classes } = this.props;

        return (
            <form className={classes.container}>
                <FormControl margin="normal" required fullWidth>
                    <Bessemer.Field
                        id="outlined-name"
                        name="firstName"
                        friendlyName="First Name"
                        className={classes.textField}
                        placeholder={this.state.firstName}
                        onChange={this.handleChange('firstName')}
                        margin="normal"
                        variant="standard"

                        validators={[Validation.requiredValidator, Validation.requiredValidator]}
                    />
                </FormControl>
                <FormControl margin="normal" required fullWidth>
                    <Bessemer.Field
                        id="outlined-name"
                        name="lastName"
                        friendlyName="Last Name"
                        className={classes.textField}
                        placeholder={this.state.lastName}
                        onChange={this.handleChange('lastName')}
                        margin="normal"
                        variant="standard"

                        validators={[Validation.requiredValidator, Validation.requiredValidator]}
                    />
                </FormControl>
                <FormControl margin="normal" required fullWidth>
                    <Bessemer.Field
                        id="outlined-name"
                        name="address"
                        friendlyName="Street Address"
                        className={classes.textField}
                        placeholder={this.state.address}
                        onChange={this.handleChange('address')}
                        margin="normal"
                        variant="standard"

                        validators={[Validation.requiredValidator, Validation.requiredValidator]}
                    />
                </FormControl>
                <FormControl margin="normal" required fullWidth>
                    <Bessemer.Field
                        id="outlined-name"
                        name="city"
                        friendlyName="City"
                        className={classes.city}
                        placeholder={this.state.city}
                        onChange={this.handleChange('city')}
                        margin="normal"
                        variant="standard"

                        validators={[Validation.requiredValidator, Validation.requiredValidator]}
                    />
                </FormControl>
                <FormControl margin="normal" required fullWidth>
                    <Bessemer.Field
                        id="outlined-name"
                        name="phoneNumber"
                        friendlyName="Phone Number"
                        className={classes.textField}
                        placeholder={this.state.phoneNumber}
                        onChange={this.handleChange('phoneNumber')}
                        margin="normal"
                        variant="standard"

                        validators={[Validation.requiredValidator, Validation.requiredValidator]}
                    />
                </FormControl>

                <div>
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
                </div>
            </form>
            /*
            <form className={classes.container} noValidate autoComplete="off">
                <TextField
                    id="outlined-name"
                    label="First Name"
                    className={classes.textField}
                    value={this.state.firstName}
                    onChange={this.handleChange('firstName')}
                    margin="normal"
                    variant="standard"
                />
                <TextField
                    id="outlined-name"
                    label="Last Name"
                    className={classes.textField}
                    value={this.state.lastName}
                    onChange={this.handleChange('lastName')}
                    margin="normal"
                    variant="standard"
                />
                <TextField
                    id="outlined-name"
                    label="Street Address"
                    className={classes.textField}
                    value={this.state.address}
                    onChange={this.handleChange('address')}
                    margin="normal"
                    variant="standard"
                />
                <TextField
                    id="outlined-name"
                    label="City"
                    className={classes.city}
                    value={this.state.city}
                    onChange={this.handleChange('city')}
                    margin="normal"
                    variant="standard"
                />
                <TextField
                    id="outlined-name"
                    label="Phone Number"
                    className={classes.textField}
                    value={this.state.phoneNumber}
                    onChange={this.handleChange('phoneNumber')}
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
            </form>*/
        );
    }
}

OutlinedTextFields = ReduxForm.reduxForm({form: 'OutlinedTextFields'})(OutlinedTextFields);

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