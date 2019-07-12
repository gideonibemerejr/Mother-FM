import React from 'react'
import { NavLink } from 'react-router-dom'

const NavItem = ({ className, to, children }) => {
  return (
    <li className="mh2">
      <NavLink exact to={to} className={className}>
        {children}
      </NavLink>
    </li>
  )
}

export default NavItem
