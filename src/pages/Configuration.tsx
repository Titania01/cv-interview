/* eslint-disable no-use-before-define */
import React from 'react'
import { useHistory } from 'react-router-dom'
import DashboardLayout from '../components/DashboardLayout'
import './Configuration.css'

const Configuration = () => {
  const history = useHistory()

  return (
    <DashboardLayout>
      <div className="pl-[5.75rem]">
        <div className="flex items-center interview">
          <p className="text-xl font-medium">Interview Types</p>
          <div className="ml-[1rem] bg-[#f1f9fe] w-[2.265rem] h-[2.1875rem] flex items-center justify-center rounded-full">
            <p className="text-[#3359df] font-bold">5</p>
          </div>
        </div>
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
                <p className="pb-[0.75rem]">vueJS</p>
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

        <div className="" onClick={() => history.push('/interview')}>
          <div className="flex items-center mt-[3rem] config-box">
            <div className="pl-[2.75rem]">
              <p className="font-medium">Add Interview Type</p>
            </div>
            <div className="ml-[1.6875rem] bg-[#3367df] w-[2.265rem] h-[2.1875rem] flex items-center justify-center rounded-full">
              <img src="/images/plus.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default Configuration
