import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ProfileIcon from '@material-ui/icons/Person';
import SearchIcon from '@material-ui/icons/Search';
import HistoryIcon from '@material-ui/icons/History';
import FavoriteIcon from '@material-ui/icons/Favorite';

import { Link } from 'react-router-dom';

export const SitterMenuList = (
    <div>
        <Link to="sitterDash">
            <ListItem button>
                <ListItemIcon>
                    <HistoryIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
            </ListItem>
        </Link>
        <Link to="/sitterProfile">
            <ListItem button>
                <ListItemIcon>
                    <ProfileIcon />
                </ListItemIcon>
                <ListItemText primary="Profile" />
            </ListItem>
        </Link>
    </div>
);