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
function createData(name, date, timeStart, timeEnd) {
    id += 1;
    return { id, name, date, timeStart, timeEnd };
}

const data = [
    createData('Bob', '09/20/2018', '1:00pm', '5:00pm'),
];

function RequestTable(props) {
    const { classes } = props;

    return (
        <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell>Owner</TableCell>
                        <TableCell>Date</TableCell>
                        <TableCell>Start</TableCell>
                        <TableCell>End</TableCell>
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
                                <TableCell>{n.date}</TableCell>
                                <TableCell>{n.timeStart}</TableCell>
                                <TableCell>{n.timeEnd}</TableCell>
                                <TableCell>
                                    <Button
                                        variant="contained"
                                        color='secondary'>
                                        Approve
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

RequestTable.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RequestTable);