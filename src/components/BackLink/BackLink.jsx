import { Link } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import css from './BackLink.module.css';

const BackLink = ({ to, children }) => {
  return (
    <Link to={to} className={css.link}>
      <BiArrowBack className={css.icon} />
      {' '}
      {children}
    </Link>
  )
}

export default BackLink