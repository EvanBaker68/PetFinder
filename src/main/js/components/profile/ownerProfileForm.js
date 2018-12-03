import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import axios from 'axios/index';
import Cookies from 'universal-cookie';
import  { Redirect } from 'react-router-dom';


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

		axios.get('/api/owner/' + principal, principal)
			.then(res => {
				this.setState({
					numPets: res.numPets,
					rating: res.rating});
			}).then(response => console.log(response))
			.catch(error => this.setState({error}));
	}

	handleAddClose = () => {
		const cookies = new Cookies();
		const owner = {
			principal: cookies.get('username'),
		};
		axios.post('/api/owner/add-owner', owner)
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

        const cookies = new Cookies();
		if( cookies.get('owner') !== 'true' ) {
			return <div><Redirect to='/'/></div>;
		}


		return (
            <div>
                <form className={classes.container} noValidate autoComplete="off">
					<Typography variant="display1">
						Rating: {this.state.rating}
					</Typography>
                </form>
            </div>
        );
    }
}

ProfileForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProfileForm);