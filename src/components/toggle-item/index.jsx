import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './toggle-item.scss';

class ToggleItem extends PureComponent {
  static propTypes = {
    id: PropTypes.string.isRequired,
    component: PropTypes.objectOf(Object).isRequired,
    toggleListener: PropTypes.func.isRequired,
    selected: PropTypes.string.isRequired,
    itemClassStyle: PropTypes.string,
  };

  state = {
    isSelected: this.props.id === this.props.selected,
  };

  static getDerivedStateFromProps(props, state) {
    return props.id !== props.selected && state.isSelected
      ? { isSelected: false }
      : null;
  }

  handleClick = () => {
    const { isSelected } = this.state;
    const { toggleListener, id, selected } = this.props;
    if (id !== selected && !isSelected) {
      this.setState(() => ({
        isSelected: !isSelected,
      }));
      toggleListener(id);
    }
  };

  render() {
    const { component, itemClassStyle } = this.props;
    const { isSelected } = this.state;
    const isSelectedStyle = isSelected ? `${itemClassStyle}--selected` : '';
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

export default ToggleItem;
