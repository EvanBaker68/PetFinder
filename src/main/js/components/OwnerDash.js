import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import MainListItems from 'js/components/dashboard/listItems';
import SimpleTable from 'js/components/dashboard/simpleTable';
import UpcomingTable from 'js/components/dashboard/upcomingTable';
import  { Redirect } from 'react-router-dom';
import Cookies from 'universal-cookie';
import MenuBar from 'js/components/dashboard/MenuBar';
import OwnerPendingTable from 'js/components/dashboard/OwnerPendingTable';


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


/*
    Defines the user dashboard
    Displays all relevant bookings
 */
class Dashboard extends React.Component {
    state = {
        open: true,
        redirect: false
    };

    handleDrawerClose = () => {
        this.setState({ open: false });
    };

    render() {
        const { classes } = this.props;

		const cookies = new Cookies();
		if( cookies.get('owner') !== 'true' ) {
			return <div><Redirect to='/'/></div>;
		}

		if( cookies.get('sitter') === 'true' && cookies.get('owner') === 'true'){
		    console.log('fasdfadsjkl;');
        }

        return (
            <React.Fragment>
                <CssBaseline />
                <div className={classes.root}>
                    <MenuBar title='Owner Dash'/>
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
                        <MainListItems/>
                    </Drawer>
                    <main className={classes.content}>
                        <div className={classes.appBarSpacer} />
                        <Typography variant="display1" gutterBottom>
                            Pending Bookings
                        </Typography>
                        <div className={classes.tableContainer}>
                            <OwnerPendingTable/>
                        </div>
                        <Typography variant="display1" gutterBottom>
                            Upcoming Bookings
                        </Typography>
                        <div className={classes.tableContainer}>
                            <UpcomingTable/>
                        </div>
                        <Typography variant="display1" gutterBottom>
                            Previous Sitters
                        </Typography>
                        <div className={classes.tableContainer}>
                            <SimpleTable />
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