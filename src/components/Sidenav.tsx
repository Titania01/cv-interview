/* eslint-disable no-use-before-define */
/* eslint-disable react/jsx-key */
import React from 'react'
import { NavLink } from 'react-router-dom'

import AssessmentIcon from './vectors/AssessmentIcon'
import GraphIcon from './vectors/GraphIcon'
import SettingsIcon from './vectors/SettingsIcon'

const Sidenav = () => {
  const navItems = [
    {
      name: 'Assessment',
      icon: AssessmentIcon,
      path: '/assessment',
    },
    {
      name: 'Summaries',
      icon: GraphIcon,
      path: '/summaries',
    },
    {
      name: 'Configuration',
      icon: SettingsIcon,
      path: '/configuration',
    },
  ]
  return (
    <div className="border-r-2 sidenav">
      <p className="text-[#093D5E] text-center pt-[2rem] font-bold text-2xl pb-[6.66rem]">Logo</p>
      <div className="flex flex-col">
        {navItems.map((nav, navIndex) => (
          <NavLink to={`${nav.path}`} className="flex items-center pt-[2.8125rem] pl-[3.3125rem]">
            <nav.icon />
            <span className="pl-[1.2rem]">{nav.name}</span>
          </NavLink>
        ))}
      </div>
    </div>
  )
}

export default Sidenav
