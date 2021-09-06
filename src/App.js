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
import AuthService from "./services/AuthService";

import store from "./store";
import NavBar from "./components/NavBar";

function App() {
  const isAuthenticated = !!localStorage.getItem("token");

  async function handleLogout() {
    await AuthService.logout();
  }

  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <NavBar
            isAuthenticated={isAuthenticated}
            handleLogout={handleLogout}
          />
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
