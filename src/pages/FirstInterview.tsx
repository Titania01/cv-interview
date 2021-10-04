import React from 'react'
import { useHistory } from 'react-router-dom'
import DashboardLayout from '../components/DashboardLayout'
import './FirstInterview.css'

const FirstInterview = () => {
  const history = useHistory()
  return (
    <DashboardLayout>
      <div className="space-y-10">
        <div className="flex" onClick={() => history.push('/configuration')}>
          <img src="/images/left-arrow.svg" alt="" />
          <p className="ml-[1.166875rem] text-xl font-medium">Create New Interview</p>
        </div>

        <div className="space-y-10 ml-[4.1875rem] opacity-[0.4]" onClick={() => history.push('/interview')}>
          <p className="w-[66.9375rem] basi text-2xl">Enter Interview Name</p>

          <div className="basic">
            <p className="w-[35.9375rem] basi text-2xl">Enter Section Title</p>
            <div className="flex items-center">
              <p className="basi w-[19.625rem] ml-[3rem] text-2xl">Enter Score</p>
              <div className="flex items-center justify-center small ml-[3rem]">
                <img src="/images/plus1.svg" alt="" />
              </div>
            </div>
          </div>
          <p className="w-[59rem] basi">Question 1</p>
          <div className="flex items-center pb-[8rem]">
            <p className="w-[59rem] basi">Question 2</p>
            <span className="flex items-center justify-center small2 ml-[3rem]">
              <img src="/images/plus1.svg" alt="" />
              <img src="/images/delete.svg" alt="" className="pl-8" />
            </span>
          </div>
          <div className="bg-[#335df9] h-[4rem] w-[18.5rem] flex items-center justify-center text-white rounded-[2.5rem] font-bold ml-[25rem]">
            <button>Save</button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default FirstInterview
