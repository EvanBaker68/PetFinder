import axios from 'axios';
import Cookies from 'universal-cookie';
export function register(user) {
	console.log('beginning');
    var temp = axios.post('/api/user/register', user);
	console.log('end');
    //const cookies = new Cookies();
    //cookies.set('loggedIn', 'false', { path: '/' });
    //console.log(cookies.get('loggedIn'));


    return temp;
	//return axios.post('/api/user/register', user);
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
	console.log(user.principal);
	console.log('in register');
	return (dispatch) => {
		return register(user).then(() => {
			return dispatch(Actions.authenticate(user.principal, user.password));
		});
	};
};

Actions.authenticate = (username, password) => {
	return (dispatch) => {
		console.log('heyyyy', username, password);
		return authenticate(username, password).then(
			authentication => {

			    const cookies = new Cookies();
			    cookies.set('username', username, { path: '/'  });
			    cookies.set('password', password, { path: '/'  });
			    cookies.set('auth', authentication, { path: '/' });
			    cookies.set('loggedIn', 'true', { path: '/' });
				console.log('made it in');
			    // callFunc();
                //console.log(cookies.get('loggedIn'));
                //console.log(username);
                //console.log(authentication);
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
		console.log('heyyyy', username, password);
		return authenticate(username, password).then(
			authentication => {

				const cookies = new Cookies();
				cookies.set('username', username, { path: '/'  });
				cookies.set('password', password, { path: '/'  });
				cookies.set('auth', authentication, { path: '/' });
				cookies.set('loggedIn', 'true', { path: '/' });
				console.log('made it in');
				// callFunc();
				//console.log(cookies.get('loggedIn'));
				//console.log(username);
				//console.log(authentication);
				dispatch(Actions.setAuthentication(authentication));

			}
		)
			.catch( function(e) { console.log('catching error authenticating'); });
	};
};

Actions.logout = () => {
	return (dispatch) => {
		const cookies = new Cookies();
	    cookies.set('loggedIn', 'false', { path: '/' });
		cookies.set('isSitter', 'false', { path: '/' });
		cookies.set('isOwner', 'false', { path: '/' });
		cookies.set('password', '', { path: '/'  });
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

Reducers.authentication = (authentication = null, action) => {
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