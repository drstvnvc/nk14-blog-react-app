import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";
import { selectIsAuthenticated } from "../../store/activeUser/selectors";

export default function PrivateRoute({ children, ...props }) {
  const isAuthenticated = useSelector(selectIsAuthenticated);

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
