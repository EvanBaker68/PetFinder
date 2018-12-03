import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import MainListItems from 'js/components/dashboard/listItems';
import PetCard from 'js/components/pets/petCard';
import AddPet from 'js/components/pets/addPetForm';
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

		axios.get('/api/pet/pets/' + cookies.get('username'), cookies.get('username'))
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

		axios.get('/api/pet/pets/' + cookies.get('username'), cookies.get('username'))
			.then(res => {
				this.setState({
					pets: res
				});
				console.log(res);
			}).then(response => console.log(response))
			.catch(error => this.setState({error}));
		this.handler();
    }

    render() {
        const { classes } = this.props;
        const { pets } = this.state;

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
                        {petItems}
						<div className={classes.divider}/>
                        <AddPet handler={this.stateChangeHandler}/>
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