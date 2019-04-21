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
        name: PropTypes.string.isRequired,
        component: PropTypes.objectOf(Object).isRequired,
      }),
    ).isRequired,
  }

  state = {
    condition: this.props.items[0].id,
  }

  render() {
    const {
      items, listClassStyle, itemClassStyle, itemContainerStyle,
    } = this.props;
    console.log('togglelist ---');

    const { condition } = this.state;
    const { toggleHandler, storePathName } = this.props;

    const toggleItems = items.map(item => (
      <li className={itemContainerStyle} key={`${item.name}-${storePathName}`}>
        <ToggleItem
          itemClassStyle={itemClassStyle}
          selectedId={condition}
          component={item.component}
          name={item.name}
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
