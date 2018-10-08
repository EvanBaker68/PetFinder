import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import axios from 'axios';

export default class FormDialog extends React.Component {
    state = {
        open: false,
        name: '',
        petType: '',
        dogBreed: '',
        age: '',
        pets: []
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const petId = 111;
        const endpoint = '/pet/' + petId;
        console.log(endpoint);
        axios.get('/pet/' + petId, petId)
            .then(res=> {
                const pets = res.data;
                this.setState({pets});
            });
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
                <ul>
                    { this.state.pets.map(pet => <li>{pet.name}</li>)}
                </ul>
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
                            id="petType"
                            label="Type of Pet"
                            type="petType"
                            fullWidth
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="dogBreed"
                            label="Breed"
                            type="dogBreed"
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