/* eslint-disable no-use-before-define */
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Login from './pages/Login'
import Assessment from './pages/Assessment'
import Summaries from './pages/Summaries'
import Configuration from './pages/Configuration'
import ReactTest from './pages/ReactTest'

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/assessment" component={Assessment}></Route>
      <Route path="/summaries" component={Summaries} />
      <Route path="/configuration" component={Configuration} />
      <Route path="/react" component={ReactTest} />
    </Switch>
  )
}

export default App
