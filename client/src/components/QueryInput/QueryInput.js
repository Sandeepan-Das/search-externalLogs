import React, { useState } from 'react';
import { Container, TextField, Button, IconButton, Icon } from '@material-ui/core';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import { v4 as uuidv4 } from 'uuid';

import useStyles from './styles';


const QueryInput = () => {
  const classes = useStyles()
  const [queryInputs, setQueryInputs] = useState([
    { id: uuidv4(), fileName: '' },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("QueryInputs", queryInputs);
  };

  const handleChangeInput = (id, event) => {
    const newQueryInputs = queryInputs.map(i => {
      if(id === i.id) {
        i[event.target.name] = event.target.value
      }
      return i;
    })
    
    setQueryInputs(newQueryInputs);
  }

  const handleAddField = () => {
    setQueryInputs([...queryInputs, { id: uuidv4(),  fileName: '' }])
  }

  const handleRemoveField = id => {
    const values  = [...queryInputs];
    values.splice(values.findIndex(value => value.id === id), 1);
    setQueryInputs(values);
  }

  return (
    <Container>
      <h1>Add File(s)</h1>
      <form className={classes.root} onSubmit={handleSubmit}>
        { queryInputs.map(queryInput => (
          <div key={queryInput.id}>
            <TextField
              name="fileName"
              label="File Name"
              variant="filled"
              value={queryInput.fileName}
              onChange={event => handleChangeInput(queryInput.id, event)}
            />
            <IconButton disabled={queryInputs.length === 1} onClick={() => handleRemoveField(queryInput.id)}>
              <RemoveIcon />
            </IconButton>
            <IconButton
              onClick={handleAddField}
            >
              <AddIcon />
            </IconButton>
          </div>
        )) }
        <Button
          className={classes.button}
          variant="contained" 
          color="primary" 
          type="submit" 
          endIcon={<Icon>send</Icon>}
          onClick={handleSubmit}
        >Send</Button>
      </form>
    </Container>
  );
};

export default QueryInput;