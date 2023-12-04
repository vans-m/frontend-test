import React, { FC, ReactNode } from 'react'
import './tooltip.css'
import { GREEN } from '../../constants/colors'

type TooltipProps = {
  children: ReactNode
}
const Tooltip: FC<TooltipProps> = ({ children }) => {
  return (
    <div className="tooltip-container">
      <svg
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.5 8.47363H5.5V5.47363H4.5V8.47363ZM5 0.973633C2.24 0.973633 0 3.21363 0 5.97363C0 8.73363 2.24 10.9736 5 10.9736C7.76 10.9736 10 8.73363 10 5.97363C10 3.21363 7.76 0.973633 5 0.973633ZM5 9.97363C2.795 9.97363 1 8.17863 1 5.97363C1 3.76863 2.795 1.97363 5 1.97363C7.205 1.97363 9 3.76863 9 5.97363C9 8.17863 7.205 9.97363 5 9.97363ZM4.5 4.47363H5.5V3.47363H4.5V4.47363Z"
          fill={GREEN}
        />
      </svg>
      <div className="tooltip">{children}</div>
    </div>
  )
}

export default Tooltip
