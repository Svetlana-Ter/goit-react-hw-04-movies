import { Route, Switch } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';

const HomePage = lazy(() =>
  import('./pages/HomePage.js' /*webpackChunkName: "home-page" */)
);
const MoviesPage = lazy(() =>
  import('./pages/MoviesPage.js' /*webpackChunkName: "movie-page" */)
);
const MovieDetailsPage = lazy(() =>
  import(
    './pages/MovieDetailsPage.js' /*webpackChunkName: "movie-details-page" */
  )
);

function App() {
  return (
    <>
      <Navigation />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          <Route exact path='/' component={HomePage}></Route>
          <Route exact path='/movies' component={MoviesPage}></Route>
          <Route path='/movies/:movieId' component={MovieDetailsPage}></Route>
          <Route component={HomePage}></Route>
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
