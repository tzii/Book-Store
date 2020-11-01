import { combineReducers } from "redux";
import booksReducer from "./booksSlice";
import userReducer from "./userSlice";

const rootReducer = combineReducers({ books: booksReducer, user: userReducer });
export default rootReducer;
