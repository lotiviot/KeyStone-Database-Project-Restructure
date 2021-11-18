import React, {useState} from 'react';
import {AgGridColumn, AgGridReact} from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import LoadDataGrid from 'constants/LoadDataGrid';

const InitialRowData = [
    {make: "asdf", model: "asdf", price: 35000 },
    
];
//{rowvalue: "columnname", rowname: "columnname", rowvalue: columnvalue },
export default function BandilaDataGrid() {
    // set to default data
    const [rowData, setRowData] = useState(InitialRowData);

    //this is an effect function that runs on each re render of the application based on
    //various stipulations determined by the absence, presence, or population of the dependency array
    //if no array is present the function will run on every rerender
    //if an empty array is present the function will run once at the beginning of the cycle and not run again
    //if there is a value that is present then the function will run whenever that value changes
    React.useEffect(()=>{

        //this is an api call that will get information from the firebase database website
        //in order to access that information since it is sent asynchronously/not in time with
        //the rest of our application, we need to find some way to capture that information for 
        //us to use. for this reason, we are using a .then() method with an arrow function inside
        //of it to capture the promise of the api call and make use of that information as necessary
        //past this point what we end up doing is mutating some of the information from that 
        //api call to make it more presentable for the user. this will come in handy when we want to
        //compile the addresses of the users, and present the strings in singular sections into the grid
        //but still want to be able to search in the individual strings as necessary. this was not available
        //with material ui and i hate them for it. 

        LoadDataGrid().then((e) => {
            var tempObj = e
            var tempStr = ""
            e.map((item, index)=>{
                tempStr = item.firstName + " " + item.lastName
                tempObj[index].fullName = tempStr
            })
            setRowData(tempObj)
        })    
    }, [])

   return (
       <div className="ag-theme-alpine" style={{height: 400, width: 600}}>   
           <AgGridReact
                rowData={rowData}
                >
                <AgGridColumn field="firstName"></AgGridColumn>
                <AgGridColumn field="lastName"></AgGridColumn>
                <AgGridColumn field="fullName"></AgGridColumn>
           </AgGridReact>
       </div>
   )
};
// can change make, model, and price to different name (change to name of 1st row)
//before ><:
    //sortable={true}
        //can move stuff in columns move up or down
    //filter={true}
        //can let user search for specific letters/phrases in grid if grid has alot of info
    //editable={true}
        //user can change value

