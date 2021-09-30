import React from 'react'

const Login = () => {
  return (
    <div className="login">
      <form className="border">
        <div className="ml-[4rem]">
          <p className="mt-20">Email</p>
          <input type="text" className="first-input" placeholder="placeholder" />
        </div>

        <div className="ml-[4rem]">
          <p className="mt-5">Password</p>
          <div className="flex items-center first-input">
            <input type="text" placeholder="placeholder" />
            <span className="eye">
              <img src="/images/eye.svg" alt="" />
            </span>
          </div>
        </div>

        <div className="flex items-center cursor-pointer justify-center mt-14 ml-16 bg-blue-600 text-white font-bold w-[18.5rem] rounded-[2.5rem] h-[4rem]">
          <button>Login</button>
        </div>
      </form>
    </div>
  )
}

export default Login
