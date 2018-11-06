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
function createData(principal, name, timeStart, timeEnd, approved) {
    id += 1;
    return { id, principal, name, timeStart, timeEnd, approved };
}

const data = [
    createData('bob@gmail.com', 'Bob', '11/20/2018 1:00', '11/20/2018 3:00', 'pending'),
    createData('1', 'Bob', '11/20/2018 1:00', '11/20/2018 3:00', 'accepted'),
];

//covert to component
class RequestTable extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            bookings: null
        };
        //axios.get('/booking/getUpcoming', cookies.username)
        //this.setSate(bookings: createData(...))
    }

    cancelBooking(principal) {
        //axios.post('/booking/cancel/', prinipal)
    }

    render() {
        const {classes} = this.props;

        return (
            <Paper className={classes.root}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Sitter</TableCell>
                            <TableCell>Date</TableCell>
                            <TableCell>Start</TableCell>
                            <TableCell>End</TableCell>
                            <TableCell>Staus</TableCell>
                            <TableCell>Cancel</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {/*change data to this.state.bookings*/}
                        {data.map(n => {
                            return (
                                <TableRow key={n.id}>
                                    <TableCell component="th" scope="row">
                                        {n.name}
                                    </TableCell>
                                    <TableCell>{n.date}</TableCell>
                                    <TableCell>{n.timeStart}</TableCell>
                                    <TableCell>{n.timeEnd}</TableCell>
                                    <TableCell>{n.approved}</TableCell>
                                    <TableCell>
                                        <Button
                                            variant="contained"
                                            color='secondary'
                                            onClick={this.cancelBooking(n.principal)}
                                        >
                                            Cancel
                                        </Button>
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