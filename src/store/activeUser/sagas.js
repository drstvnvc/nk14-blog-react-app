import { takeLatest, call, put, select } from "redux-saga/effects";
import { login, logout, setActiveUser, setToken } from "./slice";
import { selectActiveUser } from "./selectors";
import authService from "../../services/AuthService";
import { getActiveUser } from ".";

// saga worker
function* loginHandler(action) {
  try {
  // const user = await authService.login(action.payload);
  const { token, user } = yield call(authService.login, action.payload);

  // setuj usera na state store.dispatch({ type: 'set-user', payload: user})
  yield put(setActiveUser(user));
  yield put(setToken(token));

  // activeUser = yield select(selectActiveUser); // using selectors in saga
  } catch (error) {
    yield put(setLoginError(true))
  }
}

// saga worker
function* logoutHandler(action) {

  yield call(authService.logout);

  yield put(setToken(null));
  yield put(setActiveUser(null));
}

function* getActiveUserHandler() {
  const activeUser = yield call(authService.getActiveUser);

  yield put(setActiveUser(activeUser));
}

export function* watchLogin() {
  yield takeLatest(login.type, loginHandler);
}

export function* watchLogout() {
  yield takeLatest(logout.type, logoutHandler);
}

export function* watchGetActiveUser() {
  yield takeLatest(getActiveUser.type, getActiveUserHandler);
}
