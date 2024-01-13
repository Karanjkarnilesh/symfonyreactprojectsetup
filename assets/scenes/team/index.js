import React from "react";
import { Box,Typography,typography,useTheme } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import mockDataTeam from "../../data/mockData";
import { AdminPanelSettingsOutlinedIcon } from "@mui/icons-material/AdminPanelSettingsOutlined";
import { SecurityOutlinedIcon } from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";
import { LockClockOutlinedIcon } from "@mui/icons-material/LocalActivityOutlined";

const Team=()=>{
const theme=useTheme();
const colors=tokens(theme.palette.mode);
const rows = [
    {
        id: 1,
        name: "Jon Snow",
        email: "jonsnow@gmail.com",
        age: 35,
        phone: "(665)121-5454",
        access: "admin",
      },
      {
        id: 2,
        name: "Cersei Lannister",
        email: "cerseilannister@gmail.com",
        age: 42,
        phone: "(421)314-2288",
        access: "manager",
      },
      {
        id: 3,
        name: "Jaime Lannister",
        email: "jaimelannister@gmail.com",
        age: 45,
        phone: "(422)982-6739",
        access: "user",
      },
      {
        id: 4,
        name: "Anya Stark",
        email: "anyastark@gmail.com",
        age: 16,
        phone: "(921)425-6742",
        access: "admin",
      },
      {
        id: 5,
        name: "Daenerys Targaryen",
        email: "daenerystargaryen@gmail.com",
        age: 31,
        phone: "(421)445-1189",
        access: "user",
      },
      {
        id: 6,
        name: "Ever Melisandre",
        email: "evermelisandre@gmail.com",
        age: 150,
        phone: "(232)545-6483",
        access: "manager",
      },
      {
        id: 7,
        name: "Ferrara Clifford",
        email: "ferraraclifford@gmail.com",
        age: 44,
        phone: "(543)124-0123",
        access: "user",
      },
      {
        id: 8,
        name: "Rossini Frances",
        email: "rossinifrances@gmail.com",
        age: 36,
        phone: "(222)444-5555",
        access: "user",
      },
      {
        id: 9,
        name: "Harvey Roxie",
        email: "harveyroxie@gmail.com",
        age: 65,
        phone: "(444)555-6239",
        access: "admin",
      },
      {
        id: 10,
        name: "Harvey Roxie",
        email: "harveyroxie@gmail.com",
        age: 65,
        phone: "(444)555-6239",
        access: "admin",
      },
    ];
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
       //  valueFormatter :({row:{access}})=>{
// return(
//     <Box 
//     width="60%"
//     p="5px"
//     display="flex" 
//     justifyContent="center"
//     backgroundColor={
//         access === "admin"
//         ? colors.greenAccent[600]
//         :colors.greenAccent[700]
//     }
//     borderRadius="4px"
//     >
// {access === "admin" && <AdminPanelSettingsOutlinedIcon/>}
// {access === "manager" && <SecurityOutlinedIcon/>}
// {access === "user" && <LockClockOutlinedIcon/>}
// <Typography color={colors.grey[100]} sx={{ml:"5px"}}>
//     {access}
// </Typography>
//     </Box>
// );
    //    },
      },
];

return(
<Box m="20px">
    <Header title="Team" subTitle="Managing the Team membars"/>
    <Box m="40px 0 0 0"  sx={{ height: 630, width: '100%'}} >
    <DataGrid
        rows={rows}
        columns={columns}/>
    </Box>
</Box>

);
}

export default Team;
