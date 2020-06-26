import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_USERS } from '../../queries/getUsers';
import UsersTable from './UsersTable';

export const AdminUsers = (props) => {
    const { data } = useQuery(GET_USERS);

    return (
        <UsersTable {...data} />
    )
}