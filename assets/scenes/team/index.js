import React, { Component, useState } from 'react'
// as per theme get colors
import { Box,Typography,typography,useTheme } from "@mui/material";
//create table using datagrid
import { DataGrid } from "@mui/x-data-grid";
// get them colors as per mode
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
        field: 'access',
        headerName: 'Access Level',
       flex:1,
      },
      {
        headerName: 'Action',
       flex:1,
      },
  
  ];

  axios.get('api/user/')
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
  }
  
    }} 
     >
    <DataGrid 
          rows={rows}
          columns={columns}/>
  </Box>
  );
}


export default class Team extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
    };
  } 
  render() {
    return (
      <Box m="20px">
      <Header title="Team" subTitle="Managing the Team membars"/>
     <CreateTable/>
  </Box>
    )
  }
}

