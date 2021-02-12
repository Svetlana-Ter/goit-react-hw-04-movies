import { Component } from 'react';
import CastItem from '../CastItem/CastItem';
export default class CastDetails extends Component {
  state = {
    cast: [],
  };

  componentDidMount() {
    fetch(
      `https://api.themoviedb.org/3/movie/${this.props.match.params.movieId}/credits?api_key=6d8801a947bc1cf66079cc76f3b8ad37`
    )
      .then(response => response.json())
      .then(data =>
        this.setState({
          cast: data.cast,
        })
      );
  }
  render() {
    if (this.state?.cast?.length > 0) {
      return (
        <ul className='Casts-list'>
          {this.state.cast?.map(castItem => (
            <li key={castItem.id} className='Casts-item'>
              <CastItem
                src={castItem?.profile_path}
                name={castItem?.name}
                character={castItem?.character}
              />
            </li>
          ))}
        </ul>
      );
    } else {
      return <p>We don't have casts for this movie</p>;
    }
  }
}
