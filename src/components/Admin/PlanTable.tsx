import React, { useState, RefObject, forwardRef} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import moment from 'moment';
import ReceiptIcon from '@material-ui/icons/Receipt';
import { ADD_PLAN } from '../../mutations/addPlan';
import { REMOVE_PLAN } from '../../mutations/removePlan';
import { GET_PLANS } from '../../queries/getPlans';
import { useMutation } from '@apollo/react-hooks';
import { Editable, ColumnData } from '../system/EditableTable';
import { Box, FormControl, Input, InputLabel, MenuItem, Select, TextField, Typography } from '@material-ui/core';


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  formControl: {
    minWidth: 120,
    marginLeft: 20
  }
});

export default function PlansTable({ plans, roles }) {
  const classes = useStyles();
  const [errors, setErrors] = useState([]);
  const rolesLookup = roles.reduce((result, role) => {
    result[role.name] = role.name;
    return result;
}, {})
  const columns = [
    { title: 'Titulo', field: 'label' },
    { title: 'Valor', field: 'amount', type: 'numeric' },
    { title: 'Rol', field: 'role', lookup: rolesLookup, initialEditValue: rolesLookup['VIP'] },
    {
      title: 'Duración',
      field: 'duration',
      initialEditValue: [15, 'd'],
      editComponent: props => {
        const units = [
          { label: 'Dia', value: 'd' },
          { label: 'Mes', value: 'M' },
          { label: 'Año', value: 'y' },
        ];
        return (<>
          <TextField
            type="text"
            label="Cantidad"
            value={props.value[0]}
            onChange={e => {
              console.log([parseInt(e.target.value || '0'), props.value[1]])
              props.onChange([parseInt(e.target.value || '0'), props.value[1]])
            }}
          />
          <FormControl className={classes.formControl}>
            <InputLabel id="unit-select-label">Unidad</InputLabel>
            <Select
              labelId="unit-select-label"
              id="unit-select"
              value={props.value[1]}
              onChange={e => {
                console.log([props.value[0], e.target.value])
                props.onChange([props.value[0], e.target.value])
              }}
            >
              {units.map(unitData => <MenuItem key={unitData.value} value={unitData.value}>{unitData.label}</MenuItem>)}
            </Select>
          </FormControl>
      </>)},
      render: rowData => <span>{moment.duration(...rowData.duration).locale("es").humanize()}</span>
    },
  ];
  const [setPlan, { called, loading: setting }] = useMutation(
    ADD_PLAN,
    {
        // update: async (cache, { data: { setSignal: signal }}) => {
        //   console.log(signal);
        //   const {plans}: any = await cache.readQuery({
        //     query: GET_PLANS
        //   });
        //   const dataUpdate: any = [...plans]
        //   const index = plans.indexOf(plans.find(u => u.email === signal.email));
        //   if (index > -1) {
        //     dataUpdate[index] = signal;
        //   } else {
        //     dataUpdate.push(signal);
        //   }
        //   cache.writeQuery({
        //     query: GET_PLANS,
        //     data: {
        //       plans: dataUpdate
        //     }
        //   })
        // },
        onCompleted: (result) => {
            console.log('setPlan finished:', result);
        },
        onError: (error) => {
            const newErrors = error.graphQLErrors.map(error => ({ message: error.message, key: error.path }));
            setErrors(newErrors);
        },
        refetchQueries: [{
          query: GET_PLANS,
        }],
    }
  )
  const [deletePlan, { loading: deleting }] = useMutation(REMOVE_PLAN,{
    refetchQueries: [{
      query: GET_PLANS,
    }],
  });

  const onRowAdd = ({__typename, ...plan}: ColumnData): Promise<any> =>{
  console.log('new plan: %o', plan);
    if(plan.label &&
      plan.amount !== undefined &&
      plan.duration?.length !== 0 &&
      plan.role !== undefined) {
    return setPlan({ 
      variables: {
        plan: {
          ...plan,
          amount: parseInt(plan.amount as unknown as string)
        }
      }
    });
  } else {
    return Promise.reject();
  }
}
  const onRowUpdate = ({__typename, ...plan}: ColumnData, oldData: ColumnData): Promise<any> => {
  console.log('new plan: %o', plan);
  return setPlan({ 
    variables: {
      plan
    }
  });
  }
  const onRowDelete = (oldData: ColumnData) => {
    console.log('got: ', oldData)
      return deletePlan({
        variables: {
          id: oldData.id
        }
      })
    }
  return (
    <Editable
      data={plans}
      columns={columns}
      title={(
        <Box display="flex">
          <Typography variant="h6">Planes</Typography>
        </Box>
      )}
      onRowAdd={onRowAdd}
      onRowDelete={onRowDelete}
    />
  );
}
