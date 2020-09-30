import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { GET_USERS } from '../../queries/getUsers';
import UsersTable from './UsersTable';
import { Dialog } from '@material-ui/core';
import ServicesTable from './ServicesTable';
import { GET_SIGNALS } from '../../queries/getSignals';
import { SELECTED_USER } from '../../queries/selectedUser';
import { UPLOAD_SIGNALS } from '../../mutations/uploadSignals';
import SignalsTable from './SignalsTable';

export const AdminSignals = (props) => {
    const { data } = useQuery(GET_SIGNALS);
    const [uploadSignals] = useMutation(UPLOAD_SIGNALS, {
        refetchQueries: [{
            query: GET_SIGNALS,
        }]
    });
    const [open, setOpen] = useState(false);

    return (<>
        <SignalsTable {...data} />
        <Dialog
            open={open}
            onClose={() => setOpen(false)}
        >
            <input
                type="file"
                required
                onChange={({ target: { validity, files: [file] } }) => {
                    validity.valid && uploadSignals({ variables: { file } });
                }
                }
            />
        </Dialog>
    </>)
}