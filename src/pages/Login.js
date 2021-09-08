import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectActiveUser, login } from "../store/activeUser";

export default function Login() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const activeUser = useSelector(selectActiveUser);

  const dispatch = useDispatch();

  async function handleSubmit(evt) {
    evt.preventDefault();

    dispatch(
      login({
        email: "Brankjmkjdo18@gmail.com",
        password: "asdfasdf",
      })
    );
  }

  return (
    <div>
      <h2>Login</h2>
      {activeUser ? <h3>{activeUser.name}</h3> : <h3>GUEST</h3>}
      <form
        style={{ display: "flex", flexDirection: "column", width: 300 }}
        onSubmit={handleSubmit}
      >
        <input
          // required
          type="email"
          placeholder="Email"
          value={credentials.email}
          onChange={({ target }) =>
            setCredentials({ ...credentials, email: target.value })
          }
        />
        <input
          // required
          type="password"
          placeholder="Password"
          value={credentials.password}
          onChange={({ target }) =>
            setCredentials({ ...credentials, password: target.value })
          }
        />

        <button>Login</button>
      </form>
    </div>
  );
}
