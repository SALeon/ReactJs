import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import SelectedItem from '../selected-item';


class SelectedList extends PureComponent {
  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        label: PropTypes.string,
      }),
    ).isRequired,
  }

  render() {
    const { items } = this.props;
    const list = items.map((item, index) => (
      <li key={item.id}>
        <SelectedItem
          label={item.label}
          defaultItemNum={index}
        />
      </li>
    ));

    return (
      <ul>
        {list}
      </ul>
    );
  }
}

export default SelectedList;
