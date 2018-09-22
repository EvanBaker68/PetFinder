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
        height: 800
    },
    aboutContainer: {
        backgroundColor: '000000',
        marginRight: 'auto',
        marginLeft: 'auto',
        alignItems: 'center',
        paddingLeft:24,
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
                    <Typography variant="body1" align="justify">
                            We are a company designed to give pet owners and sitters the
                        best possible experience. [ADD MORE]
                    </Typography>
                </Paper>
            </div>
        );
    }
}