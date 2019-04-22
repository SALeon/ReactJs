import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './toggle-item.scss';

class ToggleItem extends PureComponent {
  static propTypes = {
    // from props
    name: PropTypes.string.isRequired,
    storePathName: PropTypes.string.isRequired,
    component: PropTypes.objectOf(Object).isRequired,
    toggleHandler: PropTypes.func.isRequired,
    itemClassStyle: PropTypes.string,
    // from connect
    selected: PropTypes.bool.isRequired,
  };

  componentDidUpdate() {
    console.log('from update');
  }

  handleClick = () => {
    const { name, toggleHandler } = this.props;
    toggleHandler(name);
  };

  render() {
    const { component, itemClassStyle, selected } = this.props;
    console.log('item ---');
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
  selected: state.filters[ownProps.storePathName] === ownProps.name,
}))(ToggleItem);
