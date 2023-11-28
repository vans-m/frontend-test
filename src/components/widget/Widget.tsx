import React, { FC, ReactNode, memo, useState } from 'react'
import { ColorOptions, Product } from '../../types/app.types'
import ColorSwitches from '../colorSwitches/ColorSwitches'
import './widget.css'
import Toggle from '../toggle/Toggle'
import Checkbox from '../checkbox/Checkbox'
import Tooltip from '../tooltip/Tooltip'
import Badge from '../badge/Badge'

type WidgetProps = Product & {
  manageActiveProducts: (id: number) => void
}

const Widget: FC<WidgetProps> = ({
  id,
  type,
  amount,
  action,
  active,
  linked,
  selectedColor,
  manageActiveProducts,
}) => {
  const [isLinked, setIsLinked] = useState(linked)
  const [color, setColor] = useState(selectedColor)

  const manageSetColor = (color: ColorOptions) => {
    setColor(color)
  }

  const TooltipContent = (): ReactNode => (
    <>
      <section className="tooltip-content">
        This widget links directly to your public profile so that you can easily
        share your impact with your customers. Turn it off here if you do not
        want the badge to link to it.
      </section>
      <a
        className="tooltip-link"
        href="https://www.getgreenspark.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Public Profile
      </a>
    </>
  )
  const widtgetId = `widget-${id}`

  return (
    <li data-testid="widget" id={widtgetId}>
      <section className="wrapper">
        <Badge type={type} amount={amount} action={action} color={color} />
        <ul className="options">
          <li>
            <dl>
              <dt>
                Link to public profile <Tooltip>{TooltipContent()}</Tooltip>
              </dt>
              <dd>
                <Checkbox
                  isActive={isLinked}
                  onClick={() => setIsLinked((prev) => !prev)}
                />
              </dd>
            </dl>
          </li>
          <li>
            <dl>
              <dt>Badge colour</dt>
              <dd>
                <ColorSwitches
                  manageSetColor={manageSetColor}
                  selectedColor={color}
                />
              </dd>
            </dl>
          </li>
          <li>
            <dl>
              <dt>Activate badge</dt>
              <dd>
                <Toggle
                  id={widtgetId}
                  isActive={active}
                  onClick={() => manageActiveProducts(id)}
                />
              </dd>
            </dl>
          </li>
        </ul>
      </section>
    </li>
  )
}

export default memo(Widget)
