import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Cookies from 'universal-cookie';
import axios from 'axios/index';
import {connect} from 'react-redux';
import * as Users from 'js/users';
import Button from '@material-ui/core/Button';
import * as ReduxForm from 'redux-form';
import {Redirect} from 'react-router-dom';

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

    state = {
        redirectOwner: false,
        redirectSitter: false,
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

	handleNext = () => {
        if (!this.validateForm()) {
            //return if not valid
            return;
        }

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

        this.props.register(user).then(res => {
            if(cookies.get('owner') === 'true') {
                const owner = {
                    principal: cookies.get('username'),
                    rating: 0
                };
                axios.post('/api/owner/add-owner', owner)
                    .then(res => {
                        console.log(res);
                        console.log(res.data);
                    })
                    .then(res => {
                        this.setState({
                            redirectOwner: true
                        });
                    })
                    .catch(error => {
                        console.log(error.response);
                    });
            }
            else if(cookies.get('sitter') === 'true') {
                const sitter = {
                    principal: cookies.get('username'),
                    rate: 0,
                    rating: 0
                };
                axios.post('/api/sitter/add-sitter', sitter)
                    .then(res => {
                        console.log(res);
                        console.log(res.data);
                    })
                    .then(res => {
                        this.setState({
                            redirectSitter: true
                        });
                    })
                    .catch(error => {
                        console.log(error.response);
                    });
            }
        });
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

    validateForm() {
	    let hasErrors = false;

	    if(!(/^[a-zA-Z\s]+$/.test(this.state.firstName))) {
	        hasErrors = true;
            alert('Invalid first name.');
        }

        if(!(/^[a-zA-Z\s]+$/.test(this.state.lastName))) {
	        hasErrors = true;
	        alert('Invalid last name.');
        }

        if(!(/^[a-zA-Z\s.]+$/.test(this.state.city))) {
	        hasErrors = true;
	        alert('Invalid city.');
        }

        if(!(/^\(\d{3}\)\s\d{3}-\d{4}$/.test(this.state.phoneNumber))) {
	        hasErrors = true;
	        alert('Invalid phone number: please enter number with the following format:\n(000) 000-0000');
        }

        if(!(/^[a-zA-Z0-9.\s]+$/.test(this.state.address))) {
            hasErrors = true;
            alert('Please enter an address.');
        }

	    return !hasErrors;
    }

	render() {
        const { classes } = this.props;
        const redirectOwner = this.state.redirectOwner;
        const redirectSitter = this.state.redirectSitter;

        return (

            <main>
                {redirectSitter && <div><Redirect to='/sitterDash'/></div>}
                {redirectOwner && <div><Redirect to='/ownerDash'/></div>}
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
                </form>
            </main>
        );
    }
}

OutlinedTextFields = ReduxForm.reduxForm({form: 'OutlinedTextFields'})(OutlinedTextFields);

OutlinedTextFields = connect(
	state => ({

	}),
	dispatch => ({
		register: (user) => dispatch(Users.Actions.register(user))
	})
)(OutlinedTextFields);

OutlinedTextFields.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OutlinedTextFields);