import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: "purple" }}>
        <Toolbar>
          <img
            src="meme_logo.png"
            alt="logo"
            width={"50"}
            sx={{ mr: "10px" }}
          />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, ml: 2 }}>
            MemeGenerator
          </Typography>
          <Typography color="inherit">React Course - Project 3</Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
