import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import axios from 'axios';
import {withStyles} from '@material-ui/core';
import Rating from 'react-rating';
import Star from '@material-ui/icons/Star';

const styles = theme => ({
	container: {
		display: 'flex',
		flexWrap: 'wrap',
	},
	textField: {
		width: 200,
	},
});

class FormDialog extends React.Component {
	constructor(props) {
		super(props);
		console.log(props);
		this.state = {
			open: false,
			num: props.number,
			principal: props.principal,
			name: props.name,
			id: props.id,
			value: 0
		};
	}

	handleClickOpen = () => {
		this.setState({ open: true });
	};

	handleClose = () => {
		this.setState({ open: false });

		axios.get('/api/owner/' + this.state.principal, this.state.principal).then(
			res => {
				console.log(res);
				const owner = res;
				owner.rating *= owner.ratingCount;
				owner.rating += this.state.value;
				owner.ratingCount += 1;
				owner.rating /= owner.ratingCount;
				owner.rating = Math.round( owner.rating * 10 ) / 10;

				axios.post('/api/owner/add-owner', owner)
					.then(res => {
						console.log(res);
						console.log(res.data);
					})
					.then(response => console.log(response))
					.catch(error => this.setState({error}));
			}
		).then(response => console.log(response))
			.catch(error => this.setState({error}));


		axios.get('/api/booking/' + this.state.id, this.state.id)
			.then(res => {
				var booking = res;
				booking.isRatedBySitter = true;
				booking.scoreBySitter = this.state.value;
				axios.post('/api/booking/add-booking', booking)
					.then(res => {
						console.log(res);
					})
					.catch(error => {
						console.log(error.response);
					});

				let message = booking.sitterPrincipal + ' rated you a ' + this.state.value + ' out of 5.';

				var notification = {
					message: message,
					ownerPrincipal: booking.ownerPrincipal
				};

				axios.post('/notification/add-notification/', notification)
					.then(res => {
						console.log(res);
					});

			}).then(() => {this.props.handler();}).then(response => console.log(response))
			.catch(error => this.setState({error}));

	};

	handleChange = name => event => {
		this.setState({
			[name]: event.target.value,
		});
	};

	sendRating = (value) => {


	}

	render() {
		const { classes } = this.props;
		const star = Star;

		return (
			<div>
				<Button onClick={this.handleClickOpen}>Rate</Button>
				<Dialog
					open={this.state.open}
					onClose={this.handleClose}
					aria-labelledby="form-dialog-title"
				>
					<DialogTitle id="form-dialog-title">Rate {this.state.name}</DialogTitle>
					<div>
						<Rating
							onChange={(value) => {this.setState({value: value});}}
                            initialRating={this.state.value}
						/>
						<Button onClick={this.handleClose} >Done</Button>
					</div>
				</Dialog>
			</div>
		);
	}
}

export default withStyles(styles)(FormDialog);