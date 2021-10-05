/* eslint-disable no-use-before-define */
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Login from './pages/Login'
import Assessment from './pages/Assessment'
import Summaries from './pages/Summaries'
import Configuration from './pages/Configuration'
import InterviewType from './pages/InterviewType'
import ReactTest from './pages/ReactTest'
import FirstInterview from './pages/FirstInterview'
import Summarytwo from './pages/Summarytwo'

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/assessment" component={Assessment} />
      <Route path="/react" component={ReactTest} />
      <Route path="/first" component={FirstInterview} />
      <Route path="/summaries" component={Summaries} />
      <Route path="/summarytwo" component={Summarytwo} />
      <Route path="/configuration" component={Configuration} />
      <Route path="/interview" component={InterviewType} />
    </Switch>
  )
}

export default App
