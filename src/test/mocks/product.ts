import { Product } from '../../types/app.types'

export const widgetMock: Product = {
  id: 1,
  type: 'plastic bottles',
  amount: 100,
  action: 'collects',
  active: true,
  linked: true,
  selectedColor: 'green',
}

export const apiMock: Product[] = [
  widgetMock,
  { ...widgetMock, id: 2, active: false, linked: false },
  { ...widgetMock, id: 3, active: false },
]
