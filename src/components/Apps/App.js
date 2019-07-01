import React, { Component } from 'react';
// import Routes from 'pages/Route';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from 'pages/Landing';
import PageNotFound from 'pages/Error';
import Login from 'components/Login';
import Register from 'components/Register';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Register} />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    );
  }
}
export default App;
