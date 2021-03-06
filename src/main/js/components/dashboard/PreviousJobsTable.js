import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import RateOwner from 'js/components/ratings/rateOwner';
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
        loaded: false
    };

    componentDidMount() {
        data = [];
        const cookies = new Cookies();

        axios.get('/api/booking/sitter/' + cookies.get('username'), cookies.get('username'))
            .then(res => {
                this.setState({
                    bookings: res
                });
                if (this.state.bookings) {
                    this.state.bookings.map(booking => {

                        const startDate = new Date(booking.startDate);
                        const endDate = new Date(booking.finishDate);
                        const status = booking.status;
                        const id = booking.id;
                        const rating = booking.scoreBySitter;
                        const ownerPrincipal = booking.ownerPrincipal;

                        if (booking.sitterPrincipal === cookies.get('username')
                            && booking.status === 'approved' && (endDate < new Date()))
                            axios.get('/api/user/' + ownerPrincipal, ownerPrincipal)
                                .then(res => {
                                    name = res.firstName + ' ' + res.lastName;

                                    data.push(this.createData(id, name, ownerPrincipal, startDate, endDate, rating));
                                    this.setState({loaded: true});
                                }).then(response => console.log(response))
                                .catch(error => this.setState({error}));


                    });
                }

            }).then(response => console.log(response))
            .catch(error => this.setState({error}));
    }


    createData = (id, name, principal, startDate, endDate, rating) => {
        return {id, name, principal, startDate, endDate, rating};
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

                var newStartDate = new Date(booking.startDate);
                var newEndDate = new Date(booking.endDate);
                var newnewStartDate = new Date(newStartDate.getTime() - (360 * 60000));
                var newnewEndDate = new Date(newEndDate.getTime() - (360 * 60000));

                let message = booking.sitterPrincipal + ' has canceled the booking on ' + new Date(booking.startDate);
                var notification = {
                    message: message,
                    sitterPrincipal: booking.sitterPrincipal,
                    ownerPrincipal: booking.ownerPrincipal
                };

            }).then(response => console.log(response))
            .catch(error => this.setState({error}));
    }

    approveBooking(id) {
        axios.get('/api/booking/' + id, id)
            .then(res => {
                var booking = res;
                booking.status = 'past';
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

        return (
            <Paper className={classes.root}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Owner</TableCell>
                            <TableCell>Start Date</TableCell>
                            <TableCell>End Date</TableCell>
                            <TableCell>Rate Owner</TableCell>
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
                                        {n.rating == null &&
                                        <RateOwner name={n.name} principal={n.principal} id={n.id}/>
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

SimpleTable.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);