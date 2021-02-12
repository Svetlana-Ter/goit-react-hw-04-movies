import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
const MoviesGallery = ({ movies = [], location = '' }) => {
  return (
    <ul>
      {movies?.map(movie => (
        <li key={movie.id} className='MoviesGallery-item'>
          <Link
            to={{
              pathname: `/movies/${movie.id}`,
              state: {
                from: location,
              },
            }}
          >
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default withRouter(MoviesGallery);

MoviesGallery.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
    })
  ),
};
