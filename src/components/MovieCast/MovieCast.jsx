import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { getMovieCredits } from '@api/themoviedb-api'
import { toastError } from '@utils/toast'
import css from './MovieCast.module.css'

const MovieCast = () => {
  const { movieId } = useParams()
  const [movieCredits, setMovieCredits] = useState(null);

  useEffect(() => {
    const fetchMovieCredits = async () => {
      try {
        const data = await getMovieCredits(movieId);
        setMovieCredits(data);
      } catch (err) {
        toastError(err.response?.data?.status_message || 'Failed to load movie credits');
      }
    };

    fetchMovieCredits();
  }, [movieId]);

  return (
    <div className={css.container}>
      {movieCredits && (
        <ul className={css.castList}>
          {movieCredits.map(({ id, profile_path, name, character }) => (
            <li key={id} className={css.castItem}>
              <img
                src={profile_path ? `https://image.tmdb.org/t/p/w92${profile_path}` : 'https://via.placeholder.com/150'}
                alt={name}
                className={css.castImage}
              />
              <p className={css.castName}>{name}</p>
              <p className={css.castCharacter}>Character: {character}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default MovieCast