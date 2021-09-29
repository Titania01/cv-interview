/* eslint-disable no-use-before-define */
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Login from './pages/Login'
import Assessment from './pages/Assessment'
import ReactTest from './pages/ReactTest'
import Summaries from './pages/Summaries'
import Summary from './pages/Summary'
import Summarytwo from './pages/Summarytwo'
import Configuration from './pages/Configuration'
import InterviewType from './pages/InterviewType'

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/assessment" component={Assessment}></Route>
      <Route path="/react" component={ReactTest} />
      <Route path="/summaries" component={Summaries} />
      <Route path="/summary" component={Summary} />
      <Route path="/summarytwo" component={Summarytwo} />
      <Route path="/configuration" component={Configuration} />
      <Route path="/interview" component={InterviewType} />
    </Switch>
  )
}

export default App
