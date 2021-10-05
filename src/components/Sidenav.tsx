/* eslint-disable no-use-before-define */
/* eslint-disable react/jsx-key */
import React from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import './Sidenav.css'
import AssessmentIcon from './vectors/AssessmentIcon'
import GraphIcon from './vectors/GraphIcon'
import SettingsIcon from './vectors/SettingsIcon'

const Sidenav = () => {
  const history = useHistory()
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
    <div className="sidenav">
      <div className="pl-[8.5rem] pt-[1.4375rem] ">
        <img src="/images/logo.svg" alt="" />
      </div>
      <div className="flex flex-col Nave pt-[3.5rem] mt-[1.375rem] ml-[1.9375rem]">
        {navItems.map((nav, navIndex) => (
          <NavLink
            to={`${nav.path}`}
            className={`link flex py-[1.4125rem] rounded-lg mx-[1.525rem] pl-[3.405rem] ${
              history.location.pathname === nav.path ? 'active' : ''
            }`}
          >
            <nav.icon />
            <span className="pl-[1.2rem]">{nav.name}</span>
          </NavLink>
        ))}
      </div>
    </div>
  )
}

export default Sidenav
