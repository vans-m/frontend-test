import React, { FC } from 'react'
import { GREEN } from '../constants/colors'

type CheckedBoxProps = {
  fill: boolean
}

const CheckedBox: FC<CheckedBoxProps> = ({ fill }) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 35 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M30.6251 0.625H4.37506C2.31256 0.625 0.625061 2.3125 0.625061 4.375V30.625C0.625061 32.6875 2.31256 34.375 4.37506 34.375H30.6251C32.6876 34.375 34.3751 32.6875 34.3751 30.625V4.375C34.3751 2.3125 32.6876 0.625 30.6251 0.625ZM15.0813 25.5438C14.3501 26.275 13.1688 26.275 12.4376 25.5438L5.70631 18.8125C4.97506 18.0812 4.97506 16.9 5.70631 16.1687C6.43756 15.4375 7.61881 15.4375 8.35006 16.1687L13.7501 21.5688L26.6501 8.66875C27.3813 7.9375 28.5626 7.9375 29.2938 8.66875C30.0251 9.4 30.0251 10.5812 29.2938 11.3125L15.0813 25.5438Z"
        fill={fill ? GREEN : 'none'}
      />
    </svg>
  )
}

export default CheckedBox
