import React from 'react'
import menu from '../../data/menu'
import NavItem from '../NavItem'
import { Link, NavLink } from 'react-router-dom'

const Header = props => {
  const size = 3
  const NavItems = menu.slice(0, size)

  let nav = props.user ? (
    <ul className="list flex flex-wrap justify-center pl0">
      {menu.map((item, idx) => (
        <NavItem key={idx} {...item} />
      ))}
    </ul>
  ) : (
    <ul className="list flex justify-center pl0">
      {NavItems.map((item, idx) => (
        <NavItem key={idx} {...item} />
      ))}
      <li className="mh2">
        <NavLink
          className="nav-link link biryani-black f6 ttu gray"
          to="/signup"
        >
          Sign Up
        </NavLink>
      </li>
      <li className="mh2">
        <NavLink
          className="nav-link link biryani-black f6 ttu gray"
          to="/login"
        >
          Log In
        </NavLink>
      </li>
    </ul>
  )
  let profile = props.user ? (
    <nav className="ph4 mt4 ph4-l pb4">
      <div className=" icon flex justify-end">
        <i
          onClick={props.handleMenuClick}
          class=" absolute zmdi zmdi-account material-icons-name zmdi-hc-lg"
        />
        {!!props.isOpen ? (
          <ul
            className={`bg-white pa3 list absolute dropdown ${
              props.isOpen ? 'active' : ''
            }`}
          >
            <li>
              <NavLink
                className="nav-link link biryani-black f6 ttu gray"
                to="make-mixes"
              >
                Create a Mix
              </NavLink>
            </li>
            <li>
              <Link
                className="nav-link link biryani-black f6 ttu gray"
                to=""
                onClick={props.handleLogout}
              >
                Log Out, {props.user.name}
              </Link>
            </li>
          </ul>
        ) : null}
      </div>
    </nav>
  ) : null

  return (
    <>
      {profile}
      <header className="black mb5 mt4">
        <Link to="/" style={{ color: '#000', textDecoration: 'none' }}>
          <h1 className="ttu f3 tracked-mega anton tc mt0 mb3">Mother FM</h1>
        </Link>
        {nav}
      </header>
    </>
  )
}

export default Header
