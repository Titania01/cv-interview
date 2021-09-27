/* eslint-disable no-use-before-define */
import React from 'react'
import DashboardLayout from '../components/DashboardLayout'
import './Summaries.css'
import TableWidget from './../components/TableWidget'
const Summaries = () => {
  return (
    <DashboardLayout>
      <div>
        <TableWidget />
        <div className="flex justify-between pt-[3.25rem] pb-[4.25rem] text-[0.875rem] items-center text-[#676767]">
          <p>Showing 10 of 320</p>
          <div className="flex justify-between">
            <img src="/images/arr-left.svg" className="pr-[1.5rem]" alt="" />
            <p className="pr-[1.5rem]">Prev</p>
            <img src="/images/one.svg" className="pr-[1.5rem]" alt="" />
            <p className="pr-[1.5rem]">2</p>
            <p className="pr-[1.5rem]">3</p>
            <p className="pr-[1.5rem]">Next</p>
            <img src="/images/arr-right.svg" alt="" />
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default Summaries
