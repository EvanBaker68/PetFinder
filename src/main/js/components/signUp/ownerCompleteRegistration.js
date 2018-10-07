import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import BasicInfoFields from 'js/components/signUp/basicInformationForm';
import OwnerInfoFields from 'js/components/signUp/ownerInformationForm';
import {Link} from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import AddPet from 'js/components/pets/addPetForm';

const styles = theme => ({
    root: {
        width: '90%',
    },
    button: {
        marginTop: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    actionsContainer: {
        marginBottom: theme.spacing.unit * 2,
    },
    resetContainer: {
        padding: theme.spacing.unit * 3,
    },
    paper: {
        marginTop: theme.spacing.unit * 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },
    layout: {
        width: 'auto',
        display: 'block',
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(700 + theme.spacing.unit * 3 * 2)]: {
            width: 700,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
});

class OwnerCompleteRegistration extends React.Component {

    render() {
        const { classes } = this.props;

        return (
            <React.Fragment>
                <CssBaseline />
                <main className={classes.layout}>
                    <Paper className={classes.paper}>
                        <Typography variant="display1">Register</Typography>
                        <Typography variant="headline">Basic Information</Typography>
                        <BasicInfoFields/>
                        <Typography variant="headline">Preferences</Typography>
                        <OwnerInfoFields/>
                        <AddPet/>
                        <Link to="/ownerDash">
                            <Button color="secondary">Next</Button>
                        </Link>
                    </Paper>
                </main>
            </React.Fragment>
        );
    }
}

OwnerCompleteRegistration.propTypes = {
    classes: PropTypes.object,
};

export default withStyles(styles)(OwnerCompleteRegistration);