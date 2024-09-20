import { Products } from './components/Products.jsx'
import { Header } from './components/Header.jsx'
import { Footer } from './components/Footer.jsx'
import { useFilters } from './hooks/useFilters.js'
import { Cart } from './components/Cart.jsx'
import { CartProvider } from './context/cart.jsx'
import { useEffect, useState } from 'react'

const fetchProduct = async () => {
  try {
    const res = await fetch('https://dummyjson.com/products?limit=12')
    const json = await res.json()
    return json.products
  } catch (e) {
    throw new Error('Error al cargar los productos')
  }
}

function useFecthProduct () {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const loadProducts = async () => {
      const products = await fetchProduct()
      setProducts(products)
    }
    loadProducts()
  }, [])
  return { products }
}

function App () {
  const { filterProducts } = useFilters()
  const { products } = useFecthProduct()
  const filteredProducts = filterProducts(products)

  return (
    <CartProvider>
      <h1>Shopping Cart</h1>
      <Header />
      <Cart />
      <Products products={filteredProducts} />
      <Footer />
    </CartProvider>
  )
}

export default App
