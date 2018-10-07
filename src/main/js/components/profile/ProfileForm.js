import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

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
        firstname: 'Bobby',
        lastName: 'B'
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    render() {
        const { classes } = this.props;

        return (
            <form className={classes.container} noValidate autoComplete="off">
                <TextField
                    id="standard-name"
                    label="Name"
                    className={classes.textField}
                    value={this.state.firstname}
                    onChange={this.handleChange('firstname')}
                    margin="normal"
                />
                <TextField
                    id="standard-name"
                    label="Last Name"
                    className={classes.textField}
                    value={this.state.lastName}
                    onChange={this.handleChange('lastname')}
                    margin="normal"
                />
                <TextField
                    id="outlined-name"
                    label="Street Address"
                    className={classes.textField}
                    value={this.state.name}
                    onChange={this.handleChange('address')}
                    margin="normal"
                    variant="standard"
                />
                <TextField
                    id="outlined-name"
                    label="City"
                    className={classes.textField}
                    value={this.state.name}
                    onChange={this.handleChange('city')}
                    margin="normal"
                    variant="standard"
                />
                <TextField
                    id="outlined-name"
                    label="State"
                    className={classes.textField}
                    value={this.state.name}
                    onChange={this.handleChange('state')}
                    margin="normal"
                    variant="standard"
                />
                <TextField
                    id="outlined-name"
                    label="Zip Code"
                    className={classes.textField}
                    value={this.state.name}
                    onChange={this.handleChange('zipCode')}
                    margin="normal"
                    variant="standard"
                />
                <TextField
                    id="outlined-name"
                    label="Phone Number"
                    className={classes.textField}
                    value={this.state.name}
                    onChange={this.handleChange('phone')}
                    margin="normal"
                    variant="standard"
                />
            </form>
        );
    }
}

ProfileForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProfileForm);