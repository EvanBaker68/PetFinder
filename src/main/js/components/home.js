import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Image from '../images/homeDog.jpg';
import Image2 from '../images/cat.jpeg';
import Typography from '@material-ui/core/Typography';
import NavBar from 'js/TestLogin';
import teal from '@material-ui/core/colors/teal';
import Comment from 'js/components/ratings/OwnerComment';

const styles = {
	paperContainer1: {
		backgroundImage: `url(${Image})`,
		paddingRight: 24,
		alignItems: 'center',
		height: 500
	},
    paperContainer2: {
        backgroundImage: `url(${Image2})`,
        paddingRight: 24,
        alignItems: 'center',
        height: 500
    },
	aboutContainer: {
		backgroundColor: 'teal',
		paddingRight: 0,
		height: 400,
		alignItems: 'center',
	},
    aboutContainer2: {
        backgroundColor: '#ffe082',
        paddingRight: 0,
        height: 100,
        alignItems: 'center',
    }
};

export default class HomePage extends React.Component{
	render(){
		return(
			<div>
				<Paper style={styles.paperContainer1}>
					<NavBar />
				</Paper>
				<Paper style={styles.aboutContainer}>
					<Grid alignContent="center">
						<Typography variant="display1" color="secondary" align="center">
							Why Pet.ty?
						</Typography>
					</Grid>
					<Grid>
						<Typography variant="body1" align="center" >
							Pet.ty is a pet matching service designed to match pet
							owners and pet sitter together. Unlike other services we
							consider location, time and experience when matching.
						</Typography>
					</Grid>
				</Paper>
				<Paper style={styles.paperContainer2}/>
				<Paper style={styles.aboutContainer2}/>
			</div>
		);
	}
}