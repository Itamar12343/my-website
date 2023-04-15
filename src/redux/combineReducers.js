import { combineReducers } from "redux";
import tray from "./reducers/try";
import hh from "./reducers/hh";

const reducers = combineReducers({ tray, hh });

export default reducers;