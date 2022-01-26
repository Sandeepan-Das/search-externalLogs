import axios from "axios";

export const getTableData = (inputQuery) => async(dispatch) => {
    try {
        const { data } = await axios.post('http://localhost:5000/search', {inputQuery});  
        dispatch({ type: 'TABLE_DATA', payload: data });  
    } catch (error) {
        console.log(error.response.data.message);
    }
}