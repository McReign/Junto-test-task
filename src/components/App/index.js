import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import ScrollFix from '../../components/ScrollFix';
import HomePage from '../../components/HomePage';

class App extends Component {
  render() {
    return (
      <ScrollFix location={window.location.href}>
        <Switch>
          <Route exact path='/' component={HomePage}/>
        </Switch>
      </ScrollFix>
    );
  }
}

export default App;
