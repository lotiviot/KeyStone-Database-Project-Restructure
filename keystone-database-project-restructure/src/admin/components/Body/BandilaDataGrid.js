
//imports to handle basic functionality of the program component suite
import React, { Component, useEffect } from 'react'
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
    useEffect(()=>{
        LoadDataGrid().then((e) => {
            setData(e)
            console.log("asdf")
        })    
    }, [])
    
    //DATA IS YOUR MAIN SOURCE OF INFORMATION FOR THE GRID THIS IS WHAT YOU WILL USE TO DO YOUR THINGS AND STUFF
    console.log(data)
    return (
        //whole return for form and checkbox

        // UNDERNEATH THIS IS WHERE YOU WILL PLAY WITH THE DATAGRID
        <div>
            <DialogContainer selectedData={selected}/>
            <div className="dataset">
                <DataGrid 
                    autoHeight 
                    rows={data} 
                    columns={Columns} 
                    checkboxSelection 
                    pageSize={60} 
                    onSelectionChange={(newSelection) => {
                        setSelected(newSelection.rowIds)
                    }} 
                />
            </div>
        </div>    
    )
    
}

