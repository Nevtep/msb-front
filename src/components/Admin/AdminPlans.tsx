import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { GET_ROLES } from '../../queries/getRoles';
import UsersTable from './UsersTable';
import { Button, Dialog } from '@material-ui/core';
import ServicesTable from './ServicesTable';
import { GET_PLANS } from '../../queries/getPlans';
import PlansTable from './PlanTable';

export const AdminPlans = (props) => {
    const { data } = useQuery(GET_PLANS);
    const { data: rolesData } = useQuery(GET_ROLES);

    return (<>
        <PlansTable 
            {...data}
            roles={rolesData?.roles || []}
        />
    </>)
}