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

const data = [];

let name = '';


class RequestTable extends React.Component {

    state = {
        name: '',
        bookings: [],
        load: true,
		loaded: false
    };

	componentDidMount() {

		const cookies = new Cookies();

		axios.get('/booking/sitter/' + cookies.get('username'), cookies.get('username'))
			.then(res => {
			    console.log(res);
				this.setState({
					bookings: res});
				if(this.state.bookings)
				{this.state.bookings.map(booking => {
					const startDate = new Date(booking.startDate);
					const endDate = new Date(booking.finishDate);
					const status = booking.status;
					const ownerPrincipal = booking.ownerPrincipal;

					console.log('startDate: ', startDate);
					console.log('endDate: ', endDate);

					axios.get('/api/user/' + ownerPrincipal, ownerPrincipal)
						.then(res => {
							console.log('name: ', res.firstName);
							console.log('startDate', startDate);
							console.log('endDate', endDate);
							console.log('status', status);
							console.log('data1:',data);
							name = res.firstName;
							console.log('name2: ', name);

							data.push(this.createData(name, startDate, endDate, status));
							this.setState({loaded: true});
						}).then(response => console.log(response))
						.catch(error => this.setState({error}));


				});}

			}).then(response => console.log(response))
			.catch(error => this.setState({error}));
		}


	createData = (name, startDate, endDate, approved) => {
		id += 1;
		return { id, name, startDate, endDate, approved };
	}

render() {
	const { classes } = this.props;

    const { bookings } = this.state;
	const loaded = this.state.loaded;

    console.log('fdaskjlafsdjkladsdfs',data);


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
                {loaded &&
                <TableBody>
                    {data.map(n => {
                        console.log('NAME:', n.name);
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