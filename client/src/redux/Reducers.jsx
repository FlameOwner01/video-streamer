import { combineReducers } from "redux";
import authReducer from "../redux/module/Authorization.jsx";
// import streamReducer from "./module/streamReducers.jsx";
import { reducer as formReducer } from "redux-form";
import data from "./module/streamReducers.jsx";

export default combineReducers({
    data,
    auth: authReducer,
    form: formReducer,
});