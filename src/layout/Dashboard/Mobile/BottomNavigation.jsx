import * as React from 'react';

import { Outlet, useNavigate } from 'react-router-dom';

import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArchiveIcon from '@mui/icons-material/Archive';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';

// mock
import { nav } from '../../../mocks/nav'






export default function FixedBottomNavigation() {
    const navigate = useNavigate();

    const [value, setValue] = React.useState(0);
    const ref = React.useRef(null);



    return (
        <Box sx={{ pb: 7 }} ref={ref}>
            <CssBaseline />
            <List>

                <Outlet />
            </List>
            <Paper sx={{
                position: 'fixed', bottom: 0, left: 0, right: 0,
            }} elevation={3}>
                <BottomNavigation
                    sx={{ backgroundColor: 'white', }}
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                >
                   
                    {nav.map((item) => (

                        <BottomNavigationAction label={item.title} icon={item.icon} onClick={() => { navigate(item.path)}} />
                    ))}

                </BottomNavigation>
            </Paper>
        </Box>
    );
}

