import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  logout,
  selectActiveUser,
  selectIsAuthenticated,
} from "../store/activeUser";

export default function NavBar() {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const activeUser = useSelector(selectActiveUser);

  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(logout());
  }

  return (
    <nav>
      <ul>
        <li>
          <h1>Active user: {activeUser && activeUser.name}</h1>
        </li>
        <li>
          <Link to="/posts">Posts</Link>
        </li>
        {isAuthenticated && (
          <li>
            <Link to="/add">Add</Link>
          </li>
        )}
        {!isAuthenticated && (
          <li>
            <Link to="/login">Login</Link>
          </li>
        )}
        {isAuthenticated && (
          <li>
            <button onClick={handleLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
}
