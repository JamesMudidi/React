import React, { Component } from 'react';
// import Routes from 'pages/Route';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from 'pages/Landing';
import PageNotFound from 'pages/Error';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    );
  }
}
export default App;
