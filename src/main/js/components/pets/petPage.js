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
import PetCard from 'js/components/pets/petCard';
import AddPet from 'js/components/pets/addPetForm';
import CardActionArea from '@material-ui/core/CardActionArea/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia/CardMedia';
import Image from 'js/images/dog1.jpeg';
import CardContent from '@material-ui/core/CardContent/CardContent';
import CardActions from '@material-ui/core/CardActions/CardActions';
import EditPet from 'js/components/pets/editPetForm';
import Button from '@material-ui/core/Button/Button';
import Card from '@material-ui/core/Card/Card';
import axios from 'axios';
import Cookies from 'universal-cookie';
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
	divider: {
	width: 5,
	height: 50,
	display: 'inline-block',
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
        height: 320,
    },
    card: {
        marginTop: 75,
        maxWidth: 345,
    },
    media: {
        objectFit: 'cover',
    },
});

class PetPage extends React.Component {
    state = {
        open: true,
        pets: [],
        reload: false
    };

    constructor(props){
		super(props);

		this.stateChangeHandler = this.stateChangeHandler.bind(this);
    }

    componentDidMount() {
        const cookies = new Cookies();

		axios.get('/pet/pets/' + cookies.get('username'), cookies.get('username'))
            .then(res => {
                this.setState({
                    pets: res
                });
                console.log(res);
            }).then(response => console.log(response))
			.catch(error => this.setState({error}));
    }




    handleDrawerOpen = () => {
        this.setState({ open: true });
    };

    handleDrawerClose = () => {
        this.setState({ open: false });
    };

    handler = () => {
        if(this.state.reload === false)
		this.setState({reload: true});
        else
            this.setState({reload: false});
	}

    stateChangeHandler = () => {
		const cookies = new Cookies();

		axios.get('/pet/pets/' + cookies.get('username'), cookies.get('username'))
			.then(res => {
				this.setState({
					pets: res
				});
				console.log(res);
			}).then(response => console.log(response))
			.catch(error => this.setState({error}));
		this.handler();
        // console.log(this.state.reload);
        // if(this.state.reload === false) {
        //     console.log('unfofrtdsa');
			// this.setState({ reload: true });
			// console.log(this.state.reload);
        // }
        // else
			// this.setState({ reload: false });
        // console.log('HEYYYYY');
    }

    render() {
        const { classes } = this.props;
        const { pets } = this.state;

        console.log('Reload: ', this.state.reload);

        var petItems;
        if(pets)
		{petItems = pets.map(pet => {
			const {name, age, dogBreed, petType, id} = pet;
			return (
				<div key={(((1+Math.random())*0x10000)|0)}>
				<PetCard handler={this.stateChangeHandler} id={id} name={name} type={petType} breed={dogBreed} age={age}/>
				</div>
			);
		});}

        return (

            <React.Fragment>
                <CssBaseline />
                <div className={classes.root}>

                    <MenuBar title='Pets'/>
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
                        {/*<Card className={classes.card}>*/}
                            {/*<CardActions>*/}
                                {/*<EditPet/>*/}
                            {/*</CardActions>*/}
                        {/*</Card>*/}
                        {petItems}
						<div className={classes.divider}/>

							<AddPet handler={this.stateChangeHandler}/>

                        {/*<PetCard/>*/}

                    </main>
                </div>
            </React.Fragment>
        );
    }
}

PetPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PetPage);