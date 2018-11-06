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

const styles = {
    card: {
        marginTop: 75,
        maxWidth: 345,
    },
    media: {
        objectFit: 'cover',
    },
};

function PetCard(props) {
    const { classes } = props;

    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    className={classes.media}
                    height="140"
                    image={Image}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="headline" component="h2">
                        {props.name}
						{console.log(props.id)}
                    </Typography>
                    <Typography component="p">
                        {props.type}, {props.breed}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <EditPet id={props.id}/>
                <Button size="small" color="secondary">
                    Delete
                </Button>
            </CardActions>
        </Card>
    );
}

PetCard.propTypes = {
	name: PropTypes.string,
	age: PropTypes.number,
	type: PropTypes.string,
	breed: PropTypes.string,
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PetCard);