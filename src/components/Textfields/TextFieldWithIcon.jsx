"use client";
import * as React from "react";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

function TextFieldWithIcon() {
 

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  return (
    <>
      
      <OutlinedInput
        id="outlined-adornment"
        type={"text"}
        placeholder="abc@xyz.com"
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              edge="end"
            >
              <AlternateEmailIcon /> 
            </IconButton>
          </InputAdornment>
        }
     
      />
    </>
  );
}

export default TextFieldWithIcon;
