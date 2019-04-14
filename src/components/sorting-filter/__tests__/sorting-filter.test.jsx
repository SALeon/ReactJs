import React from 'react';
import { shallow } from 'enzyme';
import SortingFilter from '../index';

const mockSortingInfo = {
  label: 'Sort by',
  items: [{ id: '1', label: 'release' }, { id: '2', label: 'date' }, { id: '3', label: 'rating' }],
};

it('SortingFilter snapshot', () => {
  const wrapper = shallow(<SortingFilter sortingData={mockSortingInfo} />);
  expect(wrapper).toMatchSnapshot();
});
