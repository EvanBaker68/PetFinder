import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ProfileIcon from '@material-ui/icons/Person';
import SearchIcon from '@material-ui/icons/Search';
import HistoryIcon from '@material-ui/icons/History';
import FavoriteIcon from '@material-ui/icons/Favorite';
import SwapIcon from '@material-ui/icons/SwapHorizontalCircle';
import PropTypes from 'prop-types';


import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';
import {withStyles} from '@material-ui/core/styles/index';

const styles = theme => ({
    root: {
        display: 'flex',
    },
});

const cookies = new Cookies();
class MainListItems extends React.Component {

    render() {

        return (
            <List>
            <div>
                <Link to="/search">
                    <ListItem button>
                        <ListItemIcon>
                            <SearchIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Search"/>
                    </ListItem>
                </Link>
                <Link to="/Ownerpets">
                    <ListItem button>
                        <ListItemIcon>
                            <FavoriteIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Pets"/>
                    </ListItem>
                </Link>
                <Link to="ownerDash">
                    <ListItem button>
                        <ListItemIcon>
                            <HistoryIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Dashboard"/>
                    </ListItem>
                </Link>
                <Link to="/ownerProfile">
                    <ListItem button>
                        <ListItemIcon>
                            <ProfileIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Profile"/>
                    </ListItem>
                </Link>
                {cookies.get('sitter') === 'true' &&
                <Link to="/sitterDash">
                    <ListItem button>
                        <ListItemIcon>
                            <SwapIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Swap to Sitter"/>
                    </ListItem>
                </Link>
                }
            </div>
            </List>
        );
    }
}


MainListItems.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MainListItems);