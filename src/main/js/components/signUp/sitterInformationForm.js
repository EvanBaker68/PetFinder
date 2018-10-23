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
        rate: 0
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

	handleAddClose = () => {
		const cookies = new Cookies();
		const sitter = {
			principal: cookies.get('username'),
			rate: this.state.rate
		};
		axios.post('/sitter/add-sitter', sitter)
			.then(res => {
				console.log(res);
				console.log(res.data);
			})
			.catch(error => {
				console.log(error.response);
			});
	};

    render() {
        const { classes } = this.props;

        if( cookies.get('isSitter') === 'false' ) {
            return <div><Redirect to='/'/></div>;
        }

        return (
            <form className={classes.container} noValidate autoComplete="off">
                <TextField
                    id="outlined-name"
                    label="Cost per hour"
                    className={classes.textField}
                    value={this.state.rate}
                    onChange={this.handleChange('rate')}
                    margin="normal"
                    variant="standard"
                />
				<Link to="/sitterDash">
					<Button onClick={this.handleAddClose}
                            color="secondary">Next</Button>
				</Link>
            </form>
        );
    }
}

OutlinedTextFields.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OutlinedTextFields);