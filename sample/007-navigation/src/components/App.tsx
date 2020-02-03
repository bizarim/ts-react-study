import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Header from './Header';
import Posts from './Posts';
import Login from './Login';
import MyPage from './MyPage';
import Search from './Search';
import NoMatch from './NoMatch';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <div>
          <Switch>
            <Route exact={true} path='/' component={Home} />
            <Route path='/about/:userName' component={About} />
            <Route path='/posts' component={Posts} />
            <Route path='/login' component={Login} />
            <Route path='/me' component={MyPage} />
            <Route path='/search' component={Search} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
