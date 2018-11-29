import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ProfileIcon from '@material-ui/icons/Person';
import HistoryIcon from '@material-ui/icons/History';
import DashIcon from '@material-ui/icons/Dashboard';
import SwapIcon from '@material-ui/icons/SwapHorizontalCircle';
import Cookies from 'universal-cookie';

import { Link } from 'react-router-dom';

const cookies = new Cookies();
export const SitterMenuList = (

    <div>
        <Link to="sitterDash">
            <ListItem button>
                <ListItemIcon>
                    <DashIcon />
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
        <Link to="/sitterTimeTable">
            <ListItem button>
                <ListItemIcon>
                    <HistoryIcon />
                </ListItemIcon>
                <ListItemText primary="Change Schedule" />
            </ListItem>
        </Link>
        {cookies.get('owner') === 'true' &&
        <Link to="/ownerDash">
            <ListItem button>
                <ListItemIcon>
                    <SwapIcon/>
                </ListItemIcon>
                <ListItemText primary="Swap to Owner"/>
            </ListItem>
        </Link>
        }
    </div>
);