import React from "react";
import { Redirect, Route } from "react-router";

export default function GuestRoute({ children, ...props }) {
  const token = localStorage.getItem("token");
  const isGuest = !token;

  return (
    <Route {...props}>
      {isGuest ? children : <Redirect to="/posts" />}
    </Route>
  );
}
