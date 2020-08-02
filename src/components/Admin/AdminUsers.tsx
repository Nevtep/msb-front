import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_USERS } from '../../queries/getUsers';
import UsersTable from './UsersTable';
import { Dialog } from '@material-ui/core';
import ServicesTable from './ServicesTable';
import { GET_ROLES } from '../../queries/getRoles';

export const AdminUsers = (props) => {
    const { data } = useQuery(GET_USERS);
    const { data: rolesData } = useQuery(GET_ROLES);
    const [open, setOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    const manageSubscriptions = (user) => {
        setSelectedUser(user);
        setOpen(true);
    }
    return (<>
        <UsersTable {...data} onManageSubscriptions={manageSubscriptions} />
        <Dialog
            open={open}
            onClose={() => setOpen(false)}
        >
            <ServicesTable user={selectedUser} roles={rolesData?.roles} />
        </Dialog>
    </>)
}