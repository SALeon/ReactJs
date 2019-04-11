import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ToggleItem from '../toggle-item';

class ToggleList extends PureComponent {
  static propTypes = {
    listClassStyle: PropTypes.string,
    itemContainerStyle: PropTypes.string,
    itemClassStyle: PropTypes.string,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        component: PropTypes.objectOf(Object).isRequired,
      }),
    ).isRequired,
  }

  state = {
    condition: this.props.items[0].id,
  }

  handleToggleFilter = (id) => {
    const { condition } = this.state;
    if (condition !== id) {
      this.setState(() => ({
        condition: id,
      }));
    }
  }

  render() {
    const {
      items, listClassStyle, itemClassStyle, itemContainerStyle,
    } = this.props;
    const { condition } = this.state;

    const toggleItems = items.map(item => (
      <li className={itemContainerStyle} key={item.id}>
        <ToggleItem
          itemClassStyle={itemClassStyle}
          selected={condition}
          component={item.component}
          id={item.id}
          toggleListener={this.handleToggleFilter}
        />
      </li>
    ));

    return (
      <ul className={listClassStyle}>
        {toggleItems}
      </ul>
    );
  }
}

export default ToggleList;
