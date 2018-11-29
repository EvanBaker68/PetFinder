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
import CancelIcon from '@material-ui/icons/Cancel';

let id = 0;

const data = [];

let name = '';

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
            notifications: [],
            open: false,
            start: new Date(),
            end: new Date()
        };

        //load sitter information
    }

    componentDidMount() {

        const cookies = new Cookies();

        // axios.get('/notification/getbysitterprincipal/' + cookies.get('username'), cookies.get('username'))
        //     .then(res => {
        //         this.setState( {
        //             notifications: res.data
        //         });
		//
        //     });
    }

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    handleCancel = () => {
        //remove notification
    };

    render() {
        const notifications = this.state.notifications;
        const loaded = this.state.loaded;
        let list = '';
        if (notifications) {
            list = notifications.map(notification => {
                return (
                    <li>{notification.message}
                        <IconButton color="inherit" onClick={this.handleCancel}>
                            <CancelIcon/>
                        </IconButton>
                    </li>
                );
            });
        }

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
                    {list}
                </Dialog>
            </div>
        );
    }
}

export default withStyles(styles)(FormDialog);