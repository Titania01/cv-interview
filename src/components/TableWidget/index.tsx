import React from 'react'

import './TableWidget.css'
import Checkbox from './../vectors/Checkbox'
interface PropTypes {
  id?: string
  headings?: Array<{ name: any; key: string }>
  tableData?: Array<Object>
  rowClickAction?: Function
  selectedRow?: string
}

const TableWidget = ({
  id = '',
  headings = [
    {
      name: (
        <span className="flex items-center justify-center ">
          <Checkbox />
        </span>
      ),
      key: 'icon',
    },
    { name: 'Name', key: 'candidateName' },
    { name: 'Role', key: 'role' },
    { name: 'Interview Type', key: 'interviewType' },
    { name: 'Score', key: 'score' },
    { name: 'Status', key: 'status' },
    { name: 'Date', key: 'date' },
  ],
  tableData = Array(13).fill({
    icon: (
      <span className="flex items-center justify-center ">
        <Checkbox />
      </span>
    ),
    candidateName: 'Aboyeji Tolulope',
    role: 'React Developer',
    interviewType: 'React',
    score: '5/10',
    status: 'Approved',
    date: '12:45PM, 23rd Monday, June 2021',
  }),
  rowClickAction,
  selectedRow,
}: PropTypes) => {
  const tableId = id ? `${id}-table` : 'table'

  return (
    <div className="TableWidget">
      <div className="TableArea">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr className="rounded-lg bg-[#FBFBFB]">
              {headings.map((heading, headingIndex) => (
                <th
                  scope="col"
                  key={`${tableId}-heading_tableIndex-${headingIndex}`}
                  className="px-6 py-3 text-sm font-normal tracking-wider text-gray-500 capitalize"
                >
                  {heading.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {tableData.map((row: any, rowIndex: number) => (
              <tr
                key={`${tableId}-row_${rowIndex}`}
                className={
                  selectedRow !== null ? (selectedRow === (row._id || row.id || rowIndex) ? 'bg-gray-100' : '') : ''
                }
              >
                {headings.map((col, colIndex) => (
                  <td
                    key={`${tableId}-row_${rowIndex}-col_${colIndex}`}
                    className={`px-2 py-4 whitespace-normal text-center `}
                  >
                    {row[col.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
export default TableWidget
