import React from 'react';
import { Container } from '@material-ui/core';
import Navbar from './components/Navbar/Navbar';
import QueryInput from './components/QueryInput/QueryInput';

const App = () => {
    
    return (
        <Container maxWidth="xl">
            <Navbar />
            <QueryInput />
        </Container>
    )
}
export default App;
