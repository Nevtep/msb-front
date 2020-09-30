import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { GET_USERS } from '../../queries/getUsers';
import UsersTable from './UsersTable';
import { Dialog } from '@material-ui/core';
import ServicesTable from './ServicesTable';
import { GET_ROLES } from '../../queries/getRoles';
import { SELECTED_USER } from '../../queries/selectedUser';
import { SELECT_USER } from '../../mutations/selectUser';

export const AdminUsers = (props) => {
    const { data } = useQuery(GET_USERS);
    const { data: rolesData } = useQuery(GET_ROLES);
    const [open, setOpen] = useState(false);
    const { data: { selectedUser } } = useQuery(SELECTED_USER);
    const [setSelectedUser] = useMutation(SELECT_USER, {
        onCompleted: (result) => {
            setOpen(true);
        }
    });

    const manageSubscriptions = (user) => {
        setSelectedUser({ 
            variables: {
                user
            },
        });
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