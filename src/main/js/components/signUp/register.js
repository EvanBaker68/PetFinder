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

class Register extends React.Component{


    constructor(props){

        super(props);

        this.state = {
            email: '',
            password: '',
        };

        this.handleUserEmailChange = this.handleUserEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange().bind(this);
    }



    handleSubmit = event => {
        event.preventDefault();

        axios.post('/stuff/TestUser/register',
            { email: this.state.email, password: this.state.password },)
            .then(res => {
                console.log(res);
                console.log(res.data);
            });
    };

    handleUserEmailChange = event => {this.setState({ email: event.target.value });};
    handlePasswordChange = event => {this.setState({ password: event.target.value });};


    render() {

        const { classes } = this.props;


        return (
            <React.Fragment>
                <CssBaseline/>
                <main className={classes.layout}>
                    <Paper className={classes.paper}>
                        <Typography variant="display1">Register</Typography>
                        <form className={classes.form}>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="email">Email Address</InputLabel>
                                <Input id="email" name="email" autoComplete="email" autoFocus/>
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input
                                    name="password"
                                    type="password"
                                    id="password"
                                    onChange={this.handlePasswordChange}
                                    autoComplete="current-password"
                                />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="password">Re-Type Password</InputLabel>
                                <Input
                                    name="password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                />
                            </FormControl>
                            <Link to="/completeRegistration">
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="raised"
                                    color="secondary"
                                    onSubmit={this.handleSubmit}
                                    className={classes.submit}
                                >
                                    Continue as Pet Sitter
                                </Button>
                            </Link>
                            <Link to="/completeRegistration">
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="raised"
                                    color="primary"
                                    className={classes.submit}
                                >
                                    Continue as Pet Owner
                                </Button>
                            </Link>
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

Register.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Register);