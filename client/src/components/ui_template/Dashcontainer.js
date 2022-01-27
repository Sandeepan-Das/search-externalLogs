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
import SnackBar from "./SnackBar";
import { makeStyles } from "@material-ui/core/styles";
import Footer from "./Footer";
import DellLogo from "./dellLogo";

const useStyles = makeStyles((theme) => ({
  img: {
    margin: "150px 0px",
  },
}));

export default function Dashcontainer() {
  const tables = useSelector((state) => state.table);
  const classes = useStyles();
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <SnackBar />
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          background: "#01579b",
        }}
      >
        <Toolbar>
          <div>
            <DellLogo />
          </div>

          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ "margin-left": "10px" }}
          >
            Search-External Logs
          </Typography>
          <Typography
            align="right"
            noWrap
            variant="subtitle1"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            Team : Boolean Bandits
          </Typography>
        </Toolbar>
      </AppBar>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <ButtonAppBar />
        <Paper
          elevation={4}
          sx={{ "margin-top": "20px", padding: "20px", minHeight: "65vh" }}
        >
          {Object.keys(tables).length ? (
            <TableData datas={tables} />
          ) : (
            <div className={classes.img}>
              <img src="https://img.icons8.com/dotty/80/000000/empty-box.png" />
              <Typography variant="h6">no data yet</Typography>
              <Typography variant="subtitle2">
                search your file to get data
              </Typography>
            </div>
          )}
        </Paper>
      </Box>
      <Footer />
    </Box>
  );
}
