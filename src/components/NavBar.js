import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectCounter } from "../store/counter/selectors";

export default function NavBar({ isAuthenticated, handleLogout }) {
  const counter = useSelector(selectCounter);

  return (
    <nav>
      <ul>
        <li>Counter: {counter}</li>
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
