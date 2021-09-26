/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
import React, { ReactElement } from 'react'
import { Route } from 'react-router-dom'
// import Assessment from '.'
import DashboardLayout from '../components/DashboardLayout'
import ReactTest from './ReactTest'

const AssessmentLayout = ({ match }: { match: any }) => {
  return (
    <DashboardLayout>
      <div>
        <Route exact path={match.path} component={Assessment} />
        {/* <Route exact path={`${match.path}/react`} component={ReactTest} /> */}
      </div>
    </DashboardLayout>
  )
}

export default AssessmentLayout
