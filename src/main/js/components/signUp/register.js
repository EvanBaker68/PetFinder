import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import blue from '@material-ui/core/colors/blueGrey';
import red from '@material-ui/core/colors/red';
import axios from 'axios';
import * as Users from 'js/users';
import {connect} from 'react-redux';
import * as ReduxForm from 'redux-form';
import * as Validation from 'js/alloy/utils/validation';
import * as Bessemer from 'js/alloy/bessemer/components';
import {Redirect} from 'react-router-dom';
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

const cookies = new Cookies();

/*
    Registration component to enter name and password and choose registration type
 */
class RegisterForm extends React.Component {

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
            password: ''
        };
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    componentDidMount() {
        this.setState({redirect: false, redirectSitter: false});
    }

    setSitterState = () => {
        cookies.set('sitterButton', 'true');
    }

    setOwnerState = () => {
        cookies.set('ownerButton', 'true');
    }

    setRedirect = () => {
        if (this.state.sitter) {
            this.setState({
                redirectSitter: true
            });
        }
        else if (this.state.owner) {
            this.setState({
                redirectOwner: true
            });
        }
    }

    onSubmit = (user) => {

        this.props.authenticate(user.principal, user.password).then(res => {

            if (cookies.get('loggedIn') === 'true') {
                axios.get('/api/user')
                    .then(res => {
                        cookies.set('owner', res.owner);
                        cookies.set('sitter', res.sitter);

                        if (cookies.get('ownerButton') === 'true') {
                            if (cookies.get('owner') === 'true') {
                                alert('Cannot register as owner: account already exists.');
                                cookies.set('loggedIn', 'false');
                                cookies.set('owner', 'false');
                                cookies.set('password', '');
                                cookies.set('auth', '');
                                cookies.set('authRefresh', '');
                                cookies.set('username', '');
                                cookies.set('password', '');
                                cookies.set('ownerButton', '');
                                cookies.set('sitterButton', '');
                            }
                            else {
                                this.setState({redirectOwner: true});
                                const newUser = {
                                    principal: res.principal,
                                    password: user.password,
                                    firstName: res.firstName,
                                    lastName: res.lastName,
                                    phoneNumber: res.phoneNumber,
                                    city: res.city,
                                    address: res.address,
                                    sitter: cookies.get('sitter'),
                                    owner: cookies.get('owner')
                                };
                                return this.props.register(newUser);
                            }
                        }
                        else if (cookies.get('sitterButton') === 'true') {
                            if (cookies.get('sitter') === 'true') {
                                alert('Cannot register as sitter: account already exists.');
                                cookies.set('loggedIn', 'false');
                                cookies.set('sitter', 'false');
                                cookies.set('password', '');
                                cookies.set('auth', '');
                                cookies.set('authRefresh', '');
                                cookies.set('username', '');
                                cookies.set('password', '');
                                cookies.set('sitterButton', '');
                                cookies.set('ownerButton', '');
                            }
                            else {
                                this.setState({redirectSitter: true});
                                const newUser = {
                                    principal: res.principal,
                                    password: user.password,
                                    firstName: res.firstName,
                                    lastName: res.lastName,
                                    phoneNumber: res.phoneNumber,
                                    city: res.city,
                                    address: res.address,
                                    sitter: cookies.get('sitter'),
                                    owner: cookies.get('owner')
                                };
                                return this.props.register(newUser);
                            }
                        }
                    });

            }
            else {
                if (cookies.get('sitterButton') === 'true') {
                    this.setState({redirectSitter: true});
                }
                else if (cookies.get('ownerButton') === 'true') {
                    this.setState({redirectOwner: true});
                }

                return this.props.register(user);
            }
        }).catch(error => console.log(error.response));

    };

    render() {

        const {classes} = this.props;
        let {handleSubmit, submitting} = this.props;
        const {redirectOwner, redirectSitter} = this.state;

        const cookies = new Cookies();

        if (this.state.redirectOwner === true) {
            cookies.set('owner', 'true', {path: '/'});
            return <div><Redirect to='/ownerCompleteRegistration'/></div>;
        }

        else if (this.state.redirectSitter === true) {
            cookies.set('sitter', 'true', {path: '/'});
            return <div><Redirect to='/sitterCompleteRegistration'/></div>;
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
                                                validators={[Validation.requiredValidator, Validation.emailValidator]}
                                                autoComplete="email" autoFocus/>
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <Bessemer.Field
                                    name="password"
                                    type="password"
                                    friendlyName="password"
                                    onChange={this.handleChange('password')}
                                    validators={[Validation.requiredValidator, Validation.passwordValidator]}
                                    field={<input className="form-control" type="password"/>}
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
                                onClick={this.setSitterState}
                            >
                                Continue as Pet Sitter
                            </Button>

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
    state => ({}),
    dispatch => ({
        register: (user) => dispatch(Users.Actions.register(user)),

        authenticate: (principal, password) => dispatch(Users.Actions.authenticate(principal, password))
    })
)(RegisterForm);

RegisterForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RegisterForm);