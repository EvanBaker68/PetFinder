import React from 'react';
import { HashRouter, Route } from 'react-router-dom';

import * as Pages from 'js/pages';

export default class Index extends React.Component {
	render() {
		return (
			<HashRouter>
				<div>
					<Route exact path="/" component={Pages.Home} />
					<Route exact path="/register" component={Pages.RegisterPage} />
					<Route exact path="/login" component={Pages.LoginPage} />
					<Route exact path="/page-1" component={Pages.Page1} />
					<Route exact path="/sitterDash" component={Pages.sitterDash} />
					<Route exact path="/ownerDash" component={Pages.ownerDash} />
                    <Route exact path="/ownerPets" component={Pages.pets} />
                    <Route exact path="/ownerProfile" component={Pages.ownerProfile} />
                    <Route exact path="/sitterProfile" component={Pages.sitterProfile} />
					<Route exact path="/search" component={Pages.searchForSitters} />
                    <Route exact path="/otherSitterProfile" component={Pages.otherSitterProfile} />
                    <Route exact path="/bookSitter" component={Pages.bookSitter} />
                    <Route exact path="/bookingConfirmation" component={Pages.confirmation} />
				</div>
			</HashRouter>
		);
	}
}