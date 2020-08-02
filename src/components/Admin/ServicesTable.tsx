import React, { useState, RefObject, forwardRef} from 'react';
import { makeStyles } from '@material-ui/core/styles';

import ReceiptIcon from '@material-ui/icons/Receipt';
import { SET_USER } from '../../mutations/setUser';
import { useMutation } from '@apollo/react-hooks';
import { Editable, ColumnData } from '../system/EditableTable';
import { GET_USERS } from '../../queries/getUsers';


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
    result[role.id] = role.name;
    return result;
}, {})
  const [columns, setColumns] = useState([
    { title: 'Rol', field: 'role', lookup: rolesLookup },
    { title: 'Fecha de Inicio', field: 'startDate', type: 'date' },
    { title: 'Fecha de Finalización', field: 'endDate', type: 'date' },
  ]);
  const [setUser, { called, loading: setting }] = useMutation(
    SET_USER,
    {
        update: async (cache, { data: { setUser: user }}) => {
          console.log(user);
          const {users}: any = await cache.readQuery({
            query: GET_USERS
          });
          const dataUpdate: any = [...users]
          const index = users.indexOf(users.find(u => u.email === user.email));
          if (index > -1) {
            dataUpdate[index] = user;
          } else {
            dataUpdate.push(user);
          }
          cache.writeQuery({
            query: GET_USERS,
            data: {
              users: dataUpdate
            }
          })
        },
        onCompleted: (result) => {
            console.log('setUser finished:', result);
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
    setUser({ 
      variables: {
        user: {
            ...user,
            services: [
                ...user.services,
                service
            ]
        }
      }
    });

  const onRowUpdate = ({__typename, ...service}: ColumnData, oldData: ColumnData): Promise<any> => {
      const updateIndex = user.services.findIndex( s => s.id === service.id);
      const services = [...user.services];
      services.splice(updateIndex, 1, service);
      return setUser({
        variables: {
          user: {
              ...user,
              services
          }
        }
      });
  }
  const onRowDelete = (service: ColumnData) => {
    const updateIndex = user.services.findIndex( s => s.id === service.id);
      const services = [...user.services];
      services.splice(updateIndex, 1);
      return setUser({
        variables: {
          user: {
              ...user,
              services
          }
        }
      });
    }
  return (
    <Editable
      data={user.services || []}
      title="Subscripciones"
      columns={columns}
      onRowAdd={onRowAdd}
      onRowDelete={onRowDelete}
      onRowUpdate={onRowUpdate}
    />
  );
}
