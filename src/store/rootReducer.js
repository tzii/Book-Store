import { combineReducers } from "redux";
import booksReducer from "./booksSlice";

const rootReducer = combineReducers({ books: booksReducer });
export default rootReducer;
