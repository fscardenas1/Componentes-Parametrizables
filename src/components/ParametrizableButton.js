import React from "react";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { Icon } from "@mui/material";

const ParametrizableButton = ({ label, color, icon, onClick }) => {
  return (
    <Button variant="contained" color={color} onClick={onClick} startIcon={icon && <Icon>{icon}</Icon>}>
      {label}
    </Button>
  );
};

export default ParametrizableButton;
