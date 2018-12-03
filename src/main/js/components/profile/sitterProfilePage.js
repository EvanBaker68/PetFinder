import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {withStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import SitterMenuList from 'js/components/dashboard/SitterMenuList';
import ProfileForm from 'js/components/profile/ProfileForm';
import Image from 'js/images/homeDog.jpg';
import SitterProfileForm from 'js/components/profile/sitterProfileForm';
import Cookies from 'universal-cookie';
import {Redirect} from 'react-router-dom';
import MenuBar from 'js/components/dashboard/MenuBar';
import axios from 'axios/index';

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
    paperContainer: {
        backgroundImage: `url(${Image})`,
        alignItems: 'center',
        height: 200,
        width: 100
    }
});

class Profile extends React.Component {
    state = {
        open: true,
        firstName: '',
        lastName: ''
    };

    handleDrawerOpen = () => {
        this.setState({open: true});
    };

    handleDrawerClose = () => {
        this.setState({open: false});
    };

    componentDidMount = () => {
        axios.get('/api/user')
            .then(res => {
                this.setState({
                    firstName: res.firstName,
                    lastName: res.lastName,
                });
            }).then(response => console.log(response))
            .catch(error => this.setState({error}));
    }

    render() {
        const {classes} = this.props;
        const {firstName, lastName} = this.state;
        const name = firstName + ' ' + lastName;
        const cookies = new Cookies();
        if (cookies.get('sitter') !== 'true') {
            return <div><Redirect to='/'/></div>;
        }

        return (
            <React.Fragment>
                <CssBaseline/>
                <div className={classes.root}>
                    <MenuBar title='Profile'/>
                    <Drawer
                        variant="permanent"
                        classes={{
                            paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
                        }}
                        open={this.state.open}
                    >
                        <div className={classes.toolbarIcon}>
                            <IconButton onClick={this.handleDrawerClose}>
                                <ChevronLeftIcon/>
                            </IconButton>
                        </div>
                        <Divider/>
                        <SitterMenuList/>
                    </Drawer>
                    <main className={classes.content}>
                        <div className={classes.appBarSpacer}/>
                        <Typography
                            variant="display1"
                            gutterBottom
                            align='center'>
                            {name}
                        </Typography>
                        <ProfileForm/>
                        <SitterProfileForm/>
                    </main>
                </div>
            </React.Fragment>
        );
    }
}

Profile.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Profile);