import React, { useState } from 'react';
import { Container, TextField, Button, IconButton, Icon } from '@material-ui/core';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import useStyles from './styles';
import TableData from '../TableData';


const QueryInput = () => {
  const classes = useStyles()
  const [inputQuery, setinputQuery] = useState([
    { id: uuidv4(), query: '' },
  ]);
  const [tableData, settableData] = useState({});
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await axios.post('http://localhost:5000/search', {inputQuery});
    console.log(data);
    const updatedTable = {...tableData, data};
    settableData(updatedTable);
  };

  const handleChangeInput = (id, event) => {
    const newinputQuery = inputQuery.map(i => {
      if(id === i.id) {
        i[event.target.name] = event.target.value
      }
      return i;
    })
    
    setinputQuery(newinputQuery);
  }

  const handleAddField = () => {
    setinputQuery([...inputQuery, { id: uuidv4(),  query: '' }])
  }

  const handleRemoveField = id => {
    const values  = [...inputQuery];
    values.splice(values.findIndex(value => value.id === id), 1);
    setinputQuery(values);
  }

  return (
    <Container>
      <h2>Add File(s)</h2>
      <form className={classes.root} onSubmit={handleSubmit}>
        { inputQuery.map(queryInput => (
          <div key={queryInput.id}>
            <TextField
              name="query"
              label="File Name"
              variant="filled"
              value={queryInput.query}
              onChange={event => handleChangeInput(queryInput.id, event)}
            />
            <IconButton disabled={inputQuery.length === 1} onClick={() => handleRemoveField(queryInput.id)}>
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
        >Send</Button>
      </form>
      
      {Object.keys(tableData).length > 0 ? (<TableData datas={tableData} />) : (null)}
      
    </Container>
  );
};

export default QueryInput;