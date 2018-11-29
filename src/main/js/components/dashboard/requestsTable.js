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

let data = [];

let name = '';

class RequestTable extends React.Component {

    state = {
        name: '',
        bookings: [],
        load: true,
		loaded: false,
		reload: false
    };

	componentDidMount() {
		data = [];
		const cookies = new Cookies();

		axios.get('/api/booking/sitter/' + cookies.get('username'), cookies.get('username'))
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
					&& booking.status === 'pending')
					axios.get('/api/user/' + ownerPrincipal, ownerPrincipal)
						.then(res => {
							console.log('name: ', res.firstName);
							console.log('startDate', startDate);
							console.log('endDate', endDate);
							console.log('status', status);
							console.log('data1:',data);
							name = res.firstName + ' ' + res.lastName;
							console.log('name2: ', name);

							data.push(this.createData(id, name, startDate, endDate, status));
							this.setState({loaded: true});
						}).then(response => console.log(response))
						.catch(error => this.setState({error}));


				});}

			}).then(response => console.log(response))
			.catch(error => this.setState({error}));
		}


	createData = (id, name, startDate, endDate, status) => {
		return { id, name, startDate, endDate, status };
	}

	cancelBooking(id) {
		axios.get('/api/booking/' + id, id)
			.then(res => {
				var booking = res;

				booking.status = 'canceled';
				axios.post('/api/booking/add-booking', booking)
					.then(res => {
						console.log(res);
					})
					.catch(error => {
						console.log(error.response);
					});

				const cookies = new Cookies();

				var newStartDate = new Date(booking.startDate);
				var newnewStartDate = new Date(newStartDate.getTime() - (360 * 60000));

                let message = booking.sitterPrincipal + ' has canceled the booking starting at ' + newnewStartDate;
                var notification = {
                    message: message,
					sitterPrincipal: booking.sitterPrincipal,
					ownerPrincipal: booking.ownerPrincipal
                };

                axios.post('/notification/add-notification', notification)
                    .then(res => {
                        console.log(res);
                    })
                    .catch(error => {
                        console.log(res);
                    });

            }).then(response => console.log(response))
			.catch(error => this.setState({error}));

		this.setState({ reload: true });

	}

	approveBooking(id) {
		axios.get('/api/booking/' + id, id)
			.then(res => {
				var booking = res;
				booking.status = 'approved';

				axios.post('/api/booking/add-booking', booking)
					.then(res => {
						console.log(res);
					})
					.catch(error => {
						console.log(error.response);
					});


				var newStartDate = new Date(booking.startDate);
				var newnewStartDate = new Date(newStartDate.getTime() - (360 * 60000));

                let message = booking.sitterPrincipal + ' has approved the booking starting at ' + newnewStartDate;

                var notification = {
                    message: message,
					sitterPrincipal: booking.sitterPrincipal,
					ownerPrincipal: booking.ownerPrincipal
                };

                axios.post('/notification/add-notification', notification)
                    .then(res => {
                        console.log(res);
                    })
                    .catch(error => {
                        console.log(res);
                    });
			}).then(response => console.log(response))
			.catch(error => this.setState({error}));

		this.setState({ reload: true });
	}

render() {
	const { classes } = this.props;

    const { bookings } = this.state;
	const loaded = this.state.loaded;


	return (
		<Paper className={classes.root}>
			<Table className={classes.table}>
				<TableHead>
					<TableRow>
						<TableCell>Owner</TableCell>
						<TableCell>Start Date</TableCell>
						<TableCell>End Date</TableCell>
						<TableCell>Status</TableCell>
						<TableCell>Approve</TableCell>
						<TableCell>Cancel</TableCell>
					</TableRow>
				</TableHead>
                {loaded &&
                <TableBody>
                    {data.map(n => {
                        console.log('NAME:', n.name);
                        //PLAY WITH THIS
                        var newStartDate = new Date(n.startDate);
						var newEndDate = new Date(n.endDate);
						var newnewStartDate = new Date(newStartDate.getTime() - (360 * 60000));
						var newnewEndDate = new Date(newEndDate.getTime() - (360 * 60000));
						// console.log('NEWDATE: ', newnewDate);

                        // newDate.setHours(n.startDate.getHours() -6);
                        return (
                            <TableRow key={n.id}>
                                <TableCell component="th" scope="row">
                                    {n.name}
                                </TableCell>
                                <TableCell>{newnewStartDate.toLocaleString()}</TableCell>
                                <TableCell>{newnewEndDate.toLocaleString()}</TableCell>
								<TableCell>{n.status}</TableCell>
                                <TableCell>
                                    <Button
                                        variant="contained"
                                        color='secondary'
										onClick={this.approveBooking.bind(this, n.id)}>
										Approve
                                    </Button>
								</TableCell>
								<TableCell>
									<Button
										variant="contained"
										color='secondary'
										onClick={this.cancelBooking.bind(this, n.id)}>
										Cancel
									</Button>
								</TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
                }
			</Table>
		</Paper>
	);
}

}


RequestTable.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RequestTable);