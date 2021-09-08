import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Provider } from "react-redux";
import GuestRoute from "./components/shared/GuestRoute";
import PrivateRoute from "./components/shared/PrivateRoute";
import AddPost from "./pages/AddPost";
import AppPosts from "./pages/AppPosts";
import Login from "./pages/Login";
import SinglePost from "./pages/SinglePost";
import store from "./store";
import NavBar from "./components/NavBar";
import { getActiveUser } from "./store/activeUser";

function App() {
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setTimeout(() => {
        store.dispatch(getActiveUser());
      }, 2000);
    }
  }, []);

  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/posts">
              <AppPosts />
            </Route>
            <Route exact path="/posts/:id">
              <SinglePost />
            </Route>
            <PrivateRoute exact path="/add">
              <AddPost />
            </PrivateRoute>
            <Route exact path="/edit/:id">
              <AddPost />
            </Route>
            <GuestRoute exact path="/login">
              <Login />
            </GuestRoute>

            <Route exact path="/">
              <Redirect to="/posts" />
            </Route>
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
