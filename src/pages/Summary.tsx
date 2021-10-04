import React from 'react'
import './Summary.css'

const Summary = ({ setIsOpen = () => {} }: { setIsOpen: Function }) => {
  return (
    <div className="major">
      <div className="top">
        <div className="flex">
          <img src="/images/left-arrow.svg" alt="" onClick={() => setIsOpen()} />
          <p className="pl-[1.1669rem] font-medium text-xl">
            Summary for Ayodeji Tolulope - React developer - <span className="text-green-500">Accepted</span>{' '}
          </p>
        </div>
        <div className="top-side">
          <div className="flex mr-[2.825rem]">
            <p className="text-[#f2994a]">Edit</p>
            <img src="/images/edit.svg" alt="" className="pl-[0.625rem]" />
          </div>
          <div className="flex">
            <p className="text-[#3359df]">Copy</p>
            <img src="/images/copy.svg" alt="" className="pl-[0.625rem]" />
          </div>
        </div>
      </div>
      <div className="main">
        <p className="para pt-[2rem]">Summary</p>
        <ul className="list-disc list-inside">
          <li>Candidate has a basic understanding of Java and Spring.</li>
          <li>Candidate has experience developing payment platforms with Spring boot.</li>
          <li>
            Is familiar with TDD. Seems to be very knowledgeable about testing as he currently works as a Software
            Quality <br /> Assurance.
          </li>
          <li>
            I would recommend this candidate for a software testing role more than a backend engineer as he does not
            have <br /> impressive knowledge of spring framework but was very confident with questions around testing
            and databases.
          </li>
        </ul>

        <p className="para pt-[2rem]">Primary Stack Knowledge and frameworks</p>
        <ul className="list-disc list-inside">
          <li>Has basic understanding of Javaaaaaa</li>
          <li>Could answer some of the questions regarding OOP correctly but he was quite wrong on a few</li>
          <li>
            Is familiar with only the basics of spring boot. Could not answer <br /> questions about spring beans scope
            or application context.{' '}
          </li>
        </ul>

        <p className="para pt-[2rem]">HackerRank Test Review</p>
        <ul className="list-disc list-inside">
          <li>Passed but some plagiarism was detected. Will give on-screen to gauge.</li>
        </ul>

        <p className="para pt-[2rem]">Data Structures and Algorithms (2/5)</p>
        <ul>
          <li>Is not very familiar with how to calculate time complexity of algorithms.</li>
        </ul>

        <p className="para pt-[2rem]">Datastores (4/5)</p>
        <ul className="list-disc list-inside">
          <li>SQL databases, postgres, Oracle</li>
          <li>Mongodb for nosql experience</li>
          <li>Is familiar with ACID principle</li>
        </ul>

        <p className="para pt-[2rem]">APIs / SDKs (3/5) </p>
        <ul className="list-disc list-inside">
          <li>Could tell the difference between PUT and PATCH</li>
        </ul>

        <p className="para pt-[2rem]">Testing (4/5)</p>

        <ul className="list-disc list-inside">
          <li>Candidate is familiar with what unit testing is.</li>
          <li>Used SolarQ to test the percentage of testing in CI/CD pipeline. Quality test.</li>
          <li>Has used Junit for unit testing.</li>
          <li>Is familiar with Integration testing.</li>
          <li>Familiar with mockito.</li>
        </ul>

        <p className="para pt-[2rem]">Security (3/5)</p>
        <ul className="list-disc list-inside">
          <li>Uses spring jwt to ensure API security.</li>
          <li>Uses role based authorization to ensure more security</li>
        </ul>

        <p className="para pt-[2rem]">Architecture (2/5)</p>
        <ul className="list-disc list-inside">
          <li>Is not familiar with SOLID</li>
          <li>Is familiar with Microservice architecture</li>
        </ul>

        <p className="para pt-[2rem]">Cloud Ops / DevOps (3/5)</p>
        <ul className="list-disc list-inside">
          <li>Docker, Kubernetes, Jenkins Ci/Cd</li>
        </ul>

        <p className="para pt-[2rem]">Agile (3/5)</p>
        <ul className="list-disc list-inside">
          <li>Is familiar with Agile, the concepts of sprints and sprint retrospective.</li>
        </ul>

        <p className="para pt-[2rem]">Preferred job position</p>
        <ul className="pb-[3.9375rem] list-disc list-inside">
          <li>Backend with Java</li>
        </ul>
      </div>
    </div>
  )
}

export default Summary
