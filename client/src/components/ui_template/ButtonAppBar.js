import React, { useState } from "react";
import { useDispatch } from 'react-redux';
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
  const [queryInput, setQueryInput] = useState('');

  const handleSubmit = async () => {
    var array = queryInput.split(',');
    var inputQuery = [];

    for (var i = 0; i < array.length; i ++) {
      var o = {};
      o["query"] = array[i];
      inputQuery.push(o);
    }

    dispatch(getTableData(inputQuery));
  };
 
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="default">
        <Toolbar>
          <FormControl fullWidth sx={{ mr: 20 }} variant="standard">
            <TextField
              variant="standard"
              label="Query"
              onChange={(e) => setQueryInput(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton edge="end" color="primary">
                      <SearchSharpIcon onClick={handleSubmit}/>
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </FormControl>

          <Typography
            variant="subtitle1"
            component="div"
            
           //align="center"
          >
            time elapsed
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
