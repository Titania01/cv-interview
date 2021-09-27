import * as React from 'react'

function Checkbox(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={12} height={12} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x={0.5} y={0.5} width={11} height={11} rx={1.5} stroke="#ADADAD" />
    </svg>
  )
}

export default Checkbox
