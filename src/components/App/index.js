import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import ScrollFix from '../../components/ScrollFix';
import HomePage from '../../components/HomePage';
import Header from '../../components/Header';

class App extends Component {
  render() {
    return (
      <ScrollFix location={window.location.href}>
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
        </Switch>
      </ScrollFix>
    );
  }
}

export default App;
