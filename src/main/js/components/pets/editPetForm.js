import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class FormDialog extends React.Component {
    state = {
        open: false,
        name: '',
        type: '',
        breed: '',
        comment: ''
    };

    constructor(props) {
        super(props);
    }

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        return (
            <div>
                <Button color="secondary" variant="contained" onClick={this.handleClickOpen}>Edit</Button>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">Edit Pet</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Change {this.state.name}'s details
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="name"
                            type="name"
                            fullWidth
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="type"
                            label="Type of Pet"
                            type="type"
                            fullWidth
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="breed"
                            label="Breed"
                            type="breed"
                            fullWidth
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="comment"
                            label="Additional Comment"
                            type="comment"
                            fullWidth
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={this.handleClose} color="primary">
                            Save
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}