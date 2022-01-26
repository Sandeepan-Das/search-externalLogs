import * as React from "react";
import Box from "@mui/material/Box";

import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";

import Typography from "@mui/material/Typography";

import { styled } from "@mui/material/styles";
import { useSelector } from "react-redux";
import ButtonAppBar from "./ButtonAppBar";
import BasicTable from "./BasicTable";
import { Paper } from "@mui/material";
import TableData from "../TableData";

export default function Dashcontainer() {
  const tables = useSelector((state) => state.table);
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
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <ButtonAppBar />
        <Paper
          elevation={4}
          sx={{ "margin-top": "20px", padding: "20px", minHeight: "40vh" }}
        >
          
          {Object.keys(tables).length ? (<TableData datas={tables} />) : (
            <div> 
              <img src="https://img.icons8.com/dotty/80/000000/empty-box.png" />
              <Typography variant="h6">no data yet</Typography>
              <Typography variant="subtitle2">
                search your file to get data
              </Typography>
            </div>
          )}
        </Paper>
      </Box>
    </Box>
  );
}
