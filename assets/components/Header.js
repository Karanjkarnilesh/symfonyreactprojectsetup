import React from 'react';
import { Typography,Box,useTheme, colors } from "@mui/material";
import { Token, tokens } from "../theme";


const Header=({title,subTitle})=>{
const theme=useTheme();
const colors=tokens(theme.palette.mode);
    return(<Box ><Typography
    variant='h4' color={colors.grey[100]} fontWeight="bold" sx={{mb:"5px"}}>{title}</Typography>
    <Typography variant='h6'  color={colors.greenAccent[500]}>{subTitle}</Typography>
    </Box>);
}

export default Header;