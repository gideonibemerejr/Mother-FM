import React from 'react'
import menu from '../../data/menu'
import NavItem from '../NavItem'

const Header = () => {
  return (
    <header className="black mb5 pt5">
      <ul className="list flex justify-center pl0">
        {menu.map(item => (
          <NavItem {...item} />
        ))}
      </ul>
    </header>
  )
}

export default Header
