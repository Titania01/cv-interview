/* eslint-disable no-use-before-define */
import React, { ReactElement } from 'react'
import Sidenav from './Sidenav'

const DashboardLayout = ({ children, title }: { children: ReactElement; title: String }) => {
  return (
    <div className="grid w-screen h-screen grid-cols-12">
      <div className="col-span-2">
        <Sidenav />
      </div>
      <div className="col-span-10">
        <div className="pt-6 ml-[3.5rem] mr-[3.6875rem]">
          <div className="flex justify-between border-b-2 pb-[1.75rem]">
            <p className="text-xl font-bold">{title}</p>
            <div className="flex items-center justify-between w-[24.115]">
              <img src="/images/search.svg" alt="" className="pr-[3.6775rem]" />
              <img src="/images/bell.svg" alt="" className="pr-[4.2188rem]" />
              <span className="flex items-center border-l-2 pl-[1.5rem]">
                <img src="/images/image.svg" alt="" />
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
