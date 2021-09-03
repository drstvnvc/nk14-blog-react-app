import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';
import GuestRoute from './components/shared/GuestRoute';
import PrivateRoute from './components/shared/PrivateRoute';
import AddPost from './pages/AddPost';
import AppPosts from './pages/AppPosts';
import Login from './pages/Login';
import SinglePost from './pages/SinglePost';
import AuthService from './services/AuthService';

function App() {
  const isAuthenticated = !!localStorage.getItem('token');

  async function handleLogout() {
    await AuthService.logout();
  }

  return (
    <div className='App'>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to='/posts'>Posts</Link>
            </li>
            {isAuthenticated && (
              <li>
                <Link to='/add'>Add</Link>
              </li>
            )}
            {!isAuthenticated && (
              <li>
                <Link to='/login'>Login</Link>
              </li>
            )}
            {isAuthenticated && (
              <li>
                <button onClick={handleLogout}>Logout</button>
              </li>
            )}
          </ul>
        </nav>
        <Switch>
          <Route exact path='/posts'>
            <AppPosts />
          </Route>
          <Route exact path='/posts/:id'>
            <SinglePost />
          </Route>
          <PrivateRoute exact path='/add'>
            <AddPost />
          </PrivateRoute>
          <Route exact path='/edit/:id'>
            <AddPost />
          </Route>
          <GuestRoute exact path='/login'>
            <Login />
          </GuestRoute>

          <Route exact path='/'>
            <Redirect to='/posts' />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
