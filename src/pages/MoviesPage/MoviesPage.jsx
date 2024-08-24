import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import MovieList from '@components/MovieList/MovieList';
import SearchBox from '@components/SearchBox/SearchBox';
import { getMovieByTitle } from '@api/themoviedb-api';
import { toastError } from '@utils/toast';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const handleSearch = query => {
    const nextParams = query ? { query } : {};
    setSearchParams(nextParams);
  };

  useEffect(() => {
    if (!query) {
      return;
    }
    const fetchMovies = async () => {
      try {
        const data = await getMovieByTitle(query);
        setMovies(data);
      } catch (err) {
        toastError(err.response?.data?.status_message || 'Failed to load movies');
      }
    };
    fetchMovies();
  }, [query]);

  return (
    <main>
      <SearchBox onSearch={handleSearch} />
      {movies.length > 0 && <MovieList movies={movies} />}
    </main>
  )
}

export default MoviesPage