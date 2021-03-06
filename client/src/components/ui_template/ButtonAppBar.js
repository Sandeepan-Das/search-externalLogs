import React, { useState } from "react";
import { useDispatch } from "react-redux";
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
import { getTableData } from "../../actions/table";
import Alert from '@mui/material/Alert';

export default function ButtonAppBar() {
  const dispatch = useDispatch();
  const [inputQuery, setInputQuery] = useState("");
  const [errorDisplay, seterrorDisplay] = useState(false);

  const handleSubmit = async () => {
    if (inputQuery) {
      dispatch(getTableData(inputQuery.replaceAll(" ", "")));
    } else {
      seterrorDisplay(true);
      setTimeout(function() { seterrorDisplay(false); }, 4000);
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      {errorDisplay && <Alert severity="error">Please insert the service tags</Alert>}
      <AppBar position="static" color="default">
        <Toolbar>
          <FormControl
            sx={{
              width: "100%",
              marginBottom: "16px",
              paddingTop: "3px",
              paddingBottom: "3px",
            }}
            variant="standard"
          >
            <TextField
              variant="standard"
              label="Service Tag"
              onChange={(e) => setInputQuery(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton edge="end" color="primary">
                      <SearchSharpIcon onClick={handleSubmit} />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Typography
              variant="subtitle2"
              align="left"
              sx={{ marginTop: "10px", color: "#ff5252" }}
            >
              [use comma(,) for multiple ServiceTags without spaces.]
            </Typography>
          </FormControl>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
