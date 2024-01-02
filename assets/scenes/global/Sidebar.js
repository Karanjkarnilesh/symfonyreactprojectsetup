import React from "react";
import {Box, Menu, MenuItem } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
// import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import LiveHelpIcon from '@mui/icons-material/LiveHelp'; 
import BarChartIcon from '@mui/icons-material/BarChart';
import PieChartIcon from '@mui/icons-material/PieChart';
import ShowChartOutlinedIcon from '@mui/icons-material/ShowChartOutlined'; 
import TerrainOutlinedIcon from '@mui/icons-material/TerrainOutlined';
import { useTheme } from "@emotion/react";
import { tokens } from "../../theme";
import { useState } from "react";

const Sidebar=()=>{
    const theme=useTheme();
    const colors=tokens(theme.palette.mode);
    const [isCollapsed,setIsCollapsed]=useState(false);
    const [selected,setelected]=useState('Dashboard');
    return <Box sx={{
        "& .pro-sidebar-inner":{
            background:`${colors.primary[400]} !important`
        },
            "& .pro-icon-wrapper":{
                backgroundColor:`transparent !important`
            },
            
                "& .pro-inner-item":{
                    padding :"5px 35px 5px 20px !important"
                },
                
                "& .pro-inner-item:hover":{
                    color :"#868dfb !important"
                },
                
                "& .pro-inner-item:active":{
                    color :" #6870fa !important"
                },

    }}></Box>
}
export default Sidebar;