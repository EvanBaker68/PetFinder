import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
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

var data = [];
var name = '';

class RequestTable extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            bookings: null,
            loaded: false
        };
    }

	componentDidMount() {
		data = [];
		const cookies = new Cookies();

		axios.get('/api/booking/owner/' + cookies.get('username'), cookies.get('username'))
			.then(res => {
				this.setState({
					bookings: res});
				if(this.state.bookings)
				{this.state.bookings.map(booking => {

					const startDate = new Date(booking.startDate);
					const endDate = new Date(booking.finishDate);
					const status = booking.status;
					const id = booking.id;
					const sitterPrincipal = booking.sitterPrincipal;

					if(booking.ownerPrincipal === cookies.get('username')
					&& booking.status === 'approved' && (endDate >= new Date()))
						axios.get('/api/user/' + sitterPrincipal, sitterPrincipal)
							.then(res => {
								name = res.firstName + ' ' + res.lastName;

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
			}).then(response => console.log(response))
			.catch(error => this.setState({error}));
    }

    render() {
        const {classes} = this.props;
		const loaded = this.state.loaded;

		return (
            <Paper className={classes.root}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Sitter</TableCell>
                            <TableCell>Start Date</TableCell>
                            <TableCell>End Date</TableCell>
                            <TableCell>Status</TableCell>
                        </TableRow>
                    </TableHead>
					{loaded &&

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
									<TableCell>{n.status}</TableCell>
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