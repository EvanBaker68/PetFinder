import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import PreviousJobsTable from 'js/components/dashboard/PreviousJobsTable';
import SitterMenuList from 'js/components/dashboard/SitterMenuList';
import RequestsTable from 'js/components/dashboard/requestsTable';
import Button from '@material-ui/core/Button';
import  { Redirect } from 'react-router-dom';
import Cookies from 'universal-cookie';
import MenuBar from 'js/components/dashboard/MenuBar';
import axios from 'axios/index';
import SitterUpcomingTable from './SitterUpcoming';

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
        height: 200,
    },
});

class Dashboard extends React.Component {
    state = {
        open: true,
    };



    handleDrawerOpen = () => {
        this.setState({ open: true });
    };

    handleDrawerClose = () => {
        this.setState({ open: false });
    };

	handleHome = () => {
		this.setState({ redirect: true });
	}

    render() {
        const { classes } = this.props;

		const cookies = new Cookies();
		if( cookies.get('sitter') !== 'true' ) {
			return <div><Redirect to='/'/></div>;
		}


		if(this.state.redirect){
			return <div><Redirect to='/'/></div>;
		}

        return (
            <React.Fragment>
                <CssBaseline />
                <div className={classes.root}>
                    <MenuBar title='Sitter Dashboard'/>
                    <Drawer
                        variant="permanent"
                        classes={{
                            paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
                        }}
                        open={this.state.open}
                    >
                        <div className={classes.toolbarIcon}>
                            <IconButton onClick={this.handleDrawerClose}>
                                <ChevronLeftIcon />
                            </IconButton>
                        </div>
                        <Divider />
                        <SitterMenuList/>
                    </Drawer>
                    <main className={classes.content}>
                        <div className={classes.appBarSpacer} />
                        <Typography variant="display1" gutterBottom>
                            Requests
                        </Typography>
                        <div className={classes.tableContainer}>
                            <RequestsTable/>
                        </div>
                        <Typography variant="display1" gutterBottom>
                            Upcoming Jobs
                        </Typography>
                        <div className={classes.tableContainer}>
                            <SitterUpcomingTable/>
                        </div>
                        <Typography variant="display1" gutterBottom>
                            Previous Jobs
                        </Typography>
                        <div className={classes.tableContainer}>
                            <PreviousJobsTable />
                        </div>
                    </main>
                </div>
            </React.Fragment>
        );
    }
}

Dashboard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Dashboard);