import React from 'react'
import menu from '../../data/menu'
import NavItem from '../NavItem'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="black mb5 pt5">
      <h1 className="ttu f3 tracked-mega anton tc mt0 mb3">Mother FM</h1>
      <ul className="list flex justify-center pl0">
        {menu.map(item => (
          <NavItem {...item} />
        ))}
      </ul>
    </header>
  )
}

export default Header
