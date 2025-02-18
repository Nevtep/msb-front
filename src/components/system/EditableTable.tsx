import React, { useState, forwardRef, RefObject } from 'react';

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

export interface ColumnData {
    [x: string]: {
      [y:string]: any
    }
  }

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
    ViewColumn: forwardRef((props: any, ref: RefObject<SVGSVGElement>) => <ViewColumn {...props} ref={ref} />),
  };
export type EditableProps = { 
  [index: string]: any
}

export function Editable({ data, title, columns, onRowAdd, onRowUpdate, onRowDelete, ...props }: EditableProps) {
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
        {...props}
      />
    )
  }