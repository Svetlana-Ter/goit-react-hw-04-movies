import PropTypes from 'prop-types';
export default function CastItem({ src = '', name = '', character = '' }) {
  return (
    <div>
      {src ? (
        <img
          src={`https://image.tmdb.org/t/p/w500/${src}`}
          className='CastItem-img'
        />
      ) : (
        <p>Actor poster is not found</p>
      )}

      <h3>{name}</h3>
      <p>{character}</p>
    </div>
  );
}

CastItem.propTypes = {
  src: PropTypes.string,
  name: PropTypes.string,
  character: PropTypes.string,
};
