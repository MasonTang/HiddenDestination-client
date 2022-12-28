import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import HomePage from './HomePage'
import Login from './Login'
import Register from './Register'
import Country from './Country'
import Destination from './Destination'
import Blog from './Blog'
import CreateBlog from './CreateBlog'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path ="/" component={HomePage} />
          <Route exact path ="/createblog" component={CreateBlog} />
          <Route exact path ="/login" component={Login} />
          <Route exact path ="/register" component={Register} />
          <Route exact path ="/destination" component={Destination} />
          <Route path ="/country/:continent/:country" component={Country} />
          <Route path ="/blog/:region/:country/:city" component={Blog} />
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
