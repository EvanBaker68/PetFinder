import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from'@material-ui/core/Button';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Cookies from 'universal-cookie';
import {connect} from 'react-redux';
import * as Users from 'js/users';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    button: {
        margin: theme.spacing.unit,
    },
});

class NavBar extends React.Component {

	state={
		loggedOut: false
	}

	onLogout = () => {
		this.setState({ loggedOut: true });
		return this.props.logout();
	}

    render() {

		const {classes} = this.props;

		const cookies = new Cookies;

		if (cookies.get('loggedIn') != 'true') {
			return (
				<div className={classes.root}>
					<AppBar position="static" style={{background: 'transparent', boxShadow: 'none'}}>
						<Toolbar>
							<Typography variant="display1" color="inherit" className={classes.grow}>
								Pet.ty
							</Typography>
							<Link to="/newRegister">
								{/*<Link to="/register">*/}
								<Button
									variant="contained"
									color="secondary"
									className={classes.button}>
									Sign Up
								</Button>
							</Link>
							<Link to="/login">
								<Button
									variant="contained"
									color="secondary"
									className={classes.button}>
									Login
								</Button>
							</Link>
						</Toolbar>
					</AppBar>
				</div>
			);
		}

		else if (cookies.get('owner') == 'true' && cookies.get('sitter') == 'true') {
			return (
				<div className={classes.root}>
					<AppBar position="static" style={{background: 'transparent', boxShadow: 'none'}}>
						<Toolbar>
							<Typography variant="display1" color="inherit" className={classes.grow}>
								Pet.ty
							</Typography>
							<Link to="/ownerDash">
								{/*<Link to="/register">*/}
								<Button
									variant="contained"
									color="secondary"
									className={classes.button}>
									Owner Dashboard
								</Button>
							</Link>
							<Link to="/sitterDash">
								{/*<Link to="/register">*/}
								<Button
									variant="contained"
									color="secondary"
									className={classes.button}>
									Sitter Dashboard
								</Button>
							</Link>
							<Button
								variant="contained"
								color="secondary"
								className={classes.button}
								onClick={this.onLogout}>

								Log Out
							</Button>
						</Toolbar>
					</AppBar>
				</div>
			);
		}

		else if (cookies.get('owner') == 'true') {
			return (
				<div className={classes.root}>
					<AppBar position="static" style={{background: 'transparent', boxShadow: 'none'}}>
						<Toolbar>
							<Typography variant="display1" color="inherit" className={classes.grow}>
								Pet.ty
							</Typography>
							<Link to="/ownerDash">
								{/*<Link to="/register">*/}
								<Button
									variant="contained"
									color="secondary"
									className={classes.button}>
									Dashboard
								</Button>
							</Link>
							<Button
								variant="contained"
								color="secondary"
								className={classes.button}
								onClick={this.onLogout}>

								Log Out
							</Button>
						</Toolbar>
					</AppBar>
				</div>
			);
		}

		else if (cookies.get('sitter') == 'true') {
			return (
				<div className={classes.root}>
					<AppBar position="static" style={{background: 'transparent', boxShadow: 'none'}}>
						<Toolbar>
							<Typography variant="display1" color="inherit" className={classes.grow}>
								Pet.ty
							</Typography>
							<Link to="/sitterDash">
								{/*<Link to="/register">*/}
								<Button
									variant="contained"
									color="secondary"
									className={classes.button}>
									Dashboard
								</Button>
							</Link>
							<Button
								variant="contained"
								color="secondary"
								onClick={this.onLogout}
								className={classes.button}>
								Log Out
							</Button>
						</Toolbar>
					</AppBar>
				</div>
			);
		}
		else {
			return (
				<div className={classes.root}>
					<AppBar position="static" style={{background: 'transparent', boxShadow: 'none'}}>
						<Toolbar>
							<Typography variant="display1" color="inherit" className={classes.grow}>
								Pet.ty
							</Typography>
							<Link to="/newRegister">
								{/*<Link to="/register">*/}
								<Button
									variant="contained"
									color="secondary"
									className={classes.button}>
									Sign Up
								</Button>
							</Link>
							<Link to="/login">
								<Button
									variant="contained"
									color="secondary"
									className={classes.button}>
									Login
								</Button>
							</Link>
						</Toolbar>
					</AppBar>
				</div>
			);
		}
	}
}

NavBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

NavBar = connect(
	state => ({

	}),
	dispatch => ({
		logout: () => dispatch(Users.Actions.logout())
		// register: (user) => dispatch(Users.Actions.register(user))
	})
)(NavBar);

export default withStyles(styles)(NavBar);
