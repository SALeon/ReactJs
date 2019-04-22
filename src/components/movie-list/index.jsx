import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MovieCard from '../movie-card';
import { loadAllMovies } from '../../AC';
import './movie-list.scss';

class MovieList extends PureComponent {
  static propTypes = {
    // form connect
    movies: PropTypes.arrayOf(
      PropTypes.object,
    ).isRequired,
    loadMovies: PropTypes.func.isRequired,
  };

  componentDidMount() {
    console.log('load movies start');
    this.props.loadMovies();
  }

  render() {
    const { movies } = this.props;
    const mappedMovies = movies.map((movie) => {
      const movieInfo = {
        id: movie.id,
        title: movie.title,
        releaseDate: movie.release_date,
        poster: movie.poster_path,
        genres: movie.genres,
        voteCount: movie.vote_count,
      };
      return (
        <li
          key={movieInfo.id}
          className="movie-list__item"
        >
          <MovieCard movieInfo={movieInfo} />
        </li>
      );
    });
    return (<ul className="movie-list">{ mappedMovies }</ul>);
  }
}

export default connect(
  state => ({ movies: state.movies.items }),
  { loadMovies: loadAllMovies },
)(MovieList);
