import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Cookies from 'universal-cookie';
import axios from 'axios/index';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    dense: {
        marginTop: 16,
    },
    menu: {
        width: 200,
    },
});

class OutlinedTextFields extends React.Component {
    state = {
        numPets: 0
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

	handleAddClose = () => {
		const cookies = new Cookies();
		const owner = {
			principal: cookies.get('username'),
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

	componentDidMount() {
		const cookies = new Cookies();
		axios.get('/owner/' + cookies.get('username').replace(/@/g, '%40'), cookies.get('username').replace(/@/g, '%40'))
			.then(res => {
				this.setState({
					numPets: res.numPets});
			}).then(response => console.log(response))
			.catch(error => this.setState({error}));
	}


    render() {
        const { classes } = this.props;

        return (
            <form className={classes.container} noValidate autoComplete="off">
                <TextField
                    id="outlined-name"
                    label="Number of Pets"
                    className={classes.textField}
                    value={this.state.numPets}
                    onChange={this.handleChange('numPets')}
                    margin="normal"
                    variant="standard"
                />
				<Link to="/ownerDash">
					<Button color="secondary"
                    onClick={this.handleAddClose}>Next</Button>
				</Link>
            </form>
        );
    }
}

OutlinedTextFields.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OutlinedTextFields);