import { createStore, combineReducers, applyMiddleware, compose} from "redux";
import { listReducer } from "./List/reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  list: listReducer,
});

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
  
);