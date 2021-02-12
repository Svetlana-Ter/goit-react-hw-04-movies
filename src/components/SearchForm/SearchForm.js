import { Component } from 'react';
import PropTypes from 'prop-types';

export default class SearchForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func,
  };

  state = {
    movieName: '',
  };

  handleChange = event => {
    this.setState({
      movieName: event.currentTarget.value.toLowerCase(),
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.movieName);
    this.setState({ movieName: '' });
  };

  render() {
    return (
      <header className='Searchbar'>
        <form className='SearchForm' onSubmit={this.handleSubmit}>
          <button type='submit' className='SearchForm-button'>
            <span className='SearchForm-button-label'>Search</span>
          </button>

          <input
            onChange={this.handleChange}
            value={this.state.movieName}
            className='SearchForm-input'
            type='text'
            placeholder='Search movie'
          />
        </form>
      </header>
    );
  }
}
