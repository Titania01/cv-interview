/* eslint-disable no-use-before-define */
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import DashboardLayout from '../components/DashboardLayout'
import './ReactTest.css'

const ReactTest = () => {
  const [opentab, setOpenTab] = useState(0)
  const history = useHistory()
  return (
    <DashboardLayout>
      <div className="overflow-x-hidden">
        <div className="flex" onClick={() => history.push('/assessment')}>
          <img src="/images/left-arrow.svg" alt="" />
          <p className="ml-[1.166875rem] text-xl font-medium">React</p>
        </div>

        <div className="ml-[20.3125rem]">
          <div className="mt-[1.625rem]">
            <p className="text-xl font-medium">Enter Candidate’s details</p>
            <input type="text" placeholder="Enter candidate name" className="mt-[1.625rem]" /> <br />
            <input type="text" placeholder="Role" />
          </div>

          <div className="space-y-8 mt-28 ">
            <div className="flex justify-between" onClick={() => setOpenTab(0)}>
              <p className="text-xl font-medium">react</p>
              <div className="flex mr-[19.25rem]">
                <p className="mr-[2.25rem] text-[#3359df] font-medium text-xl">5/10</p>
                {opentab === 0 ? (
                  <img src="/images/down-arrow.svg" alt="" />
                ) : (
                  <img src="/images/arrow-up.svg" alt="" />
                )}
              </div>
            </div>
            {opentab === 0 && (
              <form>
                {' '}
                <div>
                  {' '}
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
                  <input type="text" placeholder="Score" />{' '}
                </div>
              </form>
            )}

            <div className="flex justify-between" onClick={() => setOpenTab(1)}>
              <p className="text-xl font-medium">algorithms</p>
              <div className="flex mr-[19.25rem]">
                <p className="mr-[2.25rem] text-[#3359df] font-medium text-xl">5/10</p>
                {opentab === 1 ? (
                  <img src="/images/down-arrow.svg" alt="" />
                ) : (
                  <img src="/images/arrow-up.svg" alt="" />
                )}
              </div>
            </div>
            {opentab === 1 && (
              <form>
                <div>
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
              </form>
            )}

            <div className="flex justify-between" onClick={() => setOpenTab(2)}>
              <p className="text-xl font-medium">title</p>
              <div className="flex mr-[19.25rem]">
                <p className="mr-[2.25rem] text-[#3359df] font-medium text-xl">5/10</p>
                {opentab === 2 ? (
                  <img src="/images/down-arrow.svg" alt="" />
                ) : (
                  <img src="/images/arrow-up.svg" alt="" />
                )}
              </div>
            </div>
            {opentab === 2 && (
              <form>
                <div>
                  {' '}
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
              </form>
            )}
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
