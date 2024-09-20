// import { useCart } from '../hooks/useCart'
import { useFilters } from '../hooks/useFilters'
import './Footer.css'

export function Footer () {
  const { filters } = useFilters()
  // const { cart } = useCart()

  return (
    <footer className='footer'>
      <h4>Filtros activos: {filters.category}, {filters.minPrice} </h4>
      <h5>Shopping cart con useContext & reducer</h5>
      <h5>Un proyecto del curso de <span>@midudev</span></h5>
    </footer>
  )
}
