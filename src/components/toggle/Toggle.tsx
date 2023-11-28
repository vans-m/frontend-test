import React, { FC } from 'react'

import './toggle.css'

type ToggleProps = {
  isActive: boolean
  onClick: () => void
  id: string
}

const Toggle: FC<ToggleProps> = ({ id, isActive, onClick }) => (
  <button
    onClick={onClick}
    id={`toggle-${id}`}
    data-testid={`toggle-${id}`}
    role="checkbox"
    aria-checked={isActive}
    aria-label="Toggle activate badge"
    className={`toggle-wrapper ${isActive ? 'active' : ''}`}
  >
    <span className="toggle-switch" />
  </button>
)

export default Toggle
