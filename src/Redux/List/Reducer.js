import {
  GET_LIST,
  GET_LIST_LOADING,
  GET_LIST_ERROR,
  GET_PAGE,
} from "./action";

const initialState = {
  list: [],
  loading: false,
  error: false,
  page: 0,
};

export const listReducer = (store = initialState, { type, payload }) => {
  switch (type) {
    case GET_LIST:
      return { ...store,list: [...store.list,...payload], loading: false, error: false};
    case GET_LIST_LOADING:
      return {
        ...store,
        loading: true,
        error: false,
      };
    case GET_LIST_ERROR:
      return {
        ...store,
        loading: false,
        error: true,
      };
      case GET_PAGE:
          return{
            ...store,page:payload,
          }
    default:
      return store;
  }
};
