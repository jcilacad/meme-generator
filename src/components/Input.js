import { PropaneSharp } from "@mui/icons-material";
import { TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import * as React from "react";

export default function ColumnsGrid(props) {
  function handleClick() {
    console.log("Clicked");
  }

  return (
    <Box sx={{ flexGrow: 1, mt: "3rem" }}>
      <Grid container spacing={2} justifyContent={"center"}>
        <Grid xs={12} md={6} lg={6} textAlign={"center"}>
          <TextField
            id="outlined-basic"
            label="Top Text"
            variant="outlined"
            fullWidth
            onChange={props.handleChange}
            name="topText"
            value={props.meme.topText}
          />
        </Grid>
        <Grid fullWidth xs={12} md={6} lg={6} textAlign={"center"}>
          <TextField
            id="outlined-basic"
            label="Bottom Text"
            variant="outlined"
            fullWidth
            onChange={props.handleChange}
            name="bottomText"
            value={props.meme.bottomText}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
