import { LOGIN, LOGOUT } from "./actionTypes";

// logout = { type: 'logout' }
export function logout() {
  return {
    type: LOGOUT,
  };
}

export function login(email, password) {
  return {
    type: LOGIN,
    payload: {
      email: email,
      password: password,
    },
  };
}

// u komponenti
// const dispatch = useDispatch();
// dispatch({
//     type: 'login',
//     payload: {
//         email: 'asdf@asdf.com',
//         password: 'asdfasdf',
//     }
// })
// dispatch(login('asdf@asdf.com', 'asdfasdf'))
