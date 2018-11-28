import axios from 'axios';
import Cookies from 'universal-cookie';
export function register(user) {
    var temp = axios.post('/api/user/register', user);

    return temp;
}

export function authenticate(username, password) {
	return axios(
		{
			method: 'post',
			url: '/oauth/token',
			params: {
				'grant_type': 'password',
				username,
				password
			},
			auth: {
				username: 'petfinder-app',
				password: 'petfinder-app-secret'
			}
		}
	);
}

export function getUserDetails() {
	return axios.get('/api/user');
}

let State = {};

State.getAuthentication = state => {
	return state.authentication;
};

State.getUser = state => {
	return state.user;
};

export { State };

let Actions = {};

Actions.Types = {
	SET_AUTHENTICATION: 'SET_AUTHENTICATION',
	SET_USER: 'SET_USER'
};

Actions.register = (user) => {
	return (dispatch) => {
		return register(user).then(() => {
			return dispatch(Actions.authenticate(user.principal, user.password));
		});
	};
};

Actions.authenticate = (username, password) => {
	cookies.set('auth', '');
	cookies.set('loggedIn', 'false');
	return (dispatch) => {
		return authenticate(username, password).then(
			authentication => {

			    const cookies = new Cookies();
			    cookies.set('username', username);
			    cookies.set('password', password);
			    cookies.set('auth', authentication);
			    cookies.set('authRefresh', authentication);
			    cookies.set('loggedIn', 'true');
				dispatch(Actions.setAuthentication(authentication));

				return getUserDetails().then(user => {
					dispatch(Actions.setUser(user));
				});
			}
		)
		.catch( function(e) { console.log('catching error authenticating'); });
	};
};

Actions.shortHandAuthenticate = (username, password) => {
	return (dispatch) => {
		return authenticate(username, password).then(
			authentication => {

				const cookies = new Cookies();
				cookies.set('username', username);
				cookies.set('password', password);
				cookies.set('auth', authentication);
				cookies.set('loggedIn', 'true');

				dispatch(Actions.setAuthentication(authentication));

			}
		)
			.catch( function(e) { console.log('catching error authenticating'); });
	};
};

Actions.refreshUser = () => { return (dispatch) => {
	return getUserDetails().then(user => {
		dispatch(Actions.setUser(user));
	});
};
};

Actions.logout = () => {
	return (dispatch) => {
		const cookies = new Cookies();
	    cookies.set('loggedIn', 'false');
		cookies.set('sitter', 'false');
		cookies.set('owner', 'false');
		cookies.set('password', '');
		cookies.set('auth', '');
		cookies.set('authRefresh', '');
		cookies.set('username', '');
		cookies.set('password', '');
		cookies.set('ownerButton', '');
		cookies.set('sitterButton', '');

		dispatch(Actions.setAuthentication(null));
		dispatch(Actions.setUser(null));
	};
};

Actions.setAuthentication = authentication => {
	return {type: Actions.Types.SET_AUTHENTICATION, authentication};
};

Actions.setUser = user => {
	return {type: Actions.Types.SET_USER, user};
};

export { Actions };

let Reducers = {};

const cookies = new Cookies();

Reducers.authentication = (authentication = cookies.get('auth') , action) => {
	switch (action.type) {
		case Actions.Types.SET_AUTHENTICATION: {
			return action.authentication;
		}
		default: {
			return authentication;
		}
	}
};

Reducers.user = (user = null, action) => {
	switch (action.type) {
		case Actions.Types.SET_USER: {
			return action.user;
		}
		default: {
			return user;
		}
	}
};

export { Reducers };