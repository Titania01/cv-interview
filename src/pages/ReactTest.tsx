/* eslint-disable no-use-before-define */
import React from 'react'
import DashboardLayout from '../components/DashboardLayout'

const ReactTest = () => {
  return (
    <DashboardLayout>
      <div className="overflow-x-hidden">
        <div className="flex">
          <img src="/images/left-arrow.svg" alt="" />
          <p className="ml-[1.166875rem] text-xl font-medium">React</p>
        </div>

        <div className="ml-[20.3125rem]">
          <div className="mt-[1.625rem]">
            <p>Enter Candidate’s details</p>
            <input type="text" placeholder="Enter candidate name" className="mt-[1.625rem]" /> <br />
            <input type="text" placeholder="Role" />
          </div>

          <div className="mt-[7.5rem]">
            <div>
              <div>
                <p>React Foundations</p>

                <p>5/10</p>
                <img src="" alt="" />
              </div>
              <p className="pt-[3.5rem]">1. Differentiate between Real DOM and Virtual DOM.</p>
              <input type="text" placeholder="Candidate is not sure of the answer" />
              <br />
              <input type="text" placeholder="Score" />
            </div>

            <div>
              <p className="pt-[3rem]">2. What do you understand by Virtual DOM? Explain its working.</p>
              <input type="text" placeholder="Candidate is not sure of the answer" />
              <br />
              <input type="text" placeholder="Score" />
            </div>

            <div>
              <p className="pt-[3rem]">3. What is a state in React and how is it used?</p>
              <input type="text" placeholder="Candidate is not sure of the answer" />
              <br />
              <input type="text" placeholder="Score" />
            </div>

            <div className="pt-[3.5rem]">
              <p>4. Explain the lifecycle methods of React components in detail.</p>
              <input type="text" placeholder="Candidate is not sure of the answer" />
              <br />
              <input type="text" placeholder="Score" />
            </div>

            <div className="flex pt-[8.5rem]">
              <p className="flex-grow text-xl font-medium">Algorithms</p>
              <div className="flex mr-[19.25rem]">
                <p className="mr-[2.25rem]">5/10</p>
                <img src="/images/down-arrow.svg" alt="" />
              </div>
            </div>

            <div className="flex mt-[5.5rem]">
              <p className="flex-grow text-xl font-medium">Second Title</p>
              <div className="flex mr-[19.25rem]">
                <p className="mr-[2.25rem]">5/10</p>
                <img src="/images/down-arrow.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center ml-[30.8375rem] mt-[7.5rem] bg-[#3359df] w-[18.5rem] h-[4rem] rounded-[2.5rem] text-white justify-center mb-[12.4375rem]">
          <button>Conclude Interview</button>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default ReactTest