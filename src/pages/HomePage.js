import { Component } from 'react';
import MoviesGallery from '../components/MoviesGallery/MoviesGallery';

class HomePage extends Component {
  state = {
    popularMovies: [],
  };
  _isMounted = false;

  componentDidMount() {
    this._isMounted = true;
    fetch(
      'https://api.themoviedb.org/3/trending/movie/day?api_key=6d8801a947bc1cf66079cc76f3b8ad37'
    )
      .then(response => response.json())
      .then(data =>
        this.setState({
          popularMovies: data.results,
        })
      );
  }
  componentWillUnmount() {
    this._isMounted = false;
  }
  render() {
    return (
      <>
        <h1>Trending today</h1>
        <MoviesGallery movies={this.state.popularMovies} />
      </>
    );
  }
}

export default HomePage;
