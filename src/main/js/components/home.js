import React from 'react';

import Paper from '@material-ui/core/Paper';
import Image from '../images/homeDog.jpg';
import Typography from '@material-ui/core/Typography';
import NavBar from 'js/TestLogin';

const styles = {
	paperContainer: {
		backgroundImage: `url(${Image})`,
		paddingRight: 24,
		alignItems: 'center',
		height: 500
	},
	aboutContainer: {
		backgroundColor: '#ffe082',
		paddingRight: 0,
		alignItems: 'center',
	}
};

export default class HomePage extends React.Component{
	render(){
		return(
			<div>
				<Paper style={styles.paperContainer}>
					<NavBar />
				</Paper>
				<Paper style={styles.aboutContainer}>
					<Typography variant="display1" color="primary" align="center">
						Why Pet.ty?
					</Typography>
					<Typography variant="body1" align="center" >
						Pet.ty is a pet matching service designed to match pet
						owners and pet sitter together. Unlike other services we
						consider location, time and experience when matching.
					</Typography>
				</Paper>
			</div>
		);
	}
}