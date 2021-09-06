import { createStore, combineReducers } from "redux";

import counterReducer from "./counter/reducer";
import activeUserReducer from "./activeUser/reducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  activeUser: activeUserReducer,
});

const store = createStore(rootReducer);

console.log("inicijalno stanje je:", store.getState());

export default store;
