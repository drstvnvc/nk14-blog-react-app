import { LOGIN, LOGOUT } from "./actionTypes";

const activeUserInitialState = null;

function activeUserReducer(state = activeUserInitialState, action) {
  console.log('active user reducer', state, action)
  switch (action.type) {
    case LOGIN:
      return action.payload;
    case LOGOUT:
      return null;

    case "set-user":
      return action.payload;
    default:
      return state;
  }
}

export default activeUserReducer;
