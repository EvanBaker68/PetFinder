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
        open: false,
        name: '',
        dogBreed: '',
        petType: '',
        age: ''
    };

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    handleAddClose = () => {
        const cookies = new Cookies();
        const pet = {
            petId: 1,
            ownerPrinciple: cookies.get('username'),
            name: this.state.name,
            petType: this.state.petType,
            dogBreed: this.state.dogBreed,
            age: this.state.age
        };
        console.log(this.state.name);
        axios.post('/pet/add-pet', pet)
            .then(res => {
                console.log(res);
                console.log(res.data);
                console.log('eyyyy');
                this.setState({open: false});
            })
            .catch(error => {
                console.log(error.response);
        });
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    render() {


        return (
            <div>
                <Button onClick={this.handleClickOpen}>Add new pet</Button>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">New Pet</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Enter details about your pet!
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Name"
                            value={this.state.name}
                            onChange={this.handleChange('name')}
                            fullWidth
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="petType"
                            label="Type of Pet"
                            type="petType"
                            value={this.state.petType}
                            onChange={this.handleChange('petType')}
                            fullWidth
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="dogBreed"
                            label="Breed"
                            type="dogBreed"
                            value={this.state.dogBreed}
                            onChange={this.handleChange('dogBreed')}
                            fullWidth
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="age"
                            label="Age"
                            type="age"
                            value={this.state.age}
                            onChange={this.handleChange('age')}
                            fullWidth
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={this.handleAddClose} color="primary">
                            Add
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}