import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from '../button';
import MovieInfo from '../movie-info';
import Loader from '../loader';
import './movie-info-header.scss';

class MovieInfoHeader extends PureComponent {
  static propTypes = {
    labels: PropTypes.shape({
      siteLabel: PropTypes.string.isRequired,
      searchLabel: PropTypes.string.isRequired,
      genreInfoLabel: PropTypes.string.isRequired,
    }).isRequired,
    childProps: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
    // from connect
    loading: PropTypes.bool.isRequired,
  }


  getGenreInfo = () => {
    const { labels: { genreInfoLabel }, loading } = this.props;
    const info = genreInfoLabel.split(' ').splice(-1, 0);
    return loading ? <Loader /> : <span className="header__genre-info">{info}</span>;
  }

  render() {
    const { siteLabel, searchLabel } = this.props.labels;
    const { id } = this.props.childProps;
    return (
      <header className="header header--movie-info">
        <span className="header__title">{siteLabel}</span>
        <Button label={searchLabel} />
        <MovieInfo id={id} />
        <div className="header__row">
          {this.getGenreInfo()}
        </div>
      </header>
    );
  }
}

export default connect((state) => {
  const { loading } = state.movies;
  return { loading };
})(MovieInfoHeader);
