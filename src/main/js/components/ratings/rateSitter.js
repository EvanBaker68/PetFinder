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
        };

        //load sitter information
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
        //num should eventually be sitter details
        //const principal = this.state.principal;
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
                            onChange={(value) => console.log(`Rated with value ${value}`)}
                        />
                        <Button onClick={this.handleClose} >Done</Button>
                    </div>
                </Dialog>
            </div>
        );
    }
}

export default withStyles(styles)(FormDialog);