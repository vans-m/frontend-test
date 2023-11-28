import React, { FC } from 'react'

import './checkbox.css'
import CheckedBox from '../../svg/CheckedBox'

type CheckboxProps = {
  isActive: boolean
  onClick: () => void
}

const Checkbox: FC<CheckboxProps> = ({ isActive, onClick }) => (
  <button
    onClick={onClick}
    role="checkbox"
    aria-checked={isActive}
    aria-label="Check link to public profile"
    className={`checkbox-wrapper ${isActive ? 'active' : ''}`}
  >
    <CheckedBox fill={isActive} />
  </button>
)

export default Checkbox
