import { combineReducers } from "redux";
import { authReducer } from "./reducer/auth-reducer";


export const rootReducer = combineReducers ({
  auth: authReducer
})