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
import OutlinedTextFields from 'js/components/signUp/ownerRegistrationForms';
import {Link} from 'react-router-dom';

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
});

function getSteps() {
	return [<Typography variant="display1">Basic Information</Typography>,
		<Typography variant="display1">Preferences</Typography>,
		<Typography variant="display1">Profile Picture</Typography>];
}

function getStepContent(step) {
	switch (step) {
		case 0:
			return (
				<div>
					<OutlinedTextFields/>
				</div>
			);
		case 1:
			return (
				<div>
					<OutlinedTextFields/>
				</div>
			);
		case 2:
			return (
				<div>
					<Typography variant="caption">Optional: upload a profile picture from your computer</Typography>
					<input
						accept="image/*"
						id="flat-button-file"
						multiple
						type="file"
					/>
					<label htmlFor="flat-button-file">
						<Button component="span">
							Upload
						</Button>
					</label>
				</div>
			);
		default:
			return 'Unknown step';
	}
}

class VerticalLinearStepper extends React.Component {
	state = {
		activeStep: 0,
	};

	handleNext = () => {
		this.setState(state => ({
			activeStep: state.activeStep + 1,
	    }));
    };

    handleBack = () => {
        this.setState(state => ({
            activeStep: state.activeStep - 1,
        }));
    };

    handleReset = () => {
        this.setState({
            activeStep: 0,
        });
    };

    render() {
        const { classes } = this.props;
        const steps = getSteps();
        const { activeStep } = this.state;

        return (
            <div className={classes.root}>
                <Stepper activeStep={activeStep} orientation="vertical">
                    {steps.map((label, index) => {
                        return (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                                <StepContent>
                                    <Typography>{getStepContent(index)}</Typography>
                                    <div className={classes.actionsContainer}>
                                        <div>
                                            <Button
                                                disabled={activeStep === 0}
                                                onClick={this.handleBack}
                                                className={classes.button}
                                            >
                                                Back
                                            </Button>
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                onClick={this.handleNext}
                                                className={classes.button}
                                            >
                                                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                            </Button>
                                        </div>
                                    </div>
                                </StepContent>
                            </Step>
                        );
                    })}
                </Stepper>
                {activeStep === steps.length && (
                    <Paper square elevation={0} className={classes.resetContainer}>
                        <Typography>All steps completed - you&quot;re finished</Typography>
                        <Link to="/ownerDash">
                            <Button className={classes.button}>
                                Continue to Dashboard
                            </Button>
                        </Link>
                    </Paper>
                )}
            </div>
        );
    }
}

VerticalLinearStepper.propTypes = {
    classes: PropTypes.object,
};

export default withStyles(styles)(VerticalLinearStepper);