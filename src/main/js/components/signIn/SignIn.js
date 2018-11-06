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

const cookies = new Cookies();

class SignInForm extends React.Component{

	state = {
		owner: false,
		sitter: false,
		redirectOwner: false,
		redirectSitter: false,
		callFunc: this.setRedirect
	}

	setowner = () => {
        console.log('begin setowner');
		this.setState({
            hasLoggedIn: true
		});
		//cookies.set('hasLoggedIn', 'true');
		cookies.set('ownerButton', 'true');
		cookies.set('sitterButton', 'false');
        console.log('end setowner');
	}


	setsitter = () => {
        console.log('begin setsitter');
		this.setState({
            hasLoggedIn: true
		});
		//cookies.set('hasLoggedIn', 'true');
        cookies.set('ownerButton', 'false');
        cookies.set('sitterButton', 'true');
         console.log('end setsitter');
	}

	setRedirect = () => {
        // console.log('begin setRedirect');
		//console.log(this.state.owner);
		if(cookies.get('sitterButton') === 'true'){
            // console.log('in if of setRedirect');
			this.setState({
				redirectSitter: true
			});
            // console.log('end if of setRedirect');
		}
		else if(cookies.get('ownerButton') === 'true'){
            // console.log('in else of setRedirect');
			this.setState({
				redirectOwner: true
			});
            // console.log('end else of setRedirect');
		}
	}

    onSubmit = ({principal, password}) => {
         console.log('in onSubmit');
        console.log('sitter button: ' + cookies.get('sitterButton'));
        console.log('owner button: ' + cookies.get('ownerButton'));
		return this.props.authenticate(principal, password);
		/*if(cookies.get('loggedIn') === 'true'){

        }*/
    };

	render() {
         console.log('re-rendering');

		const { classes } = this.props;
		let { handleSubmit, submitting } = this.props;
        console.log('sitter button2: ' + cookies.get('sitterButton'));
        console.log('owner button2: ' + cookies.get('ownerButton'));
        if(this.state.hasLoggedIn) {
		console.log('hasLoggedIn = true');
         //    console.log(cookies.get('loggedIn'));

            if (cookies.get('loggedIn') === 'true') {
                 console.log('loggedIn = true');

                axios.get('/api/user')
                    .then(res => {
                        console.log('AAAAAAAA', res.sitter);
                        cookies.set('owner', res.owner);
                        cookies.set('sitter', res.sitter);
                        // console.log('sitter: ' + res.sitter);
                        // console.log('owner: ' + res.owner);
                        console.log('sitter button: ' + cookies.get('sitterButton'));
                        console.log('owner button: ' + cookies.get('ownerButton'));

                    }).then(response => console.log(response))
                    .catch(error => this.setState({error}));

                if (cookies.get('ownerButton') === 'true') {
                    if (cookies.get('owner') === 'true')
                        return <div><Redirect to='/ownerDash'/></div>;

                    else {
                        alert('This account is not registered as an owner.');
                        //this.setState({owner: false});
                        //cookies.set('ownerButton', 'false');
                    }
                }

                else if(cookies.get('sitterButton') === 'true') {
                    if (cookies.get('sitter') === 'true')
                        return <div><Redirect to='/sitterDash'/></div>;

                    else {
                        alert('This account is not registered as a sitter.');
                        console.log('BBBBBBBBBB', cookies.get('sitter'));
                        //this.setState({sitter: false});
                        //cookies.set('sitterButton', 'false');
                    }
                }
                else {
                    console.log('Neither state.sitter nor state.owner is true');
                    alert('This account does not exist 1.');
                    cookies.set('loggedIn', 'false');
                }


            }
            else {
                console.log('loggedIn = FALSE');
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
                                onClick={this.setsitter}
                                /*onClick={() => {
                                    sitter=true;
                                    this.setState({
                                        hasLoggedIn: true
                                    });
                                }}*/
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
                                onClick={this.setowner}
                                /*onClick={() => {
                                    owner=true;
                                    this.setState({
                                        hasLoggedIn: true
                                    });
                                }}*/

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