import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import { Link } from 'react-router-dom';
import blue from '@material-ui/core/colors/blueGrey';
import red from '@material-ui/core/colors/red';
import axios from 'axios';
import * as Users from 'js/users';
import {connect} from 'react-redux';
import * as ReduxForm from 'redux-form';
import * as Validation from 'js/alloy/utils/validation';
import * as Bessemer from 'js/alloy/bessemer/components';
import  { Redirect } from 'react-router-dom';
import Cookies from 'universal-cookie';


const styles = theme => ({
    palette: {
        primary: blue,
        secondary: red,
    },
    layout: {
        width: 'auto',
        display: 'block',
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
            width: 400,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing.unit * 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },
    avatar: {
        margin: theme.spacing.unit,
        backgroundColor: blue,
    },
    form: {
        width: '100%', // Fix IE11 issue.
        marginTop: theme.spacing.unit,
    },
    submit: {
        marginTop: theme.spacing.unit * 3,
    },
});

class RegisterForm extends React.Component{

    constructor(props) {
        super(props);
        console.log(this.props);
        this.state = {
        	owner: false,
			sitter: false,
			redirectOwner: false,
			redirectSitter: false,
			callfunc: this.setRedirect,
        	principal: '',
			password: ''};
    }

	handleChange = name => event => {
		this.setState({
			[name]: event.target.value,
		});
	};

    componentDidMount() {
        this.setState({redirect: false, redirectSitter: false});
    }

	setowner = () => {
		this.setState({
			owner: true
		});
	}

	setsitter = () => {
		this.setState({
			sitter: true
		});
	}

	setRedirect = () => {
		if(this.state.sitter){
			this.setState({
				redirectSitter: true
			});
		}
		else if(this.state.owner){
			this.setState({
				redirectOwner: true
			});
		}
	}

	onSubmit = (user) => {
		// user = {
		// principal: this.state.principal,
		// 	password: this.state.password,
		// 	firstName: '',
		// 	lastName: '',
		// 	phoneNumber: '',
		// 	city: '',
		//
		//
		// }
    		// const principal = this.state.principal.replace(/@/g, '%40');
		// 	const password = this.state.password;
		// // return this.props.register({principal, password});
		return this.props.register(user);
	};

    render() {

        const { classes } = this.props;
        let { handleSubmit, submitting } = this.props;
        const { redirectOwner, redirectSitter } = this.state;

        const cookies = new Cookies();

		if (cookies.get('loggedIn') == 'true') {

			if(this.state.owner) {
				cookies.set('owner', 'true', {path: '/'});
				return <div><Redirect to='/ownerCompleteRegistration'/></div>;
			}


			else if(this.state.sitter) {
				cookies.set('sitter', 'true', {path: '/'});
				return <div><Redirect to='/sitterCompleteRegistration'/></div>;
			}
		}

        return (
            <React.Fragment>
                <CssBaseline/>
                <main className={classes.layout}>
                    <Paper className={classes.paper}>
                        <Typography variant="display1">Register</Typography>
                        <form className={classes.form}
							  onSubmit={handleSubmit(form => this.onSubmit(form))}>
                            <FormControl margin="normal" required fullWidth>
								<Bessemer.Field friendlyName="email" name="principal"
												onChange={this.handleChange('principal')}
                                       validators={[Validation.requiredValidator, Validation.emailValidator]} autoComplete="email" autoFocus/>
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
								<Bessemer.Field
                                    name="password"
                                    type="password"
                                    friendlyName="password"
									onChange={this.handleChange('password')}
                                    validators={[Validation.requiredValidator, Validation.passwordValidator]}
                                    field={<input className="form-control" type="password" />}
                                    autoComplete="current-password"
                                />
                            </FormControl>

                            <Button
                                type="submit"
                                loading="submitting"
                                fullWidth
                                variant="raised"
                                color="secondary"
                                className={classes.submit}
								onClick={this.setsitter}
                            >
                                Continue as Pet Sitter
                            </Button>

                            <Button
                                type="submit"
                                fullWidth
                                variant="raised"
                                color="primary"
                                className={classes.submit}
								onClick={this.setowner}

                            >
                                Continue as Pet Owner
                            </Button>
                            <Typography align="center" variant="caption">
                                You can always register as both a sitter and owner
                                but just pick one for now!
                            </Typography>
                        </form>
                    </Paper>
                </main>
            </React.Fragment>
        );
    }
}

RegisterForm = ReduxForm.reduxForm({form: 'register'})(RegisterForm);

RegisterForm = connect(
    state => ({

    }),
    dispatch => ({
		//TODO: In complete registration, set a field in user specifying if it is an owner,
		//sitter, or both. Then, if you try to log in as something you're not, you will
		//be refused access.
        register: (user) => dispatch(Users.Actions.register(user))
		// register: (user) => dispatch(Users.Actions.register(user))
    })
)(RegisterForm);

RegisterForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RegisterForm);