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
import MainListItems from 'js/components/dashboard/listItems';
import SimpleTable from 'js/components/dashboard/simpleTable';
import Input from '@material-ui/core/Input';
import SearchIcon from '@material-ui/icons/Search';
import ProfileForm from 'js/components/profile/ProfileForm';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField/TextField';
import Button from '@material-ui/core/Button/Button';
import SitterView from 'js/components/search/siiterProfileView';
import axios from 'axios';
import Cookies from 'universal-cookie';
import {Redirect} from 'react-router-dom';
import Chip from '@material-ui/core/Chip';
import MenuBar from 'js/components/dashboard/MenuBar';


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
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 600,
    },
});

class SearchPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: true,
            city: '',
            searched: false,
            sitter: [],
            recommended: []
        };

        //fill city with current owner information
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    handleDrawerOpen = () => {
        this.setState({ open: true });
    };

    handleDrawerClose = () => {
        this.setState({ open: false });
    };

    handleSearch = () => {
        const city = this.state.city;
        axios.get('/api/user/getSittersInCity/' + city, city)
            .then(res =>{
                console.log(res);
                this.setState({sitter: res});
            }).then(response => console.log(response))
			.catch(error => this.setState({error}));
    };

    componentWillMount() {
        axios.get('/api/user')
            .then(res => {
                const city = res.city;
                axios.get('/api/user/getSittersInCity/' + city, city)
                    .then(res =>{
                        console.log(res);
                        this.setState({sitter: res});
                    }).then(response => console.log(response))
                    .catch(error => this.setState({error}));
                this.setState({searched: true});
            }).then(response => console.log(response))
            .catch(error => this.setState({error}));
    }

    render() {

		const cookies = new Cookies();
		if( cookies.get('owner') !== 'true' ) {
			return <div><Redirect to='/'/></div>;
		}


		const { classes } = this.props;
        // const numbers = [1, 2, 3, 4, 5];
        // const listItems = numbers.map((number) =>
        //     <div key={number.toString()}>
        //         <li>{number}</li>
        //         <SitterView num={number}/>
        //     </div>
        // );

        //this will replace lisitems and num
        const sitters = this.state.sitter;
        var sitterItems;
        if (sitters) {
             sitterItems = sitters.map((sitter) =>
                 (sitter.principal !== cookies.get('username')) &&
                <div key={sitter.principal}>
                    <li>{sitter.firstName} {sitter.lastName}</li>
                    <SitterView principal={sitter.principal} name={sitter.firstName+' '+sitter.lastName}
                        city={sitter.city}/>
                </div>
            );
        }

        const recommended = this.state.recommended;
        var recommendedItems;
        if (recommended) {
            recommendedItems = recommended.map((sitter) =>
                (sitter.principal !== cookies.get('username')) &&
                <div key={sitter.principal}>
                    <li>{sitter.firstName}</li>
                    <SitterView principal={sitter.principal} name={sitter.firstName+' '+sitter.lastName}
                                city={sitter.city}/>
                </div>
            );
        }

        return (
            <React.Fragment>
                <CssBaseline />
                <div className={classes.root}>
					<MenuBar title='Search and Match'/>
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
                        {!this.state.searched &&
                            <ul>
                                {recommendedItems}
                            </ul>
                        }
                        {this.state.searched &&
                        <div>
                            <Typography variant="display1" align="center">Sitters in Your City</Typography>
                            <ul>
                                {sitterItems}
                            </ul>
                        </div>
                        }
                        <Typography
                            variant="display1"
                            gutterBottom
                            align='center'>
                            Enter a new city...
                        </Typography>
                        <TextField
                            id="standard-name"
                            label="Search"
                            className={classes.textField}
                            value={this.state.city}
                            onChange={this.handleChange('city')}
                            margin="normal"
                        />
                        <Button  onClick={this.handleSearch}>Continue</Button>
                    </main>
                </div>
            </React.Fragment>
        );
    }
}

SearchPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchPage);