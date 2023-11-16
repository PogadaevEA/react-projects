import { NavLink } from 'react-router-dom'

const Menu = () => {
  return (
    <nav>
      <NavLink
        style={({ isActive }) => (isActive ? { color: 'lightyellow', textDecoration: 'none' } : {})}
        to="."
        end
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? 'activeLink' : 'link')}
        to="about"
      >
        About
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? 'activeLink' : 'link')}
        to="contacts"
      >
        Contacts
      </NavLink>
      <NavLink to="courses">Courses</NavLink>
    </nav>
  )
}

export default Menu
