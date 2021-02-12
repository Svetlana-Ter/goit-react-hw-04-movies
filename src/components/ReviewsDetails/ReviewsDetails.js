import { Component } from 'react';
import ReviewItem from '../ReviewItem/ReviewItem';
export default class ReviewsDetails extends Component {
  state = {
    reviews: [],
  };

  componentDidMount() {
    fetch(
      `https://api.themoviedb.org/3/movie/${this.props.match.params.movieId}/reviews?api_key=6d8801a947bc1cf66079cc76f3b8ad37`
    )
      .then(response => response.json())
      .then(data =>
        this.setState({
          reviews: data.results,
        })
      );
  }
  render() {
    if (this.state?.reviews?.length > 0) {
      return (
        <ul className='Review-list'>
          {this.state?.reviews.map(review => (
            <li key={review.id} className='Review-item'>
              <ReviewItem name={review?.author} content={review?.content} />
            </li>
          ))}
        </ul>
      );
    } else {
      return <p>We don't have reviews for this movie</p>;
    }
  }
}
