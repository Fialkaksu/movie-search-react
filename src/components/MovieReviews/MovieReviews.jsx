import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { getMovieReviews } from '@api/themoviedb-api'
import { toastError } from '@utils/toast'
import css from './MovieReviews.module.css'

const MovieReviews = () => {
  const { movieId } = useParams()
  const [movieReviews, setMovieReviews] = useState(null);

  useEffect(() => {
    const fetchMovieReviews = async () => {
      try {
        const data = await getMovieReviews(movieId);
        setMovieReviews(data);
      } catch (err) {
        toastError(err.response?.data?.status_message || 'Failed to load movie reviews');
      }
    };

    fetchMovieReviews();
  }, [movieId]);

  return (
    <div className={css.container}>
      {movieReviews && (
        <ul className={css.reviewsList}>
          {movieReviews.map(({ id, author, content }) => (
            <li key={id} className={css.reviewItem}>
              <h3 className={css.reviewAuthor}>{author}</h3>
              <p className={css.reviewContent}>{content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default MovieReviews