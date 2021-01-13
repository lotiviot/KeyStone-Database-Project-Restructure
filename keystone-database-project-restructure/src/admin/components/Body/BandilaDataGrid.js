
//imports to handle basic functionality of the program component suite
import React, { Component } from 'react'
import {db , storage} from 'constants/Fire';
import DialogContainer from 'admin/components/Layout/DialogContainer'
import './BandilaDataGrid.scss'

// import CheckboxContainer from './CheckboxContainer';
//import GrabUrl from 'admin/LoadFunctions/GrabUrl';
import { DataGrid } from '@material-ui/data-grid';
import uuid from "uuid";

//this import will need to be able to be flexible as necessary with whatever new backend component is introduced prefixed, Load

import {Columns} from 'constants/Data'
import LoadDataGrid from 'constants/LoadDataGrid'


export default function AdminComponent()
{
    const [selected, setSelected] = React.useState([]);
    const [data, setData] = React.useState([]);
    LoadDataGrid().then((e) => {
        setData(e)
    })

    return (
        //whole return for form and checkbox
        <div>
            <DialogContainer selectedData={selected}/>
            <div className="dataset">
                <DataGrid 
                    autoHeight 
                    rows={data} 
                    columns={Columns} 
                    checkboxSelection 
                    pageSize={13} 
                    onSelectionChange={(newSelection) => {
                        setSelected(newSelection.rowIds)
                    }} 
                />
            </div>
        </div>    
    )
    
}

