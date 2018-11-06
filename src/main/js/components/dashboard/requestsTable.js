import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import axios from 'axios/index';
import Cookies from 'universal-cookie';

const styles = {
    root: {
        width: '100%',
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
};

let id = 0;




class RequestTable extends React.Component {

    state = {
        name: '',
        bookings: []
    }

	componentDidMount() {

		const cookies = new Cookies();

		axios.get('/booking/sitter/' + cookies.get('username'), cookies.get('username'))
			.then(res => {
			    console.log(res);
				this.setState({
					bookings: res});
			}).then(response => console.log(response))
			.catch(error => this.setState({error}));
		}


	createData = (name, startDate, endDate, approved) => {
		id += 1;
		return { id, name, startDate, endDate, approved };
	}

render() {

    const { bookings } = this.state;
    const { classes } = this.props;
	const data = [];


	if(bookings)
	{bookings.map(booking => {
		const startDate = new Date(booking.startDate);
		const endDate = new Date(booking.endDate);
        const status = booking.status;
        const ownerPrincipal = booking.ownerPrincipal;
        var name = '';
        console.log('heybuckaroo');

		axios.get('/api/user/' + ownerPrincipal, ownerPrincipal)
			.then(res => {
			    console.log('user: ', res);
				name = res.firstName + ' ' + res.lastName;
			}).then(response => console.log(response))
			.catch(error => this.setState({error}));

		data.push(this.createData(name, startDate, endDate, status));


	});}



	return (
		<Paper className={classes.root}>
			<Table className={classes.table}>
				<TableHead>
					<TableRow>
						<TableCell>Owner</TableCell>
						<TableCell>Start Date</TableCell>
						<TableCell>End Date</TableCell>
						<TableCell>Approve</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{data.map(n => {
						return (
							<TableRow key={n.id}>
								<TableCell component="th" scope="row">
									{n.name}
								</TableCell>
								<TableCell>{n.startDate.toLocaleString()}</TableCell>
								<TableCell>{n.endDate.toLocaleString()}</TableCell>
								<TableCell>
									{n.approved &&
									<Button
										variant="contained"
										color='secondary'>
										Approve
									</Button>
									}
									{!n.approved &&
									<Button
										variant="contained"
										color='secondary'>
										Cancel
									</Button>
									}
								</TableCell>
							</TableRow>
						);
					})}
				</TableBody>
			</Table>
		</Paper>
	);
}

}


RequestTable.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RequestTable);