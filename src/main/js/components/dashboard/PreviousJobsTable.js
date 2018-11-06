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
function createData(name, date, pets) {
    id += 1;
    return { id, name, date, pets };
}

const data = [
    createData('Bob', '09/12/2018', 'Fluffy'),
];

function SimpleTable(props) {
    const { classes } = props;

    return (
        <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell>Owner</TableCell>
                        <TableCell>Date</TableCell>
                        <TableCell>Pets</TableCell>
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
                                <TableCell>{n.date}</TableCell>
                                <TableCell>{n.pets}</TableCell>
                                <TableCell>
                                    <RateSitter name={n.name}/>
                                </TableCell>
                                <TableCell>
                                    <Button
                                        variant="contained"
                                        color='secondary'>
                                        Comment
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

SimpleTable.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);