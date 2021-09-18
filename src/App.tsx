/* eslint-disable no-use-before-define */
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Login from './pages/Login'
import Assessment from './pages/Assessment'
import Configuration from './pages/Configuration'

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/assessment" component={Assessment}></Route>
      <Route path="/configuration" component={Configuration}></Route>
    </Switch>
  )
}

export default App
