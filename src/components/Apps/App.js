import React, { Component } from 'react';
// import Routes from 'pages/Route';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from 'pages/Landing';
import PageNotFound from 'pages/Error';
import Login from 'components/Login';
import Register from 'components/Register';
import Incident from 'components/Incident/';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {
  render() {
    return (
      <Router>
        <ToastContainer />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Register} />
          <Route path="/incident" component={Incident} />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    );
  }
}
export default App;
