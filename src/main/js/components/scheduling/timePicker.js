import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing.unit * 2,
    },
});

class SimpleSelect extends React.Component {
    state = {
        beginTime: '',
        endTime: '',
    };

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        const { classes } = this.props;

        return (
            <form className={classes.root} autoComplete="off">
                <FormControl className={classes.formControl}>
                    <InputLabel>Start time</InputLabel>
                    <Select
                        value={this.state.beginTime}
                        onChange={this.handleChange}
                        inputProps={{
                            name: 'beginTime',
                        }}
                    >
                        <MenuItem value={0}>12:00am</MenuItem>
                        <MenuItem value={1}>1:00am</MenuItem>
                        <MenuItem value={2}>2:00am</MenuItem>
                        <MenuItem value={3}>3:00am</MenuItem>
                        <MenuItem value={4}>4:00am</MenuItem>
                        <MenuItem value={5}>5:00am</MenuItem>
                        <MenuItem value={6}>6:00am</MenuItem>
                        <MenuItem value={7}>7:00am</MenuItem>
                        <MenuItem value={8}>8:00am</MenuItem>
                        <MenuItem value={9}>9:00am</MenuItem>
                        <MenuItem value={10}>10:00am</MenuItem>
                        <MenuItem value={11}>11:00am</MenuItem>
                        <MenuItem value={12}>12:00pm</MenuItem>
                        <MenuItem value={13}>1:00pm</MenuItem>
                        <MenuItem value={14}>2:00pm</MenuItem>
                        <MenuItem value={15}>3:00pm</MenuItem>
                        <MenuItem value={16}>4:00pm</MenuItem>
                        <MenuItem value={17}>5:00pm</MenuItem>
                        <MenuItem value={18}>6:00pm</MenuItem>
                        <MenuItem value={19}>7:00pm</MenuItem>
                        <MenuItem value={20}>8:00pm</MenuItem>
                        <MenuItem value={21}>9:00pm</MenuItem>
                        <MenuItem value={22}>10:00pm</MenuItem>
                        <MenuItem value={23}>11:00pm</MenuItem>
                    </Select>
                </FormControl>
                <FormControl className={classes.formControl}>
                    <InputLabel>End Time</InputLabel>
                    <Select
                        value={this.state.beginTime}
                        onChange={this.handleChange}
                        inputProps={{
                            name: 'endTime',
                        }}
                    >
                        <MenuItem value={0}>12:00am</MenuItem>
                        <MenuItem value={1}>1:00am</MenuItem>
                        <MenuItem value={2}>2:00am</MenuItem>
                        <MenuItem value={3}>3:00am</MenuItem>
                        <MenuItem value={4}>4:00am</MenuItem>
                        <MenuItem value={5}>5:00am</MenuItem>
                        <MenuItem value={6}>6:00am</MenuItem>
                        <MenuItem value={7}>7:00am</MenuItem>
                        <MenuItem value={8}>8:00am</MenuItem>
                        <MenuItem value={9}>9:00am</MenuItem>
                        <MenuItem value={10}>10:00am</MenuItem>
                        <MenuItem value={11}>11:00am</MenuItem>
                        <MenuItem value={12}>12:00pm</MenuItem>
                        <MenuItem value={13}>1:00pm</MenuItem>
                        <MenuItem value={14}>2:00pm</MenuItem>
                        <MenuItem value={15}>3:00pm</MenuItem>
                        <MenuItem value={16}>4:00pm</MenuItem>
                        <MenuItem value={17}>5:00pm</MenuItem>
                        <MenuItem value={18}>6:00pm</MenuItem>
                        <MenuItem value={19}>7:00pm</MenuItem>
                        <MenuItem value={20}>8:00pm</MenuItem>
                        <MenuItem value={21}>9:00pm</MenuItem>
                        <MenuItem value={22}>10:00pm</MenuItem>
                        <MenuItem value={23}>11:00pm</MenuItem>
                    </Select>
                </FormControl>
            </form>
        );
    }
}

SimpleSelect.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleSelect);