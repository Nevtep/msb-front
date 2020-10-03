import React from 'react';
import { Link } from 'gatsby';
import Avatar from '@material-ui/core/Avatar';
import Menu from '@material-ui/core/Menu';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import AccountMenu from './AccountMenu';
import { isVIP, isInvestor, isAdmin, isTrainee } from '../services/auth';
import { MenuItem, colors } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import NavBackground from '../assets/images/fondo-pie.jpg';

const useStyles = makeStyles((theme) => ({
    accountNav: {
        backgroundImage: `url(${NavBackground})`,
        backgroundPosition: 'center', 
        backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat',

        '& .logo.brand': {
            width: '6em',
            height: '6em',
        },

        '& a': {
            fontWeight: 'bold',
            color: '#FFF',
            textDecoration: 'none',
            textTransform: 'uppercase',
            textShadow: '0px 1px 2px black',
            borderBottom: 'none',
            marginLeft: '1em',
            marginRight: '1em',

            '&:hover': {
                color: '#D8BE74',
            }
        },

        '& .push-right': {
            marginLeft: 'auto',
            marginRight: '2em'
        },

        '& .account-avatar': {
            marginRight: '2em'
        }
    }
}))

export const AccountNav = ({initials, user }) => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <AppBar className={classes.accountNav} position="static">
            <Toolbar>
                <span className="logo brand"></span>
                {/* <Link to="/app">Inicio</Link> */}
                {isVIP(user) && <Link to="/app/vip/signals" activeStyle={{ color: '#FAF78C'}}>Panel VIP</Link>}
                {isVIP(user) && <Link to="/app/academy/courses" activeStyle={{ color: '#FAF78C'}}>Academia</Link>}
                {isVIP(user) && <Link to="/app/invest/zone" activeStyle={{ color: '#FAF78C'}}>Inversores</Link>}
                <Link className="push-right" to="/app/billing" activeStyle={{ color: '#FAF78C'}}>Subscripciones</Link>
                <Avatar className="account-avatar" onClick={handleClick}>{initials}</Avatar>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    {isAdmin(user) && (
                        <MenuItem>
                            <Link to="/app/admin/users">Administrar Usuarios</Link>
                        </MenuItem>
)                    }
{isAdmin(user) &&

<MenuItem>
<Link to="/app/admin/signals">Administrar Señales</Link>
</MenuItem>
}
                    <AccountMenu closeMenu={handleClose} />
                </Menu>
            </Toolbar>
        </AppBar>
    )
}