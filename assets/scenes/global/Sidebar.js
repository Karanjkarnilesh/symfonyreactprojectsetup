import React,{ useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from 'react-pro-sidebar';
// import { Menu, MenuItem,SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import '../../styles/app.css';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
// import PersonOutlinedIcon from '@mui/icons-material';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined'; 
import BarChartOutlinedIcon from '@mui/icons-material/BarChart';
import PieChartOutlinedIcon from '@mui/icons-material/PieChart';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { IconButton, Typography,Box,useTheme } from "@mui/material";
import HelpCenterOutlinedIcon  from "@mui/icons-material/HelpCenterOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import { tokens } from "../../theme";
import profile from '../../user.jpeg';

const Item=({title,to,icon,selected,setSelected})=>{
  const theme =useTheme();
  const colors=tokens(theme.palette.mode)
return(
  <MenuItem active={selected===title} style={{color:colors.grey[100]}}
   onClick={
    ()=>setSelected(title)}
    icon={icon}
    >
  <Typography>{title}</Typography>
  <Link to={to}/>
  </MenuItem>
)
}

const sidebar=()=>{
    const theme=useTheme();
    const colors=tokens(theme.palette.mode);
    const [isCollapsed,setIsCollapsed]=useState(false);
    const [selected,setSelected]=useState('Dashboard');
    return (
        <Box  sx={{
          "& .ps-sidebar-root":{
              background:`${colors.primary[400]} !important`
          },
           "& .ps-sidebar-container":{
                  backgroundColor:`transparent !important`
              },
              
            "& .pro-inner-item":{
                padding :`5px 35px 5px 20px !important`
            },
            
            "& .ps-sidebar-root a:hover":{
              color :'#868dfb !important',
              backgroundColor:'transparent !important'
            },
            
            "&:active":{
              color :' #6870fa !important'
            },
                }}>
<Sidebar collapsed={isCollapsed}  >
  <Menu className="hover-menuItem" style={{background:colors.primary[600]}} >
  <Box  display="flex" justifyContent="space-between" alignItems="center">
  
      <MenuItem onClick={()=>setIsCollapsed(!isCollapsed)} style={{margin:'10px 0 20px 0'}}
      color={colors.grey[900]}
      icon={isCollapsed ?<MenuOutlinedIcon/>:undefined}
      ></MenuItem>
    
      </Box>
      {!isCollapsed &&(
<Box>

  <Box display="flex" justifyContent="end" alignItems="center" ml="15px">

  <Typography variant="h5" color={colors.grey[100]}
        >ADMINS</Typography>
      <MenuItem  style={{paddingLeft:'80px'}} onClick={()=>setIsCollapsed(!isCollapsed)}
       ><MenuOutlinedIcon /> </MenuItem>

  </Box>
    <Box  style={{ display: "flex",justifyContent:"center" }}> 
        <img alt="profile-user" width="100px" height="100px"
         src={profile} style={{cursor:"pointer",borderRadius:"50%"}}/>
    </Box>
    <Box textAlign="center">
        <Typography variant="h4" color={colors.grey[100]}
        fontWeight="bold" sm={{m:"10px 0 0 0"}}
        >Nilesh</Typography>
    <Typography variant="h6"
    color={colors.greenAccent[500]}
    fontWeight="bold" sm={{m:"10px 0 0 0"}}>VP Fancy Admin</Typography>
    </Box>
</Box>
)}
{/* Main menu */}
<Box paddingLeft={isCollapsed ?undefined:"10%"} >
  
  
<MenuItem
            component={<Link to="/" className="link" />}
            icon={<HomeOutlinedIcon/>}
            selected={selected}
            setSelected={setSelected}
          >
            Dashboard
          </MenuItem>
  
  
  
  {/* <Item 
  title="Dashboard"
  to="/"
  icon={<HomeOutlinedIcon/>}
  selected={selected}
  setSelected={setSelected}
  /> */}



  <Typography variant="h6"
  color={colors.grey[300]}
  sx={{m:"15px 0 5px 20px"}}
  >
    Data
  </Typography>

  <MenuItem
            component={<Link to="/team" className="link" />}
            icon={<PeopleOutlineOutlinedIcon/>}
            selected={selected}
            setSelected={setSelected}
          >
        Manage Team
            </MenuItem>



            <MenuItem
            component={<Link to="/contact" className="link" />}
            icon={<ContactsOutlinedIcon/>}
            selected={selected}
            setSelected={setSelected}
          >
        Contact Information
            </MenuItem>


            <MenuItem
            component={<Link to="/invoice" className="link" />}
            icon={<ReceiptOutlinedIcon/>}
            selected={selected}
            setSelected={setSelected}
          >
       Invoice Balances
            </MenuItem>

  <Typography variant="h6"
  color={colors.grey[300]}
  sx={{m:"15px 0 5px 20px"}}
  >
    Pages
  </Typography>
   {/* <Item 
  title="Profile Form"
  to="/form"
  icon={<PersonOutlinedIcon/>}
  selected={selected}
  setSelected={setSelected}
  /> */}
<MenuItem
component={<Link to="/calender" className="link" />}
icon={<CalendarTodayOutlinedIcon/>}
selected={selected}
setSelected={setSelected}
>
Calender
</MenuItem>

<MenuItem
component={<Link to="/faq" className="link" />}
icon={<HelpCenterOutlinedIcon/>}
selected={selected}
setSelected={setSelected}
>
FAQ Page
</MenuItem>


  <Typography variant="h6"
  color={colors.grey[300]}
  sx={{m:"15px 0 5px 20px"}}
  >
    Charts
  </Typography>

  <MenuItem
component={<Link to="/bar" className="link" />}
icon={<BarChartOutlinedIcon/>}
selected={selected}
setSelected={setSelected}
>
Bar chart
</MenuItem>


<MenuItem
component={<Link to="/pie" className="link" />}
icon={<PieChartOutlinedIcon/>}
selected={selected}
setSelected={setSelected}
>
Pie Chart
</MenuItem>


<MenuItem
component={<Link to="/line" className="link" />}
icon={<TimelineOutlinedIcon/>}
selected={selected}
setSelected={setSelected}
>
Line Chart
</MenuItem>

<MenuItem
component={<Link to="/geography" className="link" />}
icon={<MapOutlinedIcon/>}
selected={selected}
setSelected={setSelected}
>
Geography Chart
</MenuItem>

  </Box>    
  </Menu>
</Sidebar>
</Box>
    );
}
export default sidebar;