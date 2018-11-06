import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import axios from 'axios';
import Cookies from 'universal-cookie';
import {withStyles} from '@material-ui/core';
import Badge from '@material-ui/core/Badge/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';
import IconButton from '@material-ui/core/IconButton/IconButton';

function DateAndTimePickers(props) {
    const { classes } = props;

    return (
        <form className={classes.container} noValidate>
            <TextField
                id="datetime-local"
                label="Next appointment"
                type="datetime-local"
                defaultValue="2017-05-24T10:30"
                className={classes.textField}
                InputLabelProps={{
                    shrink: true,
                }}
            />
        </form>
    );
}

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 400,
    },
});

class FormDialog extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            requests: null,
            open: false,
            start: new Date(),
            end: new Date()
        };

        //load sitter information
    }

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    render() {
        const requests = this.state.resquests;
        const { classes } = this.props;

        return (
            <div>
                <IconButton color="inherit" onClick={this.handleClickOpen}>
                    <Badge badgeContent={2} color="secondary">
                        <NotificationsIcon/>
                    </Badge>
                </IconButton>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                    fullWidth={true}
                >
                    <DialogTitle id="form-dialog-title">Notifications</DialogTitle>
                    <ul>
                        <li>"Someone" has requested you on "this date"</li>
                        <li>You have resquested "someone" on "this date"</li>
                    </ul>
                </Dialog>
            </div>
        );
    }
}

export default withStyles(styles)(FormDialog);