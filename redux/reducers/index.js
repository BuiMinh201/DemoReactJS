import { combineReducers } from "redux";
import up from "./up";
import down from "./down";
export default combineReducers({
    upReducer: up,
    downReducer: down,
});