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
import SitterCalender from './sitterCalender';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

function DateAndTimePickers(props) {
    const { classes } = props;

    return (
        <form className={classes.container} noValidate>
            <TextField
                id="datetime-local"
                label="Next appointment"
                type="datetime-local"
                defaultValue="2017-05-24T10:30"
                className={classes.textField}
                InputLabelProps={{
                    shrink: true,
                }}
            />
        </form>
    );
}

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
            principal: props.principal,
            name: props.name,
            rate: '',
            city: props.city,
            open: false,
            start: new Date(),
            end: new Date(),
            pets: []
        };

        //load sitter information
    }


	componentDidMount() {

        const cookies = new Cookies();

		axios.get('/api/user/' + this.props.principal, this.props.principal)
			.then(res => {
				this.setState({ city: res.city });
				axios.get('/sitter/' + this.props.principal, this.props.principal).then(res => {
				    this.setState({ rate: res.rate });
                }).then(response => console.log(response))
					.catch(error => this.setState({error}));
			}).then(response => console.log(response))
			.catch(error => this.setState({error}));

        axios.get('/pet/pets/' + cookies.get('username'), cookies.get('username'))
            .then(res => {
                this.setState({
                    pets: res
                });
                console.log(res);
            }).then(response => console.log(response))
            .catch(error => this.setState({error}));
        this.handler();

		//
		// axios.get('/pet/pets/' + cookies.get('username'), cookies.get('username'))
		// 	.then(res => {
		// 		this.setState({
		// 			pets: res
		// 		});
		// 		console.log(res);
		// 	}).then(response => console.log(response))
		// 	.catch(error => this.setState({error}));
	}


    saveBooking = () => {
        const cookies = new Cookies();
        console.log(cookies.get('username'));
        const booking = {
            id: (((1+Math.random())*0x10000)|0),
            ownerPrincipal: cookies.get('username'),
            sitterPrincipal: this.state.principal,
            startDate: this.state.start,
            finishDate: this.state.end,
            status: 'pending'
        };

        let message = booking.ownerPrincipal + ' has requested a booking starting at ' + booking.startDate;

        console.log(this.state.name);
        console.log(this.state.start);
        console.log(this.state.end);
        axios.post('/booking/add-booking', booking)
            .then(res => {
                console.log(res);
                console.log(res.data);
                this.setState({open: false});
                this.onClose();
            })
            .catch(error => {
                console.log(error.response);
            });
    };

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    onClose = () => {

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

        return (
            <div>
                <Button onClick={this.handleClickOpen}>View</Button>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                    fullWidth={true}
                >
                    <DialogTitle id="form-dialog-title">{this.state.name}</DialogTitle>
                    <Typography>Rating</Typography>
                    <Typography>Cost Per Hour: ${this.state.rate}</Typography>
                    <Typography variant="text">City : {this.state.city}</Typography>
                    <SitterCalender principal={this.state.principal}/>
                    <Select
                        value={this.state.age}
                        onChange={this.handleChange}
                        inputProps={{
                            name: 'age',
                            id: 'age-simple',
                        }}
                    >
                        <MenuItem value=""/>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                    <form className={classes.container} noValidate>
                        <TextField
                            id="datetime-local"
                            label="Start of appointment"
                            type="datetime-local"
                            defaultValue={this.state.start}
                            value={this.state.start}
                            onChange={this.handleChange('start')}
                            className={classes.textField}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </form>
                    <form className={classes.container} noValidate>
                        <TextField
                            id="datetime-local"
                            label="End of appointment"
                            type="datetime-local"
                            defaultValue={this.state.end}
                            value={this.state.end}
                            className={classes.textField}
                            onChange={this.handleChange('end')}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </form>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={this.saveBooking}>
                            Book
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default withStyles(styles)(FormDialog);