import React, { useState, RefObject, forwardRef} from 'react';
import { makeStyles } from '@material-ui/core/styles';

import ReceiptIcon from '@material-ui/icons/Receipt';
import { ADD_ROLE } from '../../mutations/addRole';
import { REMOVE_ROLE } from '../../mutations/removeRole';
import { useMutation } from '@apollo/react-hooks';
import { Editable, ColumnData } from '../system/EditableTable';
import { GET_USERS } from '../../queries/getUsers';
import { SELECTED_USER } from '../../queries/selectedUser';


const useStyles = makeStyles({
  table: {
    minWidth: 350,
  },
});

export default function ServicesTable({ user, roles }) {
  const classes = useStyles();
  const [errors, setErrors] = useState([]);
  console.log('roles', roles)
  const rolesLookup = roles.reduce((result, role) => {
    result[role.name] = role.name;
    return result;
}, {})
  const [columns, setColumns] = useState([
    { title: 'Rol', field: 'name', lookup: rolesLookup },
    { title: 'Fecha de Inicio', field: 'startDate', type: 'date', render: rowData => <span>{new Date(rowData.startDate).toLocaleDateString()}</span> },
    { title: 'Fecha de Finalización', field: 'endDate', type: 'date', render: rowData => <span>{new Date(rowData.endDate).toLocaleDateString()}</span> },
  ]);
  const [addRole, { called, loading: setting }] = useMutation(
    ADD_ROLE,
    {
        // update: async (cache, { data: { addRole: user }}) => {
        //   console.log(user);
        //   const {users}: any = await cache.readQuery({
        //     query: GET_USERS
        //   });
        //   const dataUpdate: any = [...users]
        //   const index = users.indexOf(users.find(u => u.email === user.email));
        //   if (index > -1) {
        //     dataUpdate[index] = user;
        //   } else {
        //     dataUpdate.push(user);
        //   }
        //   cache.writeQuery({
        //     query: GET_USERS,
        //     data: {
        //       users: dataUpdate
        //     }
        //   })
        //   cache.writeQuery({
        //     query: SELECTED_USER,
        //     data: {
        //       selectedUser: user
        //     }
        //   })
        // },
        onCompleted: (result) => {
            console.log('addRole finished:', result);
        },
        onError: (error) => {
            const newErrors = error.graphQLErrors.map(error => ({ message: error.message, key: error.path }));
            setErrors(newErrors);
        },
        refetchQueries: [{
          query: GET_USERS,
        }],
    }
  )
  const [removeRole, { called: removed, loading: removing }] = useMutation(
    REMOVE_ROLE,
    {
        onCompleted: (result) => {
            console.log('addRole finished:', result);
        },
        onError: (error) => {
            const newErrors = error.graphQLErrors.map(error => ({ message: error.message, key: error.path }));
            setErrors(newErrors);
        },
        refetchQueries: [{
          query: GET_USERS,
        }],
    }
  )

  const onRowAdd = ({__typename, ...service}) =>
    addRole({ 
      variables: {
        userId: user.id,
        ...service
      }
    });

  const onRowDelete = (service: ColumnData) => {
      return removeRole({
        variables: {
          id: service.id
        }
      });
    }
  return (
    <Editable
      data={user.subscriptions || []}
      title="Subscripciones"
      columns={columns}
      onRowAdd={onRowAdd}
      onRowDelete={onRowDelete}
    />
  );
}
