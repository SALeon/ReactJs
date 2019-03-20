import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class ReactPureComponent extends PureComponent {
  render() {
    const { greeting } = this.props;
    return <h4>{`${greeting} from React.Component`}</h4>;
  }
}

ReactPureComponent.propType = {
  greeting: PropTypes.string.isRequired,
};

export default ReactPureComponent;
