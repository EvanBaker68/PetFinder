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
import { Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import * as Users from 'js/users';
import blue from '@material-ui/core/colors/blueGrey';
import * as ReduxForm from 'redux-form';
import * as Validation from 'js/alloy/utils/validation';
import * as Bessemer from 'js/alloy/bessemer/components';
import Image from '../../images/homeDog.jpg';

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
		redirectOwner: false,
        redirectSitter: false
	}

	setRedirectOwner = () => {
		this.setState({
			redirectOwner: true
		});
	}

	setRedirectSitter = () => {
		this.setState({
			redirectSitter: true
		});
	}

	renderRedirect = () => {

	}

    onSubmit = (principal, password, callFunc) => {
        return this.props.authenticate(principal, password, callFunc);
    };

    // handleUserEmailChange = event => {this.setState({ email: event.target.value });};
    // handlePasswordChange = event => {this.setState({ password: event.target.value });};


    render() {
        const callFunc = this.props.callFunc;
        const { classes } = this.props;
        let { handleSubmit, submitting } = this.props;

		if (this.state.redirectOwner) {
			return <div><Redirect to='/ownerDash' /></div>;
		}
		else if(this.state.redirectSitter) {
			return <div><Redirect to='/ownerDash' /></div>;
		}

        return (

                <main className={classes.layout}>
                    <Paper className={classes.paper}>
                        <Typography variant="display1">SignIn</Typography>
                        <form className={classes.form}
                              onSubmit={handleSubmit(form => this.onSubmit(form))}>
							{/*{this.renderRedirect()}*/}
                            <FormControl margin="normal" required fullWidth>
                                <Bessemer.Field friendlyName="email" name="principal"
                                                validators={[Validation.requiredValidator, Validation.emailValidator]} autoComplete="email" autoFocus/>
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
                                callFunc={this.setRedirectSitter}
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
								callFunc={this.setRedirectOwner}
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
    dispatch => ({
        authenticate: (principal, password, callFunc) => dispatch(Users.Actions.authenticate(principal, password, callFunc))
    })
)(SignInForm);

SignInForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SignInForm);