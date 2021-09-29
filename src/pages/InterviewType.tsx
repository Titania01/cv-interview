import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import DashboardLayout from '../components/DashboardLayout'
import './InterviewType.css'

const InterviewType = () => {
  const [openTab, setOpenTab] = useState(0)
  const history = useHistory()
  return (
    <DashboardLayout>
      <div className="space-y-10">
        <div className="flex" onClick={() => history.push('/configuration')}>
          <img src="/images/left-arrow.svg" alt="" />
          <p className="ml-[1.166875rem] text-xl font-medium">Create New Interview</p>
        </div>

        <div className="space-y-10 ml-[4.1875rem]">
          <p className="w-[66.9375rem] basi">MongoDB</p>

          <div className="basic">
            <p className="w-[35.9375rem] basi">Basics</p>
            <div className="flex items-center">
              <p className="basi w-[19.625rem] ml-[3rem]">10</p>
              <div className="flex items-center justify-center small ml-[3rem]">
                <img src="/images/plus1.svg" alt="" />
              </div>
            </div>
          </div>
          <p className="w-[59rem] basi">How does Scale-Out occur in MongoDB?</p>
          <div className="flex items-center">
            <p className="w-[59rem] basi">How does Scale-Out occur in MongoDB?</p>
            <span className="flex items-center justify-center small2 ml-[3rem]">
              <img src="/images/plus1.svg" alt="" />
              <img src="/images/delete.svg" alt="" className="pl-8" />
            </span>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default InterviewType
