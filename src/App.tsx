import React from 'react'
import { Switch, Route } from "react-router-dom";
import Login from './pages/Login';

const App = () => {
  return (
      <Switch>
        <Route exact path='/' component={Login} />
        <Route></Route>
        
      </Switch>
  );
};

export default App;
