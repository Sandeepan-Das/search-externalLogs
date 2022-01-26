import axios from "axios";

export const getTableData = (inputQuery) => async (dispatch) => {
  try {
    const { data } = await axios.get(`http://localhost:5000/search/${inputQuery}`);
    dispatch({ type: "TABLE_DATA", payload: data });
    dispatch({ type: "OPEN" });
  } catch (error) {
    console.log(error.response.data.message);
  }
};
