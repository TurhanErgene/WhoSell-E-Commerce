import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import '../component.css'
import HamburgerMenu from './HamburgerMenu'
import {RootState} from '../redux/reducers'
import OrdersDrawer from './OrdersDrawer'
import FavoriteDialog from './FavoriteDialog'
import LoginLogout from './LoginLogout'

const style = {
  color: 'white',
} as const

const NavBar = () => {
  const cart = useSelector((state: RootState) => {
    return state.orderReducer.orders
  })

  return (
    <nav className="navbar">
      <section className="navbar__logo">
        <Link to={'/'} className="shopHover">
          Home
        </Link>
      </section>

      <section className="navbar__category">
        <li>
          <Link to={`/?category=women`}>women</Link>
        </li>
        <li>
          <Link to={`/?category=men`}>men</Link>
        </li>
        <li>
          <Link to={`/?category=kids`}>kids</Link>
        </li>
      </section>

      <section className="navbar__links">
        <li>
          <FavoriteDialog />
        </li>
        <li>
          <OrdersDrawer />
        </li>
        <li>
          <LoginLogout />
        </li>
      </section>

      <HamburgerMenu />
    </nav>
  )
}

export default NavBar