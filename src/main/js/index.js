import React from 'react';
import {HashRouter, Route} from 'react-router-dom';
import * as Pages from 'js/pages';
import Cookies from 'universal-cookie';
import {connect} from 'react-redux';

export default class Index extends React.Component {

    constructor(props) {
        super(props);
        const cookies = new Cookies();
        if (cookies.get('authRefresh')) {
            cookies.set('auth', cookies.get('authRefresh'));
        }
    }

    render() {
        return (
            <HashRouter>
                <div>
                    <Route exact path="/" component={Pages.Home}/>
                    <Route exact path="/register" component={Pages.RegisterPage}/>
                    <Route exact path="/newRegister" component={Pages.NewRegisterPage}/>
                    <Route exact path="/ownerCompleteRegistration" component={Pages.ownerCompleteRegisterPage}/>
                    <Route exact path="/sitterCompleteRegistration" component={Pages.sitterCompleteRegisterPage}/>
                    <Route exact path="/login" component={Pages.LoginPage}/>
                    <Route exact path="/sitterDash" component={Pages.sitterDash}/>
                    <Route exact path="/ownerDash" component={Pages.ownerDash}/>
                    <Route exact path="/ownerPets" component={Pages.pets}/>
                    <Route exact path="/ownerProfile" component={Pages.ownerProfile}/>
                    <Route exact path="/sitterProfile" component={Pages.sitterProfile}/>
                    <Route exact path="/sitterTimeTable" component={Pages.sitterTimeTable}/>
                    <Route exact path="/search" component={Pages.searchForSitters}/>

                </div>
            </HashRouter>
        );
    }
}

Index = connect(
    state => ({}),
    dispatch => ({})
)(Index);
