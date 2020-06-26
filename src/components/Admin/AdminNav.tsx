import React from 'react';
import { Link } from 'gatsby';
import Avatar from '@material-ui/core/Avatar';
import Menu from '@material-ui/core/Menu';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import AccountMenu from '../AccountMenu';

export const AdminNav = ({initials}) => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <AppBar className="account-nav" position="static">
            <Toolbar>
                <span className="logo brand"></span>
                <Link to="/admin/users">Usuarios</Link>
                <Link to="/admin/signals">Señales</Link>
                <Link to="/app/academy">Academia</Link>
                <Link to="/app/signals">Chat VIP</Link>
                <Link to="/app/invest">Inversores</Link>
                <Avatar className="account-avatar" onClick={handleClick}>{initials}</Avatar>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <AccountMenu closeMenu={handleClose} />
                </Menu>
            </Toolbar>
        </AppBar>
    )
}