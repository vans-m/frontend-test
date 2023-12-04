import { Product } from '../types/app.types'

export const setNewProducts = (products: Product[], id: number): Product[] => {
  return products.map((prod) => ({
    ...prod,
    active: id === prod.id && !prod.active,
  }))
}
