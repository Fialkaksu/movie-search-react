import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from '@components/Navigation/Navigation';
import css from './App.module.css'

const HomePage = lazy(() => import('@pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('@pages/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() => import('@pages/MovieDetailsPage/MovieDetailsPage'));
const NotFoundPage = lazy(() => import('@pages/NotFoundPage/NotFoundPage'));
const MovieCast = lazy(() => import('@components/MovieCast/MovieCast'));
const MovieReviews = lazy(() => import('@components/MovieReviews/MovieReviews'));

const App = () => {

  return (
    <div className={css.container}>
      <Navigation />

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />} >
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App
