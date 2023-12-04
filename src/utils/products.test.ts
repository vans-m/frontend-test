import { apiMock, widgetMock } from '../test/mocks/product'
import { setNewProducts } from './products'

describe('Products', () => {
  test('Given an id, a product with the active property set to true will be set to false', () => {
    expect(setNewProducts([widgetMock], 1)).toStrictEqual([
      { ...widgetMock, active: false },
    ])
  })
  test('Given an id, a product with the active property set to false will be set to true', () => {
    expect(setNewProducts([{ ...widgetMock, active: false }], 1)).toStrictEqual(
      [{ ...widgetMock, active: true }]
    )
  })
  test('Given an array of products, all but the matching id will have the active property set to false', () => {
    const result = [
      { ...apiMock[0], active: false },
      apiMock[1],
      { ...apiMock[2], active: true },
    ]
    expect(setNewProducts(apiMock, 3)).toStrictEqual(result)
  })
})
