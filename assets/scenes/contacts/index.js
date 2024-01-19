import React, { Component,useState } from "react";
import { Box,useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";
// ajex or axios call to get data from backend
import axios from "axios";
const CreateTable=()=>{
  const [rows, setRows]=useState([]);
    const theme=useTheme();
    const colors=tokens(theme.palette.mode);
   
const columns=[
  { field: 'id', headerName: 'ID' },
  { field: 'registerID', headerName: 'registrar ID' },
  {
      field: 'name',
      headerName: 'Name',
      flex:1,
      cellClassName:"name-column--cell",
    },
    {
      field: 'age',
      headerName: 'Age',
      headerAlign:"left",
      align:"left"
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
      field: 'address',
      headerName: 'Address',
     flex:1
    },
    {
      field: 'city',
      headerName: 'City',
     flex:1
    },
    {
      field: 'zipcode',
      headerName: 'ZipCode',
     flex:1
    },
   
];

  axios.get('api/contact/')
  .then(response=>{
    setRows(response.data)
  }).catch(error=>{
    console.error(error);
  })
  return (
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
          rows={rows}
          columns={columns}/>
  </Box>
  );
}












export default class Contact extends Component{
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
return(
<Box m="20px">
    <Header title="CONTACTS" subTitle="List of Contacts for future Referance "/>
 
  <CreateTable/>
       
    </Box>

);
}

}
