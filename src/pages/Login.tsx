/* eslint-disable no-use-before-define */
import React from 'react'
import Button from '../components/Button'
import './Login.css'

const Login = () => {
  return (
    <div className="h-screen login">
      <div className="border">
        <form action="">
          <p className="font-medium text-base text-[#2e2e2e] pb-[0.625rem] pt-[5.25rem]">Email</p>
          <input type="text" placeholder="placeholder" className="first-input" />

          <p className="font-medium text-base text-[#2e2e2e] pb-[0.625rem] pt-[1.5rem]  ">Password</p>
          <div className="flex items-center eye">
            <input className="flex-grow" type="text" placeholder="placeholder" />
            <img src="/images/eye.svg" alt="" />
          </div>
          <Button label="Login" />
        </form>
      </div>
    </div>
  )
}

export default Login
