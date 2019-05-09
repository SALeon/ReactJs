import React, { PureComponent } from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import MovieInfoHeader from '../movie-info-header';

class RoutMovieInfo extends PureComponent {
  static propTypes = {
    labels: PropTypes.shape({
      siteLabel: PropTypes.string.isRequired,
      searchLabel: PropTypes.string.isRequired,
      genreInfoLabel: PropTypes.string.isRequired,
    }).isRequired,
  }

  getMovieInfo = ({ match }) => {
    const { id } = match.params;
    return (<MovieInfoHeader childProps={{ id }} labels={this.props.labels} />);
  }

  render() {
    return (
      <Route path="/movies/:id" render={this.getMovieInfo} exact />
    );
  }
}
export default RoutMovieInfo;
