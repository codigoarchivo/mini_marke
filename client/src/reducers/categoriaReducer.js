import { types } from "../types";

const initialState = {
  list: [],
  activeSelect: null,
};
export const categoriaReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.categoriaList:
      return {
        ...state,
        list: action.payload,
      };
    case types.SelectClear:
      return {
        ...state,
        activeSelect: null,
      };
    case types.categoriaSearch:
      return {
        ...state,
        list: action.payload,
      };
    case types.categoriaAdd:
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    case types.SelectActive:
      return {
        ...state,
        activeSelect: action.payload,
      };
    case types.SelectUpdate:
      return {
        ...state,
        list: state.list.map((e) =>
          e._id === action.payload._id ? (e = action.payload) : e
        ),
        activeSelect: null,
      };
    case types.SelectDelete:
      return {
        ...state,
        list: [
          ...state.list.splice(0, action.payload),
          ...state.list.splice(1),
        ],
        activeSelect: null,
      };

    default:
      return state;
  }
};
