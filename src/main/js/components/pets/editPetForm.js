import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import axios from 'axios';
import PropTypes from 'prop-types';
import Cookies from 'universal-cookie';

export default class FormDialog extends React.Component {
    state = {
        open: false,
        name: '',
        age: 0,
        id: 0,
		petType: '',
        dogBreed: '',
        ownerPrincipal: '',
        pets: []
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {
		let { name, age, id, dogBreed, petType, ownerPrincipal } = this.props;
		const endpoint = '/pet/' + id;

		axios.get('/api/pet/' + id, id)
			.then(res => {
				this.setState({
				name: res.name,
                age: res.age,
                dogBreed: res.dogBreed,
                id: res.id,
                ownerPrincipal: res.ownerPrincipal,
				petType: res.petType});
			}).then(response => console.log(response))
			.catch(error => this.setState({error}));
	}


    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

	handleSaveClose = () => {
		const cookies = new Cookies();
		const pet = {
			id: this.state.id,
			ownerPrincipal: cookies.get('username'),
			name: this.state.name,
			petType: this.state.petType,
			dogBreed: this.state.dogBreed,
			age: this.state.age
		};
		axios.post('/pet/add-pet', pet)
			.then(res => {
				console.log(res);
				console.log(res.data);
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
                <ul>
                    <li>{this.state.name}</li>
					<li>{this.state.petType}</li>
					<li>{this.state.dogBreed}</li>
					<li>{this.state.age} years old</li>
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
                        <Button onClick={this.handleSaveClose} color="primary">
                            Save
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

FormDialog.propTypes = {
	name: PropTypes.string,
	age: PropTypes.number,
	type: PropTypes.string,
	breed: PropTypes.string,
};