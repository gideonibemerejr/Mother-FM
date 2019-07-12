import React from 'react'
import { NavLink } from 'react-router-dom'

const NavItem = ({ className, to, children, handleLogout }) => {
  return (
    <li className="mh2">
      <NavLink onClick={handleLogout} exact to={to} className={className}>
        {children}
      </NavLink>
    </li>
  )
}

export default NavItem
