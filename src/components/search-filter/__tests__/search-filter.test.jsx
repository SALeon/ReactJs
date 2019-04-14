import React from 'react';
import { shallow, mount } from 'enzyme';
import SearchFilter from '../index';

const mockFilterItems = [{ id: '1', label: 'TITLE' }, { id: '2', label: 'GENRE' }];

describe('SearchFilter', () => {
  it('snapshot', () => {
    const wrapper = shallow(
      <SearchFilter
        searchConditionsItems={mockFilterItems}
        inputPlaceholder="enter search"
        searchLabel="SEARCH"
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  describe('with enzyme mount', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = mount(
        <SearchFilter
          searchConditionsItems={mockFilterItems}
          inputPlaceholder="enter search"
          searchLabel="SEARCH"
        />,
      );
    });

    it('check input', () => {
      const mockInput = 'data';
      wrapper.find('.search-field').simulate('change', { target: { value: mockInput } });
      expect(wrapper.state().inputValue).toBe(mockInput);
    });

    it('check submit', () => {
      wrapper.find('.filter__submit-button').simulate('click');
      // TODO: find out
      // wrapper.instance().handleSubmit();
      // expect(wrapper.instance().handleSubmit).toHaveBeenCalled();
    });
  });
});
