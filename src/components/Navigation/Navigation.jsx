import { NavLink } from 'react-router-dom';
import { FaFilm } from 'react-icons/fa';
import clsx from 'clsx';
import css from './Navigation.module.css';

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const Navigation = () => {
  return (
    <header className={css.header}>
      <p className={css.logo}>
        <FaFilm className={css.icon} />
        {' '}
        MovieSearch
      </p>

      <nav className={css.nav}>
        <NavLink to="/" className={buildLinkClass}>
          Home
        </NavLink>
        <NavLink to="/movies" className={buildLinkClass}>
          Movies
        </NavLink>
      </nav>
    </header>
  )
}

export default Navigation