import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component={Link} to="/" color="inherit" style={{ textDecoration: 'none' }}>
          Home
        </Typography>
        <Button color="inherit" component={Link} to="/teams">
          Teams
        </Button>
        <Button color="inherit" component={Link} to="/all-stars">
          All Stars
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
