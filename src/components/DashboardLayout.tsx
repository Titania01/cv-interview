/* eslint-disable no-use-before-define */
import React, { ReactElement } from 'react'
import Sidenav from './Sidenav'

const DashboardLayout = ({ children }: { children: ReactElement }) => {
  return (
    <div className="grid w-screen h-screen grid-cols-12">
      <div className="col-span-2">
        <Sidenav />
      </div>
      <div className="col-span-10">
        <div className="pt-6 ml-[3.5rem] mr-[3.6875rem]">
          <div className="flex justify-between pb-[1.75rem]">
            {/* <p className="text-xl font-bold">{title}</p> */}
            <div className="flex items-center ml-[58.5rem] w-[24.115]">
              <img src="/public/images/search.svg" alt="" className="pr-[3.6775rem]" />
              <img src="/public/images/bell.svg" alt="" className="pr-[4.2188rem]" />
              <span className="flex items-center border-l-2 pl-[1.5rem]">
                <img src="/public/images/image.svg" alt="" />
                <p className="pl-[1rem]">Nicole</p>
              </span>
            </div>
          </div>
          <div>{children}</div>
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout
