import { Component } from 'react';
import SearchForm from '../components/SearchForm/SearchForm';
import MoviesGallery from '../components/MoviesGallery/MoviesGallery';
import queryString from 'query-string';
class MoviesPage extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    const { query } = queryString.parse(this.props.location.search);
    if (query) {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=6d8801a947bc1cf66079cc76f3b8ad37&query=${query}`
      )
        .then(response => response.json())
        .then(data => {
          this.setState({
            movies: data.results,
          });
        });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { query: currentQuery } = queryString.parse(
      this.props.location.search
    );
    const { query: prevQuery } = queryString.parse(prevProps.location.search);

    if (currentQuery !== prevQuery) {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=6d8801a947bc1cf66079cc76f3b8ad37&query=${currentQuery}`
      )
        .then(response => response.json())
        .then(data =>
          this.setState({
            movies: data.results,
          })
        );
    }
  }

  handleFormSubmit = movieName => {
    this.props.history.push({
      pathname: this.props.location.pathname,
      search: `query=${movieName}`,
    });
  };

  render() {
    return (
      <>
        <SearchForm onSubmit={this.handleFormSubmit} />
        <MoviesGallery movies={this.state.movies} />
      </>
    );
  }
}

export default MoviesPage;
