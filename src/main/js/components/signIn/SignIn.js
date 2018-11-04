import React from 'react';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import * as Users from 'js/users';
import blue from '@material-ui/core/colors/blueGrey';
import * as ReduxForm from 'redux-form';
import * as Validation from 'js/alloy/utils/validation';
import * as Bessemer from 'js/alloy/bessemer/components';
import Image from '../../images/homeDog.jpg';
import Cookies from 'universal-cookie';
import axios from 'axios/index';

const styles = theme => ({
    layout: {
        backgroundImage: `url(${Image})`,
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

class SignInForm extends React.Component{

	state = {
		isOwner: false,
		isSitter: false,
		redirectOwner: false,
        redirectSitter: false,
		hasLoggedIn: false,
		callFunc: this.setRedirect
	}

	setIsOwner = () => {
		this.setState({
			isOwner: true
		});
	}

	setIsSitter = () => {
		this.setState({
			isSitter: true
		});
	}

	setRedirect = () => {
		console.log(this.state.isOwner);
		if(this.state.isSitter){
			this.setState({
				redirectSitter: true,
				hasLoggedIn: true
			});
		}
		else if(this.state.isOwner){
			this.setState({
				redirectOwner: true,
				hasLoggedIn: true
			});
		}
	}

	checkValid = () => {
		const cookies = new Cookies();


	}

    onSubmit = ({principal, password}) => {
		this.props.authenticate(principal, password);
    };

    render() {

    	const { classes } = this.props;
        let { handleSubmit, submitting } = this.props;

        /*onClick={() => { cookies.get('isSitter') === 'false' ?
            alert('This account does not exist.') :
            this.setIsSitter; }}*/


        const cookies = new Cookies();

        //hasLoggedIn- has the button been pressed
        if(this.state.hasLoggedIn) {
		console.log('HEYYYYY');
		    //loggedIn- authentication works
			//will need to reset cookie to false if they do not sign in properly so that it is not set for the next person logging in
			if (cookies.get('loggedIn') === 'true') {

				axios.get('/api/user') //gets user that is signed in (you)
					.then(res => {
						cookies.set('isOwner', res.isOwner);
						cookies.set('isSitter', res.isSitter); //cookie should now have proper representation of whether user is owner or sitter
					}).then(response => console.log(response))
					.catch(error => this.setState({error})); //state set after button is pushed

				if (this.state.isOwner) {
					if (cookies.get('isOwner') === 'true')
						return <div><Redirect to='/ownerDash'/></div>;

					else {
						alert('This account is not registered as an owner.');
						cookies.set('isOwner', 'false');
						this.setState({isOwner: false});
					}
				}


				else if (this.state.isSitter) {
					if (cookies.get('isSitter') === 'true')
						return <div><Redirect to='/sitterDash'/></div>;

					else {
						alert('This account is not registered as a sitter.');
						cookies.set('isSitter', 'false');
						this.setState({isSitter: false});
					}
				}
			}
			else {
				alert('This account does not exist.');
                cookies.set('loggedIn', 'false');
			}
		}



        return (

                <main className={classes.layout}>
                    <Paper className={classes.paper}>
                        <Typography variant="display1">SignIn</Typography>
                        <form className={classes.form}
                              onSubmit={handleSubmit(form => this.onSubmit(form))}>
                            <FormControl margin="normal" required fullWidth>
                                <Bessemer.Field name="principal" friendlyName="email"
                                                validators={[Validation.requiredValidator, Validation.emailValidator]}
												autoComplete="email" autoFocus/>
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <Bessemer.Field
                                    name="password"
                                    type="password"
                                    friendlyName="password"
                                    validators={[Validation.requiredValidator, Validation.passwordValidator]}
                                    field={<input className="form-control" type="password" />}
                                    autoComplete="current-password"
                                />
                            </FormControl>
                            <div>
                            <Button
                                type="submit"
                                loading="submitting"
                                fullWidth
                                variant="raised"
                                color="secondary"
                                className={classes.submit}
								onClick={
									this.setIsSitter}
                            >
                                Continue as Pet Sitter
                            </Button>
                            </div>

							<div>
                            <Button
                                type="submit"
                                fullWidth
                                variant="raised"
                                color="primary"
                                className={classes.submit}
								onClick={this.setIsOwner}
                            >
                                Continue as Pet Owner
                            </Button>
                            </div>
                        </form>
                    </Paper>
                </main>
        );
    }
}

SignInForm = ReduxForm.reduxForm({form: 'SignIn'})(SignInForm);


SignInForm = connect(
    state => ({

    }),
    dispatch => (
		{
		authenticate: (principal, password) => dispatch(Users.Actions.authenticate(principal, password))
    })
)(SignInForm);

SignInForm.propTypes = {
	classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(SignInForm);