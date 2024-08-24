import { useState, useEffect } from 'react'
import MovieList from '@components/MovieList/MovieList'
import { getTrendingMoviesByDay } from '@api/themoviedb-api'
import { toastError } from '@utils/toast'

const HomePage = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setMovies([]);
        const data = await getTrendingMoviesByDay();
        setMovies(data);
      } catch (err) {
        toastError(err.response?.data?.status_message || 'No results found');
      }
    };

    fetchMovies();
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      {movies.length > 0 && <MovieList movies={movies} basePath="movies" />}
    </main>
  )
}

export default HomePage