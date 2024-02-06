import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./root-reducer";
import thunk from "redux-thunk";

export const store = createStore(
  rootReducer, //reducer
  applyMiddleware(thunk)//async запрос
  )