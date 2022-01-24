import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import FolderZipIcon from "@mui/icons-material/FolderZip";
import TextField from "@mui/material/TextField";
import ButtonAppBar from "./ButtonAppBar";
import BasicTable from "./BasicTable";
import { Paper } from "@mui/material";

const Input = styled("input")({
  display: "none",
});

const drawerWidth = 300;

export default function ClippedDrawer() {
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
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
          background: "#212121",
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            <ListItem>
              <ListItemIcon>
                <label htmlFor="icon-button-file">
                  <Input accept="image/*" id="icon-button-file" type="file" />
                  <IconButton
                    color="primary"
                    aria-label="upload picture"
                    component="span"
                    size="large"
                  >
                    <FolderZipIcon fontSize="large" />
                  </IconButton>
                </label>
              </ListItemIcon>
              <ListItemText
                primary="upload your logs"
                sx={{ textAlign: "center" }}
              />
            </ListItem>
            <ListItem>
              <Button fullWidth variant="contained" size="large">
                Insert
              </Button>
            </ListItem>
          </List>

          <Divider />
          <List>
            <ListItem>
              <TextField
                fullWidth
                id="outlined-multiline-static"
                label="Multiline"
                multiline
                rows={4}
                defaultValue="Default Value"
              />
            </ListItem>
            <ListItem>
              <Button fullWidth variant="outlined" size="large">
                Search
              </Button>
            </ListItem>
          </List>
        </Box>
      </Drawer>
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
