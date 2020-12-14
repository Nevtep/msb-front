import React, { useState, RefObject, forwardRef} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

import ReceiptIcon from '@material-ui/icons/Receipt';
import { SET_USER } from '../../mutations/setUser';
import { DELETE_USER } from '../../mutations/deleteUser';
import { GET_USERS } from '../../queries/getUsers';
import { useMutation } from '@apollo/react-hooks';
import { Editable, ColumnData } from '../system/EditableTable';
import { Input } from '@material-ui/core';


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function UsersTable({ users, onManageSubscriptions }) {
  const classes = useStyles();
  const [errors, setErrors] = useState([]);
  const [columns, setColumns] = useState([
    { title: 'Nombre Completo', field: 'fullName' },
    { title: 'Email', field: 'email', initialEditValue: 'initial edit value', hidden: false, searchable: true },
    {
      title: 'Servicios',
      field: 'subscriptions',
      editable: 'never',
      render: (rowData) => {
        if (rowData) {
          const { subscriptions } = rowData;
          return <>
            {subscriptions?.map(s => <span key={s.id}>{s.name}</span>)}
          </>
        } else {
          <>Empty</>
        }
      }
    },
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
    }
  )
  const [deleteUser, { loading: deleting }] = useMutation(DELETE_USER,{
    refetchQueries: [{
      query: GET_USERS,
    }],
  });

  const onRowAdd = ({__typename, ...user}) =>
    setUser({ 
      variables: {
        user: user
      }
    });

  const onRowUpdate = ({__typename, ...user}: ColumnData, oldData: ColumnData): Promise<any> => 
    setUser({
      variables: {
        user: user
      }
    });
  
  const onRowDelete = (oldData: ColumnData) => {
    console.log('got: ', oldData)
      return deleteUser({
        variables: {
          id: oldData.id
        }
      })
    }
  return (
    <Editable
      data={users}
      title="Usuarios"
      columns={columns}
      onRowAdd={onRowAdd}
      onRowDelete={onRowDelete}
      onRowUpdate={onRowUpdate}
      actions={[
        {
          icon: forwardRef((props: any, ref: RefObject<SVGSVGElement>) => <ReceiptIcon {...props} ref={ref} />),
          tooltip: 'Manage Subscriptions',
          onClick: (event, rowData) => onManageSubscriptions(rowData),
        }
      ]}
    />
  );
}
