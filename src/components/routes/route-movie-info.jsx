import React, { PureComponent } from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
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

              //     <CSSTransition
                      //       in={match !== null}
                      //       mountOnEnter
                      //       unmountOnExit
                      //       classNames="movie-info__header-"
                      //       timeout={6000}
                      //     >
                      //       <MovieInfoHeader
                      //         childProps={{ id: match.params.id }}
                      //         labels={this.props.labels}
                      //       />
                      //     </CSSTransition>

  render() {
    return (this.getMovieInfo);
  }
}
export default RoutMovieInfo;
