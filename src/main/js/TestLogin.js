import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from'@material-ui/core/Button';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    button: {
        margin: theme.spacing.unit,
    },
});

function NavBar(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <AppBar position="static" style={{ background: 'transparent', boxShadow: 'none'}}>
                <Toolbar>
                    <Typography variant="display1" color="inherit" className={classes.grow}>
                        Pet.ty
                    </Typography>
                    <Link to="/register">
                        <Button
                            variant="contained"
                            color="secondary"
                            className={classes.button}>
                            Sign Up
                        </Button>
                    </Link>
                    <Link to="/login">
                        <Button
                            variant="contained"
                            color="secondary"
                            className={classes.button}>
                            Login
                        </Button>
                    </Link>
                </Toolbar>
            </AppBar>
        </div>
    );
}

NavBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);
