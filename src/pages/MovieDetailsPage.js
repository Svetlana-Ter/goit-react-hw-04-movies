import { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import CastDetails from '../components/CastDetails/CastDetails';
import ReviewsDetails from '../components/ReviewsDetails/ReviewsDetails';
export default class MovieDetailsPage extends Component {
  state = {
    movie: {},
  };

  componentDidMount() {
    fetch(
      `https://api.themoviedb.org/3/movie/${this.props.match.params.movieId}?api_key=6d8801a947bc1cf66079cc76f3b8ad37`
    )
      .then(response => response.json())
      .then(data =>
        this.setState({
          movie: data,
        })
      );
  }
  handleGoBack = () => {
    const { location, history } = this.props;
    history.push(location?.state?.from || '/');
  };
  render() {
    const {
      title,
      release_date,
      poster_path,
      popularity,
      genres,
      overview,
    } = this.state.movie;

    const { match } = this.props;
    return (
      <>
        <button
          type='button'
          className='MovieDetailsPage-btn'
          onClick={this.handleGoBack}
        >
          GO BACK
        </button>
        <h1>
          {title || '-'} ({release_date?.slice(0, 4) || '-'})
        </h1>
        <div className='MovieDetailsPage-wrap'>
          <div className='MovieDetailsPage-img-wrap'>
            {poster_path ? (
              <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} />
            ) : (
              <p>Movie's poster is not found</p>
            )}
          </div>
          <div className='MovieDetailsPage-text-wrap'>
            <p>
              <span className='bold'>Popularity:</span>
              {popularity || '-'}
            </p>
            <p>
              <span className='bold'>Genres:</span>
              {genres?.map(genre => genre.name).join(', ') || '-'}
            </p>
            <p>
              <span className='bold'>Overview:</span>
              {overview || '-'}
            </p>
            <h2>Additional information</h2>
            <ul>
              <li>
                <Link to={`${match.url}/cast`}>Cast</Link>
              </li>
              <li>
                <Link to={`${match.url}/reviews`}>Reviews</Link>
              </li>
            </ul>
            <Switch>
              <Route
                path={`${match.path}/cast`}
                component={CastDetails}
              ></Route>
              <Route
                path={`${match.path}/reviews`}
                component={ReviewsDetails}
              ></Route>
            </Switch>
          </div>
        </div>
      </>
    );
  }
}
