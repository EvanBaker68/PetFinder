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
import RateSitter from 'js/components/ratings/rateSitter';
import Cookies from 'universal-cookie';
import axios from 'axios/index';

const styles = {
    root: {
        width: '100%',
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
};

let data = [];

let name = '';

class SimpleTable extends React.Component{

	state = {
		name: '',
		bookings: [],
		load: true,
		loaded: false
	};

	componentDidMount() {
		data = [];
		const cookies = new Cookies();

		axios.get('/booking/sitter/' + cookies.get('username'), cookies.get('username'))
			.then(res => {
				console.log('Results: ', res);
				this.setState({
					bookings: res});
				if(this.state.bookings)
				{this.state.bookings.map(booking => {

					const startDate = new Date(booking.startDate);
					const endDate = new Date(booking.finishDate);
					const status = booking.status;
					const id = booking.id;
					const ownerPrincipal = booking.ownerPrincipal;

					console.log('startDate: ', startDate);
					console.log('endDate: ', endDate);

					if(booking.sitterPrincipal === cookies.get('username')
						&& booking.status === 'past')
						axios.get('/api/user/' + ownerPrincipal, ownerPrincipal)
							.then(res => {
								console.log('name: ', res.firstName);
								console.log('startDate', startDate);
								console.log('endDate', endDate);
								console.log('status', status);
								console.log('data1:',data);
								name = res.firstName + ' ' + res.lastName;
								console.log('name2: ', name);

								data.push(this.createData(id, name, startDate, endDate));
								this.setState({loaded: true});
							}).then(response => console.log(response))
							.catch(error => this.setState({error}));


				});}

			}).then(response => console.log(response))
			.catch(error => this.setState({error}));
	}


	createData = (id, name, startDate, endDate) => {
		return { id, name, startDate, endDate};
	}

	cancelBooking(id) {
		axios.get('/booking/' + id, id)
			.then(res => {
				var booking = res;
				booking.status = 'canceled';
				axios.post('/booking/add-booking', booking)
					.then(res => {
						console.log(res);
					})
					.catch(error => {
						console.log(error.response);
					});
			}).then(response => console.log(response))
			.catch(error => this.setState({error}));
	}

	approveBooking(id) {
		axios.get('/booking/' + id, id)
			.then(res => {
				var booking = res;
				booking.status = 'past';
				axios.post('/booking/add-booking', booking)
					.then(res => {
						console.log(res);
					})
					.catch(error => {
						console.log(error.response);
					});
			}).then(response => console.log(response))
			.catch(error => this.setState({error}));
	}

    render() {


		const {classes} = this.props;


		return (
			<Paper className={classes.root}>
				<Table className={classes.table}>
					<TableHead>
						<TableRow>
							<TableCell>Owner</TableCell>
                            <TableCell>Start Date</TableCell>
							<TableCell>End Date</TableCell>
							<TableCell>Rate Owner</TableCell>
							<TableCell>Public Comment</TableCell>
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
										<RateSitter name={n.name}/>
									</TableCell>
									<TableCell>
                                        hey
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

SimpleTable.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);