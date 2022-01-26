import { combineReducers } from "redux";
import table from './table';  //table reducer
import SnackToggle from './SnackToggle' //Snackbar toggle reducer

//to combine reducers
export default combineReducers({
    table,
    SnackToggle
});

