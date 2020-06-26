import React, { useState, RefObject} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { forwardRef } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import MaterialTable from 'material-table';
import { SET_USER } from '../../mutations/setUser';
import { DELETE_USER } from '../../mutations/deleteUser';
import { GET_USERS } from '../../queries/getUsers';
import { useMutation } from '@apollo/react-hooks';

const tableIcons = {
    Add: forwardRef((props: any, ref: RefObject<SVGSVGElement>) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props: any, ref: RefObject<SVGSVGElement>) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props: any, ref: RefObject<SVGSVGElement>) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props: any, ref: RefObject<SVGSVGElement>) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props: any, ref: RefObject<SVGSVGElement>) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props: any, ref: RefObject<SVGSVGElement>) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props: any, ref: RefObject<SVGSVGElement>) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props: any, ref: RefObject<SVGSVGElement>) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props: any, ref: RefObject<SVGSVGElement>) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props: any, ref: RefObject<SVGSVGElement>) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props: any, ref: RefObject<SVGSVGElement>) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props: any, ref: RefObject<SVGSVGElement>) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props: any, ref: RefObject<SVGSVGElement>) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props: any, ref: RefObject<SVGSVGElement>) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props: any, ref: RefObject<SVGSVGElement>) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props: any, ref: RefObject<SVGSVGElement>) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props: any, ref: RefObject<SVGSVGElement>) => <ViewColumn {...props} ref={ref} />)
  };

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function UsersTable({ users }) {
  const classes = useStyles();
  const [errors, setErrors] = useState([]);
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
      onRowAdd={onRowAdd}
      onRowDelete={onRowDelete}
      onRowUpdate={onRowUpdate}
    />
  );
}

interface ColumnData {
  [x: string]: {
    [y:string]: any
  }
}

export function Editable({ data, title, onRowAdd, onRowUpdate, onRowDelete }) {
  const [columns, setColumns] = useState([
    { title: 'Nombre Completo', field: 'fullName' },
    { title: 'Email', field: 'email', initialEditValue: 'initial edit value' },
    {
      title: 'Servicios',
      field: 'services',
      editable: 'never',
      render: (rowData) => {
        if (rowData) {
          const { services } = rowData;
          return <>
            {services?.map(s => <span>{s.role}</span>)}
          </>
        } else {
          <></>
        }
      }
    },
  ]);

  return (
    <MaterialTable
      title={title}
      icons={tableIcons}
      columns={columns}
      data={data}
      editable={{
        onRowAdd,
        onRowUpdate,
        onRowDelete,
      }}
    />
  )
}
