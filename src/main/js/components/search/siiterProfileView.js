import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import axios from 'axios';
import Cookies from 'universal-cookie';
import Calender from './sitterCalender';

export default class FormDialog extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            num: props.number,
            open: false,
            firstname: '',
            lastname: '',
            rating: ''
        };
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
        const num = this.state.num;
        return (
            <div>
                <Button onClick={this.handleClickOpen}>View</Button>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                    fullWidth={true}
                >
                    <DialogTitle id="form-dialog-title">{this.props.num}</DialogTitle>
                    <Calender principle={this.props.num}/>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button>
                            Book
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}