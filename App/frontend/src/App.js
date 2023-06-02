import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignIn from './pages/SignIn';
import GameSelect from './pages/Game/GameSelect';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/SignIn" component={SignIn} />
        <Route path="/Game/GameSelect" component={GameSelect} />
      </Switch>
    </Router>
  );
};

export default App;