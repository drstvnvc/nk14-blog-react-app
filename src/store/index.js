import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import activeUserReducer from "./activeUser/slice";
import sagas from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    activeUser: activeUserReducer,
  },
  middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleware],
});

for (let saga in sagas) {
  sagaMiddleware.run(sagas[saga]);
}

export default store;

// function configureStore(options) {
//   const rootReducer = combineReducers(options.reducer);
//   const store = createStore(rootReducer);
//   return store;
// }
