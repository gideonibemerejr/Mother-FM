import React from 'react'
import menu from '../../data/menu'
import NavItem from '../NavItem'
import { Link } from 'react-router-dom'

const Header = props => {
  const size = 3
  const NavItems = menu.slice(0, size)

  let nav = props.user ? (
    <ul className="list flex justify-center pl0">
      {menu.map((item, idx) => (
        <NavItem key={idx} {...item} />
      ))}
      <NavItem
        children="Log Out"
        to=""
        className="nav-link link biryani-black f6 ttu gray"
        handleLogout={props.handleLogout}
      />
    </ul>
  ) : (
    <ul className="list flex justify-center pl0">
      {NavItems.map((item, idx) => (
        <NavItem key={idx} {...item} />
      ))}
    </ul>
  )
  return (
    <header className="black mb5 pt5">
      <Link to="/" style={{ color: '#000', textDecoration: 'none' }}>
        <h1 className="ttu f3 tracked-mega anton tc mt0 mb3">Mother FM</h1>
      </Link>
      {nav}
    </header>
  )
}

export default Header
