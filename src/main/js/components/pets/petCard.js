import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Image from 'js/images/dog1.jpeg';
import EditPet from 'js/components/pets/editPetForm';
import axios from 'axios/index';
import Cookies from 'universal-cookie';

const styles = {
    card: {
        marginTop: 75,
        maxWidth: 345,
    },
    media: {
        objectFit: 'cover',
    },
};

class PetCard extends React.Component{

    state = {
        refresh: false
    }

	handleDelete = () => {
		const cookies = new Cookies();
		console.log(cookies.get('username'));
		const pet = {
			id: this.props.id,
            isDeleted: true
		};
		console.log(this.state.name);
		axios.post('/pet/add-pet', pet)
			.then(res => {
				console.log(res);
				console.log(res.data);
			}).then(() => {this.props.handler();})
			.catch(error => {
				console.log(error.response);
			});
	};

    render() {
		const {classes} = this.props;

		return (
			<Card className={classes.card}>
				<CardActions>
					<EditPet id={this.props.id}/>
					<Button onClick={this.handleDelete} padding="10" color="secondary" variant="contained">
						Delete
					</Button>
				</CardActions>
			</Card>
		);
	}
}

PetCard.propTypes = {
	name: PropTypes.string,
	age: PropTypes.number,
	type: PropTypes.string,
	breed: PropTypes.string,
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PetCard);