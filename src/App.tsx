import React, { useEffect, useState } from 'react'
import Widget from './components/widget/Widget'
import { Product } from './types/app.types'
import { setNewProducts } from './utils/products'
import './app.css'

function App() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      const response = await fetch(
        'https://api.mocki.io/v2/016d11e8/product-widgets'
      )
      const data = await response.json()
      setLoading(false)
      setProducts(data ?? [])
    }
    fetchData().catch((err) => {
      setError(err)
      setLoading(false)
    })
  }, [])

  const manageActiveProducts = (id: number) => {
    setProducts((prev) => setNewProducts(prev, id))
  }

  if (error) return <div>Something went wrong</div>

  return (
    <div className="App">
      <div className="container">
        <h2 className="section-title">Per product widgets</h2>
        {loading && <div data-testid="loading">Loading data...</div>}
        <ul className="widget-list">
          {products.map((product) => (
            <Widget
              key={product.id}
              {...product}
              manageActiveProducts={manageActiveProducts}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App
