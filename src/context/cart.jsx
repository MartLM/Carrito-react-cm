import { createContext, useReducer } from 'react'
import { cartInitialState, cartReducer } from '../reducers/cartReducer'

export const CartContext = createContext()

function useCartReducer () {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState)
  const addToCart = product => dispatch({
    type: 'ADD_TO_CART',
    payload: product
  })

  const removeFromCart = product => dispatch({
    type: 'REMOVE_FROM_CART',
    payload: product
  })

  const clearCart = () => dispatch({ type: 'CLEAR_CART' })

  return { cart: state, addToCart, removeFromCart, clearCart }
}

export function CartProvider ({ children }) {
  const { cart, addToCart, removeFromCart, clearCart } = useCartReducer()
  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      clearCart
    }}
    >
      {children}
    </CartContext.Provider>
  )
}
