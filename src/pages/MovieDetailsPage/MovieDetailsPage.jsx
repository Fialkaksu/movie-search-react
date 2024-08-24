import { useState, useEffect, Suspense } from 'react';
import { useParams, useLocation, Link, Outlet } from 'react-router-dom'
import BackLink from '@components/BackLink/BackLink'
import { getMovieDetails } from '@api/themoviedb-api'
import { toastError } from '@utils/toast'
import css from './MovieDetailsPage.module.css'

const MovieDetailsPage = () => {
  const { movieId } = useParams()
  const [movieDetails, setMovieDetails] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const data = await getMovieDetails(movieId);
        setMovieDetails(data);
      } catch (err) {
        toastError(err.response?.data?.status_message || 'Failed to load movie details');
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  return (
    <main>
      <BackLink to={location.state ?? '/movies'}>Go back</BackLink>

      {movieDetails && (
        <>
          <div className={css.container}>
            <div className={css.movieCard}>
              <div className={css.poster}>
                <img
                  src={movieDetails.poster_path ? `https://image.tmdb.org/t/p/w300${movieDetails.poster_path}` : 'https://via.placeholder.com/300'}
                  alt={movieDetails.title}
                />
              </div>
              <div className={css.movieInfo}>
                <h1 className={css.title}>
                  {movieDetails.title} (
                  {new Date(movieDetails.release_date).getFullYear()})
                </h1>
                <p>
                  <strong>User Score:</strong> {movieDetails.vote_average}
                </p>
                <div className={css.overview}>
                  <h3>Overview</h3>
                  <p>{movieDetails.overview}</p>
                </div>

                {movieDetails.genres?.length > 0 && (
                  <div className={css.genres}>
                    <h3>Genres</h3>
                    <div className={css.genresList}>

                      {movieDetails.genres.map(genre => (
                        <span key={genre.id} className={css.genre}>{genre.name}</span>
                      ))}
                    </div>
                  </div>)}
              </div>
            </div>
          </div>

          <hr />
          <div className={css.additionalInfo}>
            <h3>Additional information</h3>
            <ul>
              <li>
                <Link to="cast" state={location.state ?? '/movies'}>Cast</Link>
              </li>
              <li>
                <Link to="reviews" state={location.state ?? '/movies'}>Reviews</Link>
              </li>
            </ul>
            <hr />

            <Suspense fallback={<div>Loading subpage...</div>}>
              <Outlet />
            </Suspense>
          </div>
        </>
      )}
    </main>
  )
}

export default MovieDetailsPage