import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter } from 'react-router-dom';
import Dashcontainer from './components/ui_template/Dashcontainer';
// import Navbar from './components/Navbar/Navbar';
// import FileUpload from './components/FileUpload/FileUpload';
// import QueryInput from './components/QueryInput/QueryInput';
import './App.css';

const App = () => {
    
    return (
        // <Container maxWidth="xl">
        
            <div className='App'>
            <Dashcontainer />
            </div>
        
       
            /* <Navbar />
            <FileUpload />
            <QueryInput /> */
        // </Container>
    )
}
export default App;
