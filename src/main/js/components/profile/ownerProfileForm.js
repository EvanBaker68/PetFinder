import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios/index';
import Cookies from 'universal-cookie';
import  { Redirect } from 'react-router-dom';

const cookies = new Cookies();

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
    },
});

class ProfileForm extends React.Component {
    state = {
        numPets: 0
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

	componentDidMount() {
		const cookies = new Cookies();
		const principal = cookies.get('username');
		var formattedPrincipal = principal.replace(/./g, '%2E');
		// console.log(principal);
		axios.get('/owner/' + principal, principal)
			.then(res => {
				this.setState({
					numPets: res.numPets});
			}).then(response => console.log(response))
			.catch(error => this.setState({error}));
	}

	handleAddClose = () => {
		const cookies = new Cookies();
		const owner = {
			principal: cookies.get('username').replace(/@/g, '%40'),
			numPets: this.state.numPets
		};
		axios.post('/owner/add-owner', owner)
			.then(res => {
				console.log(res);
				console.log(res.data);
			})
			.catch(error => {
				console.log(error.response);
			});
	};

    render(){
        const { classes } = this.props;

        if( cookies.get('isOwner') === 'false' ) {
            return <div><Redirect to='/'/></div>;
        }

        return (
            <div>
                <form className={classes.container} noValidate autoComplete="off">
                    <TextField
                        id="standard-name"
                        label="Number of Pets"
                        className={classes.textField}
                        value={this.state.numPets}
                        onChange={this.handleChange('numPets')}
                        margin="normal"
                    />
                </form>
                <Button onClick={this.handleAddClose}>Save Owner Info</Button>
            </div>
        );
    }
}

ProfileForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProfileForm);