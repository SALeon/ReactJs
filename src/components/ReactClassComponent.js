/*eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ReactClassComponent extends Component {
  render() {
    return <h3>{`${this.props.greeting} from React.Component`}</h3>;
  }
}

ReactClassComponent.propTypes = {
  greeting: PropTypes.string.isRequired,
};

export default ReactClassComponent;
