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
import SitterView from 'js/components/search/siiterProfileView';
import RateSitter from 'js/components/ratings/rateSitter';
import Comment from 'js/components/ratings/OwnerComment';


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

class SimpleTable extends React.Component {

	state = {
		name: '',
		bookings: [],
		load: true,
		loaded: false,
		rand: false
	};

	componentDidMount() {
		data = [];
		const cookies = new Cookies();

		axios.get('/api/booking/owner/' + cookies.get('username'), cookies.get('username'))
			.then(res => {
				console.log('Results: ', res);
				this.setState({
					bookings: res});
				if(this.state.bookings)
				{this.state.bookings.map(booking => {
					console.log('BOOKING: ', booking);

					const startDate = new Date(booking.startDate);
					const endDate = new Date(booking.finishDate);
					const status = booking.status;
					const id = booking.id;
					const sitterPrincipal = booking.sitterPrincipal;
					const reviewedByOwner = booking.isReviewedByOwner;
					const ratedByOwner = booking.isRatedByOwner;
					const rating = booking.scoreByOwner;

					console.log('startDate: ', startDate);
					console.log('endDate: ', endDate);

					if(booking.ownerPrincipal === cookies.get('username')
						&& booking.status === 'approved' && (endDate < new Date()))
						axios.get('/api/user/' + sitterPrincipal, sitterPrincipal)
							.then(res => {
								const city = res.city;
								name = res.firstName + ' ' + res.lastName;
								console.log('name2: ', name);

								data.push(this.createData(id, name, sitterPrincipal, city, startDate, endDate, ratedByOwner, rating));
								this.setState({loaded: true});
							}).then(response => console.log(response))
							.catch(error => this.setState({error}));


				});}

			}).then(response => console.log(response))
			.catch(error => this.setState({error}));
	}

	setRand = () => {
		this.setState({rand: true});
	}

	createData = (id, name, principal, city, startDate, endDate, ratedByOwner, rating) => {
		return { id, name, principal, city, startDate, endDate, ratedByOwner, rating};
	}



    render() {

		const {classes} = this.props;
		console.log('Data: ', data);

		return (
			<Paper className={classes.root}>
				<Table className={classes.table}>
					<TableHead>
						<TableRow>
							<TableCell>Sitter</TableCell>
							<TableCell>Start Date</TableCell>
							<TableCell>End Date</TableCell>
							<TableCell>Rate</TableCell>
							<TableCell>Book Again</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{data.map(n => {

							var newStartDate = new Date(n.startDate);
							var newEndDate = new Date(n.endDate);
							var newnewStartDate = new Date(newStartDate.getTime() - (360 * 60000));
							var newnewEndDate = new Date(newEndDate.getTime() - (360 * 60000));
							return (
								<TableRow key={n.id}>
									<TableCell component="th" scope="row">
										{n.name}
									</TableCell>
									<TableCell>{newnewStartDate.toLocaleString()}</TableCell>
									<TableCell>{newnewEndDate.toLocaleString()}</TableCell>
									<TableCell>
										{n.rating === null &&
											<RateSitter name={n.name} principal={n.principal} id={n.id}/>
										}
										{
										 n.ratedByOwner &&
											 n.rating
										}
									</TableCell>
									<TableCell>
										<SitterView id={n.id} principal={n.principal} name={n.name}
													city={n.city}/>
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