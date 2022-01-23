import React, { useState } from 'react'
import { Container, Button } from '@material-ui/core';
import useStyles from './styles';
import axios from 'axios';

function FileUpload(){
    const classes = useStyles();
    const [uploadFile, setUploadFile] = useState("")

    const handleFileReader = (event) => {
        let reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = (e) => {
        setUploadFile({data:reader.result.split(',').pop(),fileName:event.target.files[0].name})
        };
    }
    const uploadHandler = async () => {
      const { data } = await axios.post('http://localhost:5000/insert', uploadFile, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
    });
      //console.log(data);
    };
    const buildHandler = async () => {
       await axios.get('http://localhost:5000/build');
    };
  return(
    <Container>
          <h2>Select a Zip Folder</h2>
          <input
          name='zip'
           onChange={handleFileReader}                
            type="file"
            accept=".zip"
          />
          
            <Button className={classes.button} variant="contained" color="primary" onClick={uploadHandler}>Insert File</Button>
            <Button className={classes.button} variant="contained" color="primary" onClick={buildHandler}>Build</Button>
         
        
    </Container>
          
      
      
    

  );
}

export default FileUpload;