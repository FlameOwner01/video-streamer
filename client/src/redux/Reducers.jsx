import { combineReducers } from "redux";
import authReducer from "../redux/module/Authorization.jsx";

export default combineReducers({
    auth: authReducer,
});