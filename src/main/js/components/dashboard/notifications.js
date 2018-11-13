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
            booking: [],
            open: false,
            start: new Date(),
            end: new Date()
        };

        //load sitter information
    }

    componentDidMount() {

        const cookies = new Cookies();

        axios.get('/booking/sitter/' + cookies.get('username'), cookies.get('username'))
            .then(res => {
                console.log(res);
                this.setState({
                    bookings: res});
                if(this.state.bookings)
                {this.state.bookings.map(booking => {
                    const startDate = new Date(booking.startDate);
                    const endDate = new Date(booking.finishDate);
                    const status = booking.status;
                    const ownerPrincipal = booking.ownerPrincipal;

                    console.log('startDate: ', startDate);
                    console.log('endDate: ', endDate);

                    axios.get('/api/user/' + ownerPrincipal, ownerPrincipal)
                        .then(res => {
                            name = res.firstName + ' ' + res.lastName;
                            console.log('name2: ', name);

                            data.push(this.createData(name));
                            this.setState({loaded: true});
                        }).then(response => console.log(response))
                        .catch(error => this.setState({error}));


                });}

            }).then(response => console.log(response))
            .catch(error => this.setState({error}));
    }

    createData = (name) => {
        return { name};
    }

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };


    render() {
        const { bookings } = this.state;
        const loaded = this.state.loaded;

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
                    {loaded &&
                    <ul>
                        {data.map(n => {
                            console.log('NAME:', n.name);
                            return (
                                <li>{n.name} has requested you as a sitter</li>
                            );
                        })}
                    </ul>
                    }
                </Dialog>
            </div>
        );
    }
}

export default withStyles(styles)(FormDialog);