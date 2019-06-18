import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './movie-card.scss';

class MovieCard extends PureComponent {
  static propTypes = {
    movieInfo: PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      releaseDate: PropTypes.string.isRequired,
      poster: PropTypes.string.isRequired,
      genres: PropTypes.arrayOf(PropTypes.string).isRequired,
      voteCount: PropTypes.number.isRequired,
    }).isRequired,
  };

  state = {
    id: this.props.id,
    voteCount: this.props.voteCount,
  };

  render() {
    const {
      movieInfo: {
        id,
        title,
        releaseDate,
        poster,
        genres,
      },
    } = this.props;
    return (
      <div
        className="movie-card"
      >
        <Link to={`/movies/${id}`}>
          <img className="movie-card__img" src={poster} alt="movie poster" />
        </Link>
        <div className="movie-card__info">
          <span className="movie-card__title">{title}</span>
          <span className="movie-card__release-date">{releaseDate.split('-')[0]}</span>
          <span className="movie-card__genre">
            {genres.join(' & ')}
          </span>
        </div>
      </div>
    );
  }
}

export default MovieCard;
