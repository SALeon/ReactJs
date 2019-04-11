import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './selected-item.scss';

class SelectedItem extends PureComponent {
  static propTypes = {
    label: PropTypes.string.isRequired,
    defaultItemNum: PropTypes.number.isRequired,
    classStyles: PropTypes.string,
  };

  state = {
    isSelected: this.props.defaultItemNum === 0 || false,
  };

  handleClick = () => {
    const { isSelected } = this.state;
    this.setState(() => ({
      isSelected: !isSelected,
    }));
  };

  render() {
    const { label, classStyles } = this.props;
    const { isSelected } = this.state;
    const isSelectedStyle = isSelected ? 'check-bocks--selected' : '';
    return (
      <span
        className={['check-bocks', isSelectedStyle, classStyles].join(' ')}
        onClick={this.handleClick}
        tabIndex={-1}
        role="checkbox"
        onKeyPress={this.handleClick}
        aria-checked="false"
      >
        {label}
      </span>
    );
  }
}

export default SelectedItem;
