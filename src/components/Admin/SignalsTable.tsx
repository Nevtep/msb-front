import React, { useState, RefObject, forwardRef} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

import ReceiptIcon from '@material-ui/icons/Receipt';
import { ADD_SIGNAL } from '../../mutations/addSignal';
import { REMOVE_SIGNAL } from '../../mutations/removeSignal';
import { GET_SIGNALS } from '../../queries/getSignals';
import { useMutation } from '@apollo/react-hooks';
import { Editable, ColumnData } from '../system/EditableTable';
import { Box, Input, Typography } from '@material-ui/core';


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function SignalsTable({ signals, UploadButton }) {
  const classes = useStyles();
  const [errors, setErrors] = useState([]);
  const [columns, setColumns] = useState([
    { title: 'Operación', field: 'op', lookup: { CALL: 'Compra', PUT: 'Venta' } },
    { title: 'Par', field: 'pair' },
    {
      title: 'Hora',
      field: 'time',
      type: 'datetime',
    },
  ]);
  const [setSignal, { called, loading: setting }] = useMutation(
    ADD_SIGNAL,
    {
        // update: async (cache, { data: { setSignal: signal }}) => {
        //   console.log(signal);
        //   const {signals}: any = await cache.readQuery({
        //     query: GET_SIGNALS
        //   });
        //   const dataUpdate: any = [...signals]
        //   const index = signals.indexOf(signals.find(u => u.email === signal.email));
        //   if (index > -1) {
        //     dataUpdate[index] = signal;
        //   } else {
        //     dataUpdate.push(signal);
        //   }
        //   cache.writeQuery({
        //     query: GET_SIGNALS,
        //     data: {
        //       signals: dataUpdate
        //     }
        //   })
        // },
        onCompleted: (result) => {
            console.log('setSignal finished:', result);
        },
        onError: (error) => {
            const newErrors = error.graphQLErrors.map(error => ({ message: error.message, key: error.path }));
            setErrors(newErrors);
        },
        refetchQueries: [{
          query: GET_SIGNALS,
        }],
    }
  )
  const [deleteSignal, { loading: deleting }] = useMutation(REMOVE_SIGNAL,{
    refetchQueries: [{
      query: GET_SIGNALS,
    }],
  });

  const onRowAdd = ({__typename, time, ...signal}) =>
    setSignal({ 
      variables: {
        ...signal,
        time: time.getTime()
      }
    });

  const onRowUpdate = ({__typename, ...signal}: ColumnData, oldData: ColumnData): Promise<any> => 
    setSignal({
      variables: {
        signal: signal
      }
    });
  
  const onRowDelete = (oldData: ColumnData) => {
    console.log('got: ', oldData)
      return deleteSignal({
        variables: {
          id: oldData.id
        }
      })
    }
  return (
    <Editable
      data={signals}
      columns={columns}
      title={(
        <Box display="flex">
          <Typography variant="h6">Señales</Typography>
          <UploadButton />
        </Box>
      )}
      onRowAdd={onRowAdd}
      onRowDelete={onRowDelete}
    />
  );
}
