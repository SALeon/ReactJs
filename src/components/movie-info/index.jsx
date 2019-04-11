import React from 'react';
import PropTypes from 'prop-types';
import './movie-info.scss';

const MovieInfo = ({ movieInfo }) => (
  <div className="movie-info">
    <img
      className="movie-info__image"
      src={movieInfo.poster_path}
      alt="movie img"
    />
    <div className="movie-info__description">
      <h2 className="movie-info__title">{movieInfo.title}</h2>
      <span className="movie-info__data">{movieInfo.release_date.split('-')[0]}</span>
      <p className="movie-info__description-text">{movieInfo.overview}</p>
    </div>
  </div>
);

MovieInfo.propTypes = {
  movieInfo: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string),
    voteCount: PropTypes.number,
  }).isRequired,
};

export default MovieInfo;
