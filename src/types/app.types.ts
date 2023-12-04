export type Product = {
  id: number
  type: TypeOptions
  amount: number
  action: 'collects' | 'plants' | 'offsets'
  active: boolean
  linked: boolean
  selectedColor: ColorOptions
}

export type ColorOptions = `${ColorOptionsEnum}`
export type TypeOptions = `${TypeOptionsEnum}`

export enum TypeOptionsEnum {
  carbon = 'carbon',
  plasticBottles = 'plastic bottles',
  trees = 'trees',
}

export enum ColorOptionsEnum {
  blue = 'blue',
  green = 'green',
  beige = 'beige',
  white = 'white',
  black = 'black',
}
