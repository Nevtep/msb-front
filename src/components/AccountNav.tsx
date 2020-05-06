import React from 'react';
import { Link } from 'gatsby';
import Avatar from '@material-ui/core/Avatar';
import Menu from '@material-ui/core/Menu';
import AccountMenu from './AccountMenu';

export const AccountNav = ({initials}) => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <nav className="account-nav">
            <span className="logo brand"></span>
            <Link to="/app">Inicio</Link>{" "}
            <Link to="/app/billing">Subscripciones</Link>{" "}
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
        </nav>
    )
}