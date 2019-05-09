import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loadMovie } from '../../AC';
import Loader from '../loader';
import './movie-info.scss';

class MovieInfo extends PureComponent {
  static propTypes = {
    id: PropTypes.string.isRequired,
    // from connect
    movieInfo: PropTypes.shape({
      title: PropTypes.string.isRequired,
      releaseDate: PropTypes.string.isRequired,
      posterPath: PropTypes.string.isRequired,
      overview: PropTypes.string.isRequired,
    }).isRequired,
    loading: PropTypes.bool.isRequired,
    loadMovieInfo: PropTypes.func.isRequired,
  }

  componentDidMount() {
    const { id, loadMovieInfo } = this.props;
    loadMovieInfo(id);
  }

  componentDidUpdate(prevProps) {
    const { id, loadMovieInfo } = this.props;
    if (prevProps.id !== id) {
      loadMovieInfo(id);
    }
  }

  render() {
    const { posterPath, title, releaseDate, overview } = this.props.movieInfo;
    const { loading } = this.props;

    return loading ? <Loader /> : (
      <div className="movie-info">
        <img
          className="movie-info__image"
          src={posterPath}
          alt="movie img"
        />
        <div className="movie-info__description">
          <h2 className="movie-info__title">{title}</h2>
          <span className="movie-info__data">{releaseDate.split('-')[0]}</span>
          <p className="movie-info__description-text">{overview}</p>
        </div>
      </div>
    );
  }
}

export default connect((state) => {
  const {
    selected, loading,
  } = state.movies;
  return {
    movieInfo: {
      posterPath: selected.poster_path,
      title: selected.title,
      releaseDate: selected.release_date,
      overview: selected.overview,
    },
    loading,
  };
}, { loadMovieInfo: loadMovie })(MovieInfo);
