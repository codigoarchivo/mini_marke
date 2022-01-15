import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { categoriaReducer } from "./categoriaReducer";
import { productoReducer } from "./productoReducer";
import { uiReducer } from "./uiReducer";

export const rootReducer = combineReducers({
  auth: authReducer,
  category: categoriaReducer,
  product: productoReducer,
  ui: uiReducer,
});
