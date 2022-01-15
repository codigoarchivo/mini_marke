import { types } from "../types";

const initialState = {
  list: [],
  activeSelect: null,
  activelist: [],
};
export const productoReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.productoList:
      return {
        ...state,
        list: action.payload,
      };
    case types.SelectClear:
      return {
        ...state,
        activeSelect: null,
      };
    case types.productoSearch:
      return {
        ...state,
        list: action.payload,
      };
    case types.proByCat:
      return {
        ...state,
        activelist: action.payload,
      };
    case types.productoAdd:
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
      };
    case types.SelectDelete:
      return {
        ...state,
        list: state.list.filter((e) => e._id !== state.activeSelect._id),
      };

    default:
      return state;
  }
};
