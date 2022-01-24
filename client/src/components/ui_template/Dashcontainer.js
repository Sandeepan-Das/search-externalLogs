import * as React from "react";
import Box from "@mui/material/Box";

import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";

import Typography from "@mui/material/Typography";


import { styled } from "@mui/material/styles";

import ButtonAppBar from "./ButtonAppBar";
import BasicTable from "./BasicTable";
import { Paper } from "@mui/material";

import DrawerContainer from "./DrawerContainer";



export default function Dashcontainer() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          background: "#424242",
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Search-external logs
          </Typography>
        </Toolbar>
      </AppBar>
      <DrawerContainer />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <ButtonAppBar />
        <Paper elevation={4} sx={{ "margin-top": "20px", padding: "20px" }}>
          <BasicTable />
        </Paper>
      </Box>
    </Box>
  );
}
