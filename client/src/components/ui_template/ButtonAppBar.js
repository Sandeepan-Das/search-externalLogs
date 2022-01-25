import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Paper } from "@mui/material";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import { InputAdornment, FormControl } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import axios from "axios";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="default">
        <Toolbar>
          <FormControl fullWidth sx={{ mr: 20 }} variant="standard">
            <TextField
              variant="standard"
              label="Query"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton edge="end" color="primary">
                      <SearchSharpIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </FormControl>

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
