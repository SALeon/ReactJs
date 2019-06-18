import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ToggleItem from '../toggle-item';

class ToggleList extends PureComponent {
  static propTypes = {
    toggleHandler: PropTypes.func.isRequired,
    storePathName: PropTypes.string.isRequired,
    listClassStyle: PropTypes.string,
    itemContainerStyle: PropTypes.string,
    itemClassStyle: PropTypes.string,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.string.isRequired,
        component: PropTypes.objectOf(Object).isRequired,
      }),
    ).isRequired,
  }

  render() {
    const {
      items, listClassStyle, itemClassStyle, itemContainerStyle, toggleHandler, storePathName,
    } = this.props;
    console.log('togglelist ---');

    const toggleItems = items.map(item => (
      <li className={itemContainerStyle} key={`${item.value}-${storePathName}`}>
        <ToggleItem
          itemClassStyle={itemClassStyle}
          component={item.component}
          value={item.value}
          toggleHandler={toggleHandler}
          storePathName={storePathName}
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
