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
	}


	setowner = () => {
		axios.get('/api/user')
			.then(res => {
				cookies.set('owner', res.owner);
				cookies.set('sitter', res.sitter);
				console.log('OWNER: ', res.owner);

				if(cookies.get('loggedIn') === 'true'){
					if(res.owner === 'true'){
						console.log('BARF');
						this.setState({
							redirectOwner: true
						});
					}
					else{
						this.setState({owner: false});
                        cookies.set('loggedIn', 'false');
                        cookies.set('sitter', '');
                        cookies.set('owner', '');
                        cookies.set('password', '');
                        cookies.set('auth', '');
                        cookies.set('authRefresh', '');
                        cookies.set('username', '');
                        cookies.set('password', '');
						alert('This account is not registered as an owner.');
					}
				}
			}).then(response => console.log(response))
			.catch(error => this.setState({error}));


		cookies.set('ownerButton', 'false');
		cookies.set('sitterButton', 'true');
	}


	setsitter = () => {
		axios.get('/api/user')
			.then(res => {
				cookies.set('owner', res.owner);
				cookies.set('sitter', res.sitter);
				console.log('SITTER: ', res.sitter);

				if(cookies.get('loggedIn') === 'true'){
					if(res.sitter === 'true'){
						console.log('BARF');
						this.setState({
							redirectSitter: true
						});
					}
					else{

						this.setState({sitter: false});
						console.log('owner is not true');
						alert('This account is not registered as a sitter.');
					}
				}

			}).then(response => console.log(response))
			.catch(error => this.setState({error}));

		cookies.set('ownerButton', 'false');
		cookies.set('sitterButton', 'true');
	}

	setSitterState = () => {
		this.setState({sitter: true});
	}

	setOwnerState = () => {
		this.setState({owner: true});
	}


	// setRedirect = () => {
	//     if(cookies.get('sitterButton') === 'true'){
	//         this.setState({
	//             redirectSitter: true
	//         });
	//     }
	//     else if(cookies.get('ownerButton') === 'true'){
	//         this.setState({
	//             redirectOwner: true
	//         });
	//     }
	// }

	onSubmit = ({principal, password}) => {
		console.log('in onSubmit');
		console.log('redirectSitter: ' + this.state.redirectSitter);
		console.log('redirectOwner: ' + this.state.redirectOwner);
		this.props.authenticate(principal, password).then( () =>
			{
				console.log('MESSSSSAAAAGGEEEEE');
				if(this.state.owner)
					this.setowner();
				else if(this.state.sitter)
					this.setsitter();
			}
		);

	};

	render() {

		const { classes } = this.props;
		let { handleSubmit, submitting } = this.props;
		const redirectOwner = this.state.redirectOwner;
		const redirectSitter = this.state.redirectSitter;
		console.log('redirectSitter: ' + redirectOwner);
		console.log('redirectOwner: ' + redirectSitter);

		// if(this.state.hasLoggedIn) {
		//     if (cookies.get('loggedIn') === 'true') {
		//         axios.get('/api/user')
		//             .then(res => {
		//                 console.log('AAAAAAAA', res.sitter);
		//                 cookies.set('owner', res.owner);
		//                 cookies.set('sitter', res.sitter);
		//                 console.log('sitter button: ' + cookies.get('sitterButton'));
		//                 console.log('owner button: ' + cookies.get('ownerButton'));
		//
		//                 //this.setState({extraState: true});
		//
		//             }).then(response => console.log(response))
		//         /*.then(res => {
		//             console.log('inside of the then clause');
		//             if (cookies.get('ownerButton') === 'true') {
		//                 if (cookies.get('owner') === 'true') {
		//                     console.log('owner is true');
		//
		//                     return <div><Redirect to='/ownerDash'/></div>;
		//                     //this.props.history.push({ pathname: '/ownerDash',});
		//                 }
		//                 else {
		//                     console.log('owner is not true');
		//                     alert('This account is not registered as an owner.');
		//                     //this.setState({owner: false});
		//                     //cookies.set('ownerButton', 'false');
		//                 }
		//             }
		//             else if(cookies.get('sitterButton') === 'true') {
		//                 if (cookies.get('sitter') === 'true') {
		//                     console.log('sitter is true');
		//
		//                     return <div><Redirect to='/sitterDash'/></div>;
		//                     //this.props.history.push({ pathname: '/sitterDash',});
		//                 }
		//                 else {
		//                     alert('This account is not registered as a sitter.');
		//                     console.log('sitter is not true');
		//                     console.log('BBBBBBBBBB', cookies.get('sitter'));
		//                     //this.setState({sitter: false});
		//                     //cookies.set('sitterButton', 'false');
		//                 }
		//             }
		//             else {
		//                 console.log('Neither state.sitter nor state.owner is true');
		//                 alert('This account does not exist 1.');
		//                 cookies.set('loggedIn', 'false');
		//             }
		//         })*/
		//             .catch(error => this.setState({error}));
		//
		//         if (cookies.get('ownerButton') === 'true') {
		//             if (cookies.get('owner') === 'true') {
		//                 console.log('owner is true');
		//
		//                 return <div><Redirect to='/ownerDash'/></div>;
		//             }
		//             else {
		//                 console.log('owner is not true');
		//                 alert('This account is not registered as an owner.');
		//                 //this.setState({owner: false});
		//                 //cookies.set('ownerButton', 'false');
		//             }
		//         }
		//         else if(cookies.get('sitterButton') === 'true') {
		//             if (cookies.get('sitter') === 'true') {
		//                 console.log('sitter is true');
		//
		//                 return <div><Redirect to='/sitterDash'/></div>;
		//             }
		//             else {
		//                 alert('This account is not registered as a sitter.');
		//                 console.log('sitter is not true');
		//                 console.log('BBBBBBBBBB', cookies.get('sitter'));
		//                 //this.setState({sitter: false});
		//                 //cookies.set('sitterButton', 'false');
		//             }
		//         }
		//         else {
		//             console.log('Neither state.sitter nor state.owner is true');
		//             alert('This account does not exist 1.');
		//             cookies.set('loggedIn', 'false');
		//         }
		//
		//     }
		//     else {
		//         console.log('loggedIn = FALSE');
		//     }
		// }

		return (

			<main className={classes.layout}>
				{redirectSitter && <div><Redirect to='/sitterDash'/></div>}
				{redirectOwner && <div><Redirect to='/ownerDash'/></div>}
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
								onClick={this.setSitterState}
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
								onClick={this.setOwnerState}
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