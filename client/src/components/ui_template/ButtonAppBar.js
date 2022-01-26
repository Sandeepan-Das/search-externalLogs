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

export default function ButtonAppBar() {
  const dispatch = useDispatch();
  const [queryInput, setQueryInput] = useState("");

  const handleSubmit = async () => {
    var array = queryInput.split(",");
    var inputQuery = [];

    for (var i = 0; i < array.length; i++) {
      var o = {};
      o["query"] = array[i];
      inputQuery.push(o);
    }

    if (queryInput) {
      dispatch(getTableData(inputQuery));
    } else {
      console.log("string not found.");
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="default">
        <Toolbar>
          <FormControl
            sx={{
              width: "85%",
              marginBottom: "16px",
              paddingTop: "3px",
              paddingBottom: "3px",
            }}
            variant="standard"
          >
            <TextField
              variant="standard"
              label="Query"
              onChange={(e) => setQueryInput(e.target.value)}
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
          </FormControl>

          <Typography
            variant="overline"
            noWrap
            align="right"
            sx={{ flexGrow: 1 }}
            component="div"
          >
            time elapsed
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
