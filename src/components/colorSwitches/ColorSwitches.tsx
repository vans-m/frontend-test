import React, { FC } from 'react'
import { ColorOptionsEnum, ColorOptions } from '../../types/app.types'
import './colorSwitches.css'

type ColorSwitchesProps = {
  manageSetColor: (color: ColorOptions) => void
  selectedColor: ColorOptions
}

const ColorSwitches: FC<ColorSwitchesProps> = ({
  manageSetColor,
  selectedColor,
}) => {
  return (
    <ul className="color-switches">
      {Object.values(ColorOptionsEnum).map((color) => (
        <li key={color}>
          <button
            onClick={() => manageSetColor(color)}
            className={`color-switch ${color} ${
              selectedColor === color ? 'selected' : ''
            }`}
            aria-label={`Switch to ${color}`}
          />
        </li>
      ))}
    </ul>
  )
}

export default ColorSwitches
