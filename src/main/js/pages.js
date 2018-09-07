import _ from 'lodash';

import React from 'react';
import {HashRouter, Link, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import * as Users from 'js/users';
import * as Login from 'js/login';

export class Home extends React.Component {
	render() {
		return (
			<div className="container padded">
				This is the home page.

				<ul>
					<li><Link to="/register">Register</Link></li>
					<li><Link to="/login">Login</Link></li>
					<li><Link to="/page-1">Page 1</Link></li>
					<li><Link to="/sitterDash">Sitters</Link></li>
					<li><Link to="/ownerDash">Owners</Link></li>
					<li><Link to="/search">Search</Link></li>
				</ul>
			</div>
		);
	}
}

export class RegisterPage extends React.Component {
	render() {
		return (
			<div className="container padded">
				<div className="row">
					<div className="col-6 offset-md-3">
						<h2>Register</h2>
						<hr />
						<Login.RegistrationForm />
					</div>
				</div>
			</div>
		);
	}
}

export class LoginPage extends React.Component {
	render() {
		return (
			<div className="container padded">
				<div className="row">
					<div className="col-6 offset-md-3">
						<h2>Login</h2>
						<hr />
						<Login.LoginForm />
					</div>
				</div>
			</div>
		);
	}
}

class Page1 extends React.Component {
	render() {
		return (
			<div className="container padded">
				This is page 1.

				{ _.isDefined(this.props.authentication) &&
				<div>{this.props.authentication['access_token']}</div>
				}

				{ _.isDefined(this.props.user) &&
				<div>Welcome, {this.props.user.principal}!</div>
				}
			</div>
		);
	}
}

Page1 = connect(
	state => ({
		authentication: Users.State.getAuthentication(state),
		user: Users.State.getUser(state)
	})
)(Page1);

export { Page1 };

class sitterDash extends React.Component {
	render() {
		return (
			<div className="container padded">
				Welcome to sitter dashboard

                { _.isDefined(this.props.user) &&
                <div>User: {this.props.user.principal}!</div>
                }

                <ul>
                    <li><Link to="/ownerDash">Go to owner view</Link></li>
					<li><Link to="/sitterProfile">Your Profile</Link></li>
                </ul>
			</div>
		);
	}
}

sitterDash = connect(
    state => ({
        authentication: Users.State.getAuthentication(state),
        user: Users.State.getUser(state)
    })
)(sitterDash);

export { sitterDash };

class ownerDash extends React.Component {
	render() {
		return (
			<div className="container padded">
				Welcome to the owner Dashboard!


                { _.isDefined(this.props.user) &&
                <div>User: {this.props.user.principal}!</div>
                }


				<ul>
					<li><Link to="/sitterDash">Go to sitter view</Link></li>
					<li><Link to="/ownerPets">Your Pets</Link></li>
					<li><Link to="/ownerProfile">Your Profile</Link></li>
				</ul>
			</div>
		);
	}
}

ownerDash = connect(
    state => ({
        authentication: Users.State.getAuthentication(state),
        user: Users.State.getUser(state)
    })
)(ownerDash);

export { ownerDash };

export class ownerProfile extends React.Component {
	render() {
		return (
			<div className="container padded">
				Here is your owner Profile:
			</div>
		);
	}
}

export class sitterProfile extends React.Component {
    render() {
        return (
            <div className="container padded">
                Here is your sitter Profile:
            </div>
        );
    }
}

export class pets extends React.Component {
	render() {
		return (
			<div className={"container padded"}>
				Here are your pets:
			</div>
		);
	}

}

export class search extends React.Component {
    render() {
        return (
            <div className={"container padded"}>
                This is where you can search for a sitter
            </div>
        );
    }

}