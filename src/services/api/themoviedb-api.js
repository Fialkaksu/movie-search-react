import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.headers.common[
  'Authorization'
] = `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjM2NmMGVjOWIzOGQ2NDY5NzFkNjhjMzNkNDc4MDk2OSIsIm5iZiI6MTcyMzgwNzY2NS45MDY5ODUsInN1YiI6IjY2YmYzMjUzNzQ2MzA2YTkwYzk3YzAzOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.N-4zG_cas6HMEV77i2cabKtsAwA2HVG9_u-fD1LwzSA`;

const getTrendingMoviesByDay = async () => {
  const { data } = await axios.get('/trending/movie/day');

  if (!data?.results) {
    throw new Error(data?.status_message || 'No results found');
  }

  return data.results;
};

const getMovieDetails = async movieId => {
  const { data } = await axios.get(`/movie/${movieId}`);
  return data;
};

const getMovieByTitle = async title => {
  const { data } = await axios.get(`/search/movie`, {
    params: {
      query: title,
    },
  });

  return data.results;
};

const getMovieCredits = async movieId => {
  const { data } = await axios.get(`/movie/${movieId}/credits`);
  return data.cast;
};

const getMovieReviews = async movieId => {
  const { data } = await axios.get(`/movie/${movieId}/reviews`);
  return data.results;
};

export {
  getTrendingMoviesByDay,
  getMovieDetails,
  getMovieByTitle,
  getMovieCredits,
  getMovieReviews,
};
