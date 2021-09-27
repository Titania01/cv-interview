/* eslint-disable no-use-before-define */
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Login from './pages/Login'
import Assessment from './pages/Assessment'
import Summaries from './pages/Summaries'
import Configuration from './pages/Configuration'
import ReactTest from './pages/ReactTest'
import ReactSecond from './pages/ReactSecond'
import ReactThird from './pages/ReactThird'
import Summary from './pages/Summary'

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/assessment" component={Assessment}></Route>
      <Route path="/react" component={ReactTest} />
      <Route path="/vue" component={ReactSecond} />
      <Route path="/node" component={ReactThird} />
      <Route path="/summaries" component={Summaries} />
      <Route path="/summary" component={Summary} />
      <Route path="/configuration" component={Configuration} />
    </Switch>
  )
}

export default App
