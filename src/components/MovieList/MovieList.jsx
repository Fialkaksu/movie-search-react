import { Link, useLocation } from 'react-router-dom';
import css from './MovieList.module.css';

const MovieList = ({ movies, basePath = '' }) => {
  const location = useLocation();

  return (
    <div className={css.container}>
      {movies.map(({ id, title, poster_path }) => (
        <div key={id} className={css.card}>
          <Link to={basePath ? `${basePath}/${id}` : `${id}`} state={location}>
            <img src={poster_path ? `https://image.tmdb.org/t/p/w300${poster_path}` : 'https://via.placeholder.com/300'} alt={title} className={css.cardImage} />
            <h3 className={css.cardTitle}>{title}</h3>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default MovieList