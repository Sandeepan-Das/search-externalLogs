import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import BuildIcon from "@mui/icons-material/Build";
import axios from "axios";

const buildHandler = async () => {
  const {data} = await axios.get("http://localhost:5000/build");
  console.log(data);
};
export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Button variant="contained" startIcon={<BuildIcon />} onClick={buildHandler}>
            Build
          </Button>
          <Typography
            variant="subtitle1"
            component="div"
            sx={{ flexGrow: 1 }}
            align="right"
          >
            time elapsed
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
