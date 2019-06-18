import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loadAllMovies } from '../../AC';
import './toggle-item.scss';

class ToggleItem extends PureComponent {
  static propTypes = {
    // from props
    value: PropTypes.string.isRequired,
    storePathName: PropTypes.string.isRequired,
    component: PropTypes.objectOf(Object).isRequired,
    toggleHandler: PropTypes.func.isRequired,
    itemClassStyle: PropTypes.string,
    // from connect
    selected: PropTypes.bool.isRequired,
    reloadMovie: PropTypes.func.isRequired,
  };

  handleClick = () => {
    const { value, toggleHandler, reloadMovie } = this.props;
    toggleHandler(value);
    reloadMovie();
  };

  render() {
    const { component, itemClassStyle, selected } = this.props;
    const isSelectedStyle = selected ? `${itemClassStyle}--selected` : '';
    return (
      <div
        className={`toggle-item ${isSelectedStyle} ${itemClassStyle}`}
        onClick={this.handleClick}
        tabIndex={-1}
        role="checkbox"
        onKeyPress={this.handleClick}
        aria-checked="false"
      >
        {component}
      </div>
    );
  }
}

export default connect((state, ownProps) => ({
  selected: state.filters[ownProps.storePathName] === ownProps.value,
}), {
  reloadMovie: loadAllMovies,
})(ToggleItem);
