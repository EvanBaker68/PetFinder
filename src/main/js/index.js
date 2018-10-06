import React from 'react';
import { HashRouter, Route } from 'react-router-dom';

import * as Pages from 'js/pages';
//import { CookiesProvider } from 'react-cookie';
import Cookies from 'universal-cookie';
export default class Index extends React.Component {

    constructor(props){
        super(props);
        const cookies = new Cookies();
        cookies.set('loggedIn', 'false', { path: '/' });
        console.log(cookies.get('loggedIn'));

    }


	render() {
		return (
			<HashRouter>
				<div>
					<Route exact path="/" component={Pages.Home} />
					<Route exact path="/register" component={Pages.RegisterPage} />
					<Route exact path="/newRegister" component={Pages.NewRegisterPage}/>
					<Route exact path="/completeRegistration" component={Pages.CompleteRegisterPage}/>
					<Route exact path="/login" component={Pages.LoginPage} />
					<Route exact path="/sitterDash" component={Pages.sitterDash} />
					<Route exact path="/ownerDash" component={Pages.ownerDash} />
					<Route exact path="/ownerPets" component={Pages.pets} />
					<Route exact path="/ownerProfile" component={Pages.ownerProfile} />
					<Route exact path="/sitterProfile" component={Pages.sitterProfile} />
					<Route exact path="/search" component={Pages.searchForSitters} />
					<Route exact path="/otherSitterProfile" component={Pages.otherSitterProfile} />
					<Route exact path="/bookSitter" component={Pages.bookSitter} />
					<Route exact path="/bookingConfirmation" component={Pages.confirmation} />
					<Route exact path="/test" component={Pages.TestPage} />

				</div>
			</HashRouter>
		);
	}

	Component
}