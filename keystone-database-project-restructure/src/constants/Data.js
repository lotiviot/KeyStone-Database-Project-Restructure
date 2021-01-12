import { TextareaAutosize } from '@material-ui/core';

export const Columns = [
    { 
        field: 'id', headerName: 'ID', width: 70 
    },
    {
        field: 'fullName',
        headerName: 'Full Name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 130,
        valueGetter: (params) =>
          `${params.getValue('firstName') || ''} ${params.getValue('lastName') || ''}`,
    },
    {
        field: 'dateSubmitted', headerName: 'Date Submitted', width: 120, type: "date" 
    },
    {
        field: 'phoneNumber', headerName: 'Phone Number', width: 150,
    },
    {
        field: 'fullAddress',
        headerName: 'Full Address',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 400,
        valueGetter: (params) =>
          `${params.getValue('address') || ''} ${params.getValue('city') || ''}, ${params.getValue('state') || ''} ${params.getValue('zipCode') || ''}`,
    },
    {
        field: 'email', headerName: 'Email', width: 200 , type: 'email'
    },
    {
        field: 'amount', headerName: 'Amount', width: 120 , type: 'currency'
    },
    {
        field: 'dateDonorContacted', headerName: 'Date Donor Contacted', width: 120 , type: "date"
    },
    {
        field: 'reason', headerName: 'Reason', width: TextareaAutosize 
    },
    {
        field: 'address', headerName: 'Address', width: 0 
    },
    {
        field: 'city', headerName: 'City', width: 0
    },
    {
        field: 'state', headerName: 'State', width: 0
    },
    {
        field: 'zipCode', headerName: 'Zip Code', width: 0 
    },
    {
        field: 'firstName', headerName: 'First Name', width: 0
    },
    {
        field: 'lastName', headerName: 'Last Name', width: 0 
    },
]



