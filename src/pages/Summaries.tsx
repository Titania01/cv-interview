/* eslint-disable no-use-before-define */
import React, { useState } from 'react'
import DashboardLayout from '../components/DashboardLayout'
import './Summaries.css'
import TableWidget from './../components/TableWidget'
import Checkbox from '../components/vectors/Checkbox'
import Summary from './Summary'

const Summaries = () => {
  const [activetab, setactiveTab] = useState()
  const handleClick = (id: any) => {
    setactiveTab(id)
    console.log(activetab)
  }
  return (
    <DashboardLayout>
      <div className="relative">
        <TableWidget
          tableData={Array(13).fill({
            icon: (
              <span className="flex items-center justify-center ">
                <Checkbox />
              </span>
            ),
            candidateName: 'Aboyeji Tolulope',
            role: 'React Developer',
            interviewType: 'React',
            score: <span className="text-[#3359df]">5/10</span>,
            status: <span className="text-[#27ae60]">Approved</span>,
            date: '12:45PM, 23rd Monday, June 2021',
            })}
          rowClickAction={handleClick}
        />
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
        {activetab && (
          <div className="absolute inset-0 z-10 bg-white">
            <Summary setIsOpen={setactiveTab} />
          </div>
        )}
      </div>
    </DashboardLayout>
  )
}

export default Summaries
