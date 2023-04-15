import { createStore } from "redux";
import combineReducers from "./combineReducers";

const redux_dev_tools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();


const store = createStore(combineReducers, redux_dev_tools);

export default store;