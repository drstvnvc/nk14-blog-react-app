import React, { useState } from "react";
import AuthService from "../services/AuthService";

export default function Login() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  async function handleSubmit(evt) {
    evt.preventDefault();
    console.log("submit login", credentials);
    const user = await AuthService.login(credentials);
    console.log("logged in as", user);
  }

  return (
    <div>
      <h2>Login</h2>
      <form
        style={{ display: "flex", flexDirection: "column", width: 300 }}
        onSubmit={handleSubmit}
      >
        <input
          required
          type="email"
          placeholder="Email"
          value={credentials.email}
          onChange={({ target }) =>
            setCredentials({ ...credentials, email: target.value })
          }
        />
        <input
          required
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
