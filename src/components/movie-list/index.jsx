import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MovieCard from '../movie-card';
import { loadAllMovies } from '../../AC';
import Loader from '../loader';
import NotFound from '../movie-not-found';
import './movie-list.scss';

class MovieList extends PureComponent {
  static propTypes = {
    // form connect
    movies: PropTypes.arrayOf(
      PropTypes.object,
    ).isRequired,
    loaded: PropTypes.bool.isRequired,
    loading: PropTypes.bool.isRequired,
    notFound: PropTypes.bool.isRequired,
    loadMovies: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.loadMovies();
  }

  getBody = () => {
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

  render() {
    const { loading, notFound } = this.props;
    if (loading) return <Loader />;
    if (notFound) return <NotFound />;
    return this.getBody();
  }
}

export default connect(
  ({ movies }) => {
    const {
      items, loaded, loading, notFound,
    } = movies;
    return {
      movies: items,
      loaded,
      loading,
      notFound,
    };
  },
  { loadMovies: loadAllMovies },
)(MovieList);
