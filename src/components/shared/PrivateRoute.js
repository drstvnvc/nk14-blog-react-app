import React from "react";
import { Redirect, Route } from "react-router";

export default function PrivateRoute({ children, ...props }) {
  const token = localStorage.getItem("token");
  console.log('Private route::token', token)
  const isAuthenticated = !!token;

  return (
    <Route {...props}>
      {isAuthenticated ? children : <Redirect to="/login" />}
    </Route>
  );
  //   if (token) {
  //     return <Route {...props}>{children}</Route>;
  //   } else {
  //     return (
  //       <Route {...props}>
  //         <Redirect to="/login"></Redirect>
  //       </Route>
  //     );
  //   }
}
