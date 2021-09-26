/* eslint-disable no-use-before-define */
import React from 'react'
import './Assessment.css'
import DashboardLayout from '../components/DashboardLayout'

const Assessment = () => {
  return (
    <DashboardLayout>
      <div className="pl-[5.75rem]">
        <p>Please select interview type</p>

        <div className="flex items-center">
          <div className="flex items-center justify-around mt-[3rem] assess-box">
            <div>
              <p className="pb-[0.75rem]">React</p>
              <p className="text-sm font-light text-[#676767]">4 sections - 23 questions</p>
            </div>
            <img src="/images/arrow.svg" alt="" />
          </div>

          <div className="ml-[3rem]">
            <div className="flex items-center justify-around mt-[3rem] assess-box">
              <div>
                <p className="pb-[0.75rem]">vue</p>
                <p className="text-sm font-light text-[#676767]">4 sections - 23 questions</p>
              </div>
              <img src="/images/arrow.svg" alt="" />
            </div>
          </div>

          <div className="ml-[3rem]">
            <div className="flex items-center justify-around mt-[3rem] assess-box">
              <div>
                <p className="pb-[0.75rem]">NodeJS</p>
                <p className="text-sm font-light text-[#676767]">4 sections - 23 questions</p>
              </div>
              <img src="/images/arrow.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default Assessment
