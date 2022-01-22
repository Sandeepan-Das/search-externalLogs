import React from 'react'
import { Container, Button } from '@material-ui/core';

function fileUpload(){
  

  return(
    <Container>
          <label className='label'>Select a Zip Folder</label>
          <br />
          <input
           // onChange={handleFileReader}                
            type="file"
            accept=".zip,.rar,.7zip"
          />
          <Button variant="contained" color="primary">Insert File</Button>
          <Button variant="contained" color="primary">Build</Button>
      
        
    </Container>
          
      
      
    

  );
}

export default fileUpload;