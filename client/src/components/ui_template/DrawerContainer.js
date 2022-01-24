import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import FolderZipIcon from "@mui/icons-material/FolderZip";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import axios from "axios";

const Input = styled("input")({
  display: "none",
});

const drawerWidth = 300;

function DrawerContainer() {
  const [fileName, setfileName] = useState("");
  const [uploadFile, setUploadFile] = useState("");
  const handleFileReader = (event) => {
    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (e) => {
      setfileName(event.target.files[0].name);
      setUploadFile(event.target.files[0]);
    };
  };
  const uploadHandler = async () => {
    const formData = new FormData();
    formData.append("zip", uploadFile);
    //not complete
    const { data } = await axios.post(
      "http://localhost:5000/insert",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    console.log(data);
  };
  return (
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
                <Input
                  name="zip"
                  accept=".zip"
                  onChange={handleFileReader}
                  id="icon-button-file"
                  type="file"
                />
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
              primary={fileName ? fileName : "Upload your logs"}
              sx={{ textAlign: "center" }}
            />
          </ListItem>
          <ListItem>
            <Button fullWidth variant="contained" size="large" onClick={uploadHandler}>
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
  );
}

export default DrawerContainer;
