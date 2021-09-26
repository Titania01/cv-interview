/* eslint-disable no-use-before-define */
import React from 'react'
import DashboardLayout from '../components/DashboardLayout'
import './Summaries.css'

const Summaries = () => {
  return (
    <DashboardLayout>
      <div>
        <p className="text-xl font-medium">Summaries</p>
        <table>
          <tr className="table-head">
            <th>Name</th>
            <th>Role</th>
            <th>Interview type</th>
            <th>Score</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
          {Array(13)
            .fill('')
            .map((item, itemIndex) => (
              <tr key={`summary-table-data-index${itemIndex}`}>
                <td>Aboyeji Tolulope</td>
                <td>React Developer</td>
                <td>React</td>
                <td>5/10</td>
                <td>Approved</td>
                <td>12:45pm, 23rd Monday, June 2021</td>
              </tr>
            ))}
        </table>
      </div>
    </DashboardLayout>
  )
}

export default Summaries
