
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

export default class FormDialog extends React.Component {
    state = {

    };

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    handlePostClose = () => {

    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    render() {


        return (
            <div>
                <Button onClick={this.handleClickOpen}>Comment</Button>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">Rate "NAME"</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Leave a comment about your experience sitting for "NAME"
                        </DialogContentText>
                        <TextField
                            multiline={true}
                            autoFocus
                            margin="dense"
                            id="name"
                            label=""
                            value={this.state.name}
                            onChange={this.handleChange('name')}
                            fullWidth
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={this.handlePostClose} color="primary">
                            Post
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}
