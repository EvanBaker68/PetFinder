import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import * as Pages from 'js/pages';
import Cookies from 'universal-cookie';
import * as Users from 'js/users';
import {connect} from 'react-redux';
import * as ReduxForm from 'redux-form';
export default class Index extends React.Component {

	// authenticate = () => {
	// 	const cookies = new Cookies();
	// 	this.props.setAuthentication(cookies.get('auth'));
	// }

    constructor(props){
        super(props);
        const cookies = new Cookies();
        console.log(this.props);
        // console.log(cookies.get('loggedIn'));
		// this.s
		// this.props.setAuthentication(cookies.get('auth'));
		// this.authenticate();
		// this.props.refresh();
    }

	render() {
		return (
			<HashRouter>
				<div>
					<Route exact path="/" component={Pages.Home} />
					<Route exact path="/register" component={Pages.RegisterPage} />
					<Route exact path="/newRegister" component={Pages.NewRegisterPage}/>
					<Route exact path="/ownerCompleteRegistration" component={Pages.ownerCompleteRegisterPage}/>
                    <Route exact path="/sitterCompleteRegistration" component={Pages.sitterCompleteRegisterPage}/>
					<Route exact path="/login" component={Pages.LoginPage} />
					<Route exact path="/sitterDash" component={Pages.sitterDash} />
					<Route exact path="/ownerDash" component={Pages.ownerDash} />
					<Route exact path="/ownerPets" component={Pages.pets} />
					<Route exact path="/ownerProfile" component={Pages.ownerProfile} />
					<Route exact path="/sitterProfile" component={Pages.sitterProfile} />
					<Route exact path="/sitterTimeTable" component={Pages.sitterTimeTable} />
					<Route exact path="/search" component={Pages.searchForSitters} />
					<Route exact path="/otherSitterProfile" component={Pages.otherSitterProfile} />
					<Route exact path="/bookSitter" component={Pages.bookSitter} />
					<Route exact path="/bookingConfirmation" component={Pages.confirmation} />
					<Route exact path="/test" component={Pages.TestPage} />

				</div>
			</HashRouter>
		);
	}
}

Index = connect(
	state => ({

	}),
	dispatch => ({
		setAuthentication: (authentication) => dispatch(Users.Actions.setAuthentication(authentication))
		// refresh: () => dispatch(Users.Actions.refreshUser())
	})
)(Index);
