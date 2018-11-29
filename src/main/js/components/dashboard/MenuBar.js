import Toolbar from '@material-ui/core/Toolbar/Toolbar';
import IconButton from '@material-ui/core/IconButton/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography/Typography';
import Button from '@material-ui/core/Button/Button';
import Badge from '@material-ui/core/Badge/Badge';
import AppBar from '@material-ui/core/AppBar/AppBar';
import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Notification from 'js/components/dashboard/notifications';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

const styles = theme => ({
    root: {
        display: 'flex',
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing.unit * 7,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing.unit * 9,
        },
    },
    submit: {
        marginTop: theme.spacing.unit * 3,
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
        height: '100vh',
        overflow: 'auto',
    },
    chartContainer: {
        marginLeft: -22,
    },
    tableContainer: {
        height: 320,
    },
});

class MenuBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            open: true,
            redirect: false
        };
    }

    handleDrawerOpen = () => {
        this.setState({ open: true });
    };

    handleDrawerClose = () => {
        this.setState({ open: false });
    };

    handleHome = () => {
        this.setState({ redirect: true });
    };

    handler = () => {
        if(this.state.reload){
            this.setState({ reload: false });
        }
        else{
            this.setState({ reload: true });
        }
    }

    render() {
        const { classes } = this.props;
        return (
        <div>
        <AppBar
            position="absolute"
            className={classNames(classes.appBar, this.state.open && classes.appBarShift)}
        >
            <Toolbar disableGutters={!this.state.open} className={classes.toolbar}>
                <IconButton
                    color="inherit"
                    aria-label="Open drawer"
                    onClick={this.handleDrawerOpen}
                    className={classNames(
                        classes.menuButton,
                        this.state.open && classes.menuButtonHidden,
                    )}
                >
                    <MenuIcon/>
                </IconButton>
                <Typography variant="display2" color="inherit" noWrap className={classes.title}>
                    {this.state.title}
                </Typography>
                <Link to="/">
                <Button
                    type="submit"
                    variant="raised"
                    color="secondary"
                    className={classes.submit}
                    onClick={this.handleHome}
                >
                    Home Page
                </Button>
                </Link>
                <Notification handler={this.handler}/>
            </Toolbar>
        </AppBar>
        </div>
        );
    }
}

MenuBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuBar);