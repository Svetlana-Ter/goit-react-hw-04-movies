import { NavLink } from 'react-router-dom';
export default function Navigation() {
  return (
    <>
      <ul className='Navigation-list'>
        <li className='Navigation-item'>
          <NavLink
            to='/'
            exact
            className='NavLink'
            activeClassName='NavLink--active'
          >
            Home
          </NavLink>
        </li>
        <li className='Navigation-item'>
          <NavLink
            to='/movies'
            className='NavLink'
            activeClassName='NavLink--active'
          >
            Movies
          </NavLink>
        </li>
      </ul>
      <hr />
    </>
  );
}
