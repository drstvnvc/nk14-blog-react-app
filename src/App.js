import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import AppPosts from './pages/AppPosts';

function App() {
  return (
    <div className='App'>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to='/posts'>Posts</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path='/posts'>
            <AppPosts />
          </Route>
          <Route exact path='/'>
            <AppPosts />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
