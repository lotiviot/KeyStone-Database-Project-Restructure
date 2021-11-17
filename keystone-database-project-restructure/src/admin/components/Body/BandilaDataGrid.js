import React, {useState} from 'react';
import {AgGridColumn, AgGridReact} from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const InitialRowData = [
    {make: "", model: "", price: 35000 },
    
];
//{rowvalue: "columnname", rowname: "columnname", rowvalue: columnvalue },
export function CarsGrid() {
    // set to default data
    const [rowData, setRowData] = useState(InitialRowData);

   return (
       <div className="ag-theme-alpine" style={{height: 400, width: 600}}>   
           <AgGridReact
                rowData={rowData}
                >
                <AgGridColumn field="make"></AgGridColumn>
                <AgGridColumn field="model"></AgGridColumn>
                <AgGridColumn field="price"></AgGridColumn>
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

}