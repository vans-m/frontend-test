import React, { FC } from 'react'
import './badge.css'
import Logo from '../../svg/Logo'
import {
  ColorOptions,
  Product,
  TypeOptions,
  TypeOptionsEnum,
} from '../../types/app.types'

type BadgeProps = {
  color: ColorOptions
  action: Product['action']
  type: TypeOptions
  amount: Product['amount']
}

const Badge: FC<BadgeProps> = ({ color, action, type, amount }) => {
  return (
    <div data-testid="badge" id="badge" className={`badge ${color}`}>
      <div className="logo">
        <Logo color={color} />
      </div>
      <div className="badge-title">
        <h3>
          <span>This product {action} </span>
          {`${
            type === TypeOptionsEnum.carbon ? amount + 'kgs of' : amount
          } ${type}`}
        </h3>
      </div>
    </div>
  )
}

export default Badge
