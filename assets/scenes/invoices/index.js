import React from "react";
import { Box,Typography,useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import {mockDataInvoices} from "../../data/mockData";
import Header from "../../components/Header";

const Invoice=()=>{
const theme=useTheme();
const colors=tokens(theme.palette.mode);

const columns=[
    { field: 'id', headerName: 'ID' },
    {
        field: 'name',
        headerName: 'Name',
        flex:1,
        cellClassName:"name-column--cell",
      },
      {
        field: 'phone',
        headerName: 'Phone number',
       flex:1
      },
      {
        field: 'email',
        headerName: 'Email',
       flex:1
      },
      {
        field: 'cost',
        headerName: 'Cost',
       flex:1,
       renderCell:(param)=>{
        return(<Typography color={colors.greenAccent[500]} >
            ${param.row.cost}</Typography>);
       }
      },
      {
        field: 'date',
        headerName: 'Date',
       flex:1
      },
];

return(
<Box m="20px">
    <Header title="INVOICES" subTitle="List of Invoices Balances "/>
    <Box m="40px 0 0 0"  sx={{ height: 630, width: '100%',
   "& .MuiDataGrid-root":{border:"none"},
   "& .MuiDataGrid-cell":{border:"none"} ,
   "& .name-column--cell":{color:colors.greenAccent[300]},
   "& .MuiDataGrid-columnHeader":{
    backgroundColor:colors.blueAccent[700],
    borderBottom:"none"
  },
   "& .MuiDataGrid-virtualScroller":{
    backgroundColor:colors.primary[400]
  },
   "& .MuiDataGrid-footerContainer":{
    backgroundColor:colors.blueAccent[700],
    borderTop:"none"
},
"& .MuiDataGrid-toolbarContainer .MuiButton-text":{
    color:`${colors.grey[100]} !important` ,
},

  }} 
   >
    <DataGrid
        rows={mockDataInvoices}
        columns={columns}
        components={{Toolbar:GridToolbar}}/>
       
    </Box>
</Box>

);
}

export default Invoice;
