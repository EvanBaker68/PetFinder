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
        age: 0,
        petId: 0,
        dogBreed: '',
        ownerPrinciple: '',
        pets: []
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {
		const petId = 1;
		const endpoint = '/pet/' + petId;
		console.log(endpoint);
		axios.get('/pet/' + petId, petId)
			.then(res => res.data.results.map(pet =>
				({
					name: '${pet.name}',
					petType: '${pet.petType}',
					dogBreed: '${pet.dogBreed}',
					age: '${pet.age}',
					petId: '${pet.petId}',
					ownerPrinciple: '${pet.ownerPrinciple}'
				}))
			).then(pets => {
			this.setState({
				pets
			});
		}).then(response => console.log(response))
			.catch(error => this.setState({error}));

	}


    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        const { pets } = this.state;
        // console.log(pets);
		// pets.map(pet => {
		// 	const { name, petType, dogBreed, petId, ownerPrinciple } = pet;
		// 	this.setState({name: name, dogBreed: dogBreed, petId: petId, petType: petType, ownerPrinciple: ownerPrinciple});
		// });
        return (

            <div>
                <ul>
                    <li>{this.state.name}</li>
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
                            Change {this.state.dogBreed}'s details
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="name"
                            type="name"
                            value={this.state.age}
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