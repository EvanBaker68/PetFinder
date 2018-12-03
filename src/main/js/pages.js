import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import * as Users from 'js/users';
import * as Login from 'js/login';
import OwnerDashboard from 'js/components/OwnerDash';
import SitterDashBoard from 'js/components/dashboard/SitterDashboard';
import Register from 'js/components/signUp/register';
import SignIn from 'js/components/signIn/SignIn';
import OwnerCompleteRegistration from 'js/components/signUp/ownerCompleteRegistration';
import SitterCompleteRegistration from 'js/components/signUp/sitterCompleteRegistration';
import HomePage from 'js/components/home';
import PetPage from 'js/components/pets/petPage';
import OwnerProfile from 'js/components/profile/ProfilePage';
import SitterProfile from 'js/components/profile/sitterProfilePage';
import SitterTimeTable from 'js/components/scheduling/sitterTimeTable';
import SearchPage from './components/search/searchPage';

export class Home extends React.Component {
    render() {
        return (
            <div>
                <HomePage/>
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
                        <hr/>
                        <Login.RegistrationForm/>
                    </div>
                </div>
            </div>
        );
    }
}

export class NewRegisterPage extends React.Component {
    render() {
        return (
            <div>
                <Register/>
            </div>
        );
    }
}

export class ownerCompleteRegisterPage extends React.Component {
    render() {
        return (
            <div>
                <OwnerCompleteRegistration/>
            </div>
        );
    }
}

export class sitterCompleteRegisterPage extends React.Component {
    render() {
        return (
            <div>
                <SitterCompleteRegistration/>
            </div>
        );
    }
}

export class LoginPage extends React.Component {
    render() {
        return (
            <div>
                <SignIn/>
            </div>
        );
    }
}


class sitterDash extends React.Component {
    render() {
        return (
            <div>
                <SitterDashBoard/>
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

export {sitterDash};

class ownerDash extends React.Component {
    render() {
        return (
            <div>
                <OwnerDashboard/>
            </div>
        );
    }
}

export {ownerDash};

export class ownerProfile extends React.Component {
    render() {
        return (
            <div>
                <OwnerProfile/>
            </div>
        );
    }
}

export class sitterProfile extends React.Component {
    render() {
        return (
            <div>
                <SitterProfile/>
            </div>
        );
    }
}

export class sitterTimeTable extends React.Component {
    render() {
        return (
            <div>
                <SitterTimeTable/>
            </div>
        );
    }
}

export class pets extends React.Component {
    render() {
        return (
            <div>
                <PetPage/>
            </div>
        );
    }

}

export class searchForSitters extends React.Component {
    render() {
        return (
            <div>
                <SearchPage/>
            </div>
        );
    }

}

export class otherSitterProfile extends React.Component {
    render() {
        return (
            <div className="container padded">
                Welcome to [Name]'s Profile

                <li><Link to="/bookSitter">Book this sitter</Link></li>
            </div>
        );
    }

}

export class bookSitter extends React.Component {
    render() {
        return (
            <div className="container padded">
                Select the day(s) and pet(s) you would like to request a sitter for.

                <li><Link to="/bookingConfirmation">Confirm the booking</Link></li>
            </div>
        );
    }

}

export class TestPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {testMessage: 'default value'};
    }


    componentDidMount() {
        fetch('/test/')
            .then(
                (response) => response.text()
            ).then((responseText) => {
            // noinspection JSAnnotator
            this.setState({
                testMessage: responseText
            });
        }).catch((error) => {
            alert(error);
        });
    }

    render() {
        return (
            <div className="container padded">
                <label>{this.state.testMessage}</label>
            </div>
        );
    }
}