import PropTypes from 'prop-types';
export default function ReviewItem({ name = '', content = '' }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>{content}</p>
    </div>
  );
}

ReviewItem.propTypes = {
  name: PropTypes.string,
  content: PropTypes.string,
};
