import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import axios from 'axios';
import Cookies from 'universal-cookie';
import Calender from './sitterCalender';
import {withStyles} from '@material-ui/core';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 400,
    },
});

class FormDialog extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            num: props.number,
            open: false,
            date: '',
            start: '',
            end: ''
        };
    }

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    render() {
        const num = this.state.num;
        const { classes } = this.props;

        return (
            <div>
                <Button onClick={this.handleClickOpen}>View</Button>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                    fullWidth={true}
                >
                    <DialogTitle id="form-dialog-title">{this.props.num}</DialogTitle>
                    <Typography>Rating</Typography>
                    <Typography>Cost Per Hour</Typography>
                    <Typography variant="text">City</Typography>
                    <TextField
                        id="standard-name"
                        label="Requested Date"
                        className={classes.textField}
                        value={this.state.date}
                        onChange={this.handleChange('date')}
                        margin="normal"
                    />
                    <TextField
                        id="standard-name"
                        label="Start Time"
                        className={classes.textField}
                        value={this.state.start}
                        onChange={this.handleChange('start')}
                        margin="normal"
                    />
                    <TextField
                        id="standard-name"
                        label="End Time"
                        className={classes.textField}
                        value={this.state.end}
                        onChange={this.handleChange('end')}
                        margin="normal"
                    />
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button>
                            Book
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default withStyles(styles)(FormDialog);