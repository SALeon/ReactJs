import React from 'react';
import { shallow, mount } from 'enzyme';
import ToggleList from '../index';

const mockProps = [
  {
    id: '1',
    component: (<div>mock</div>),
  },
  {
    id: '2',
    component: (<div>mock</div>),
  },
  {
    id: '3',
    component: (<div>mock</div>),
  },
];

describe('ToggleList', () => {
  describe('with shallow', () => {
    let shallowWrapper;
    beforeEach(() => {
      shallowWrapper = shallow(<ToggleList items={mockProps} />);
    });

    it('set default selected item', () => {
      expect(shallowWrapper.state().condition).toBe(mockProps[0].id);
    });

    it('snapshot', () => {
      expect(shallowWrapper).toMatchSnapshot();
    });
  });

  describe('with mount', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = mount(<ToggleList items={mockProps} />);
    });

    it('toggle filter', () => {
      wrapper.find('.toggle-item').at(1).simulate('click');
      expect(wrapper.state().condition).toBe(mockProps[1].id);
    });

    it('not toggle filter', () => {
      const sourceState = `${wrapper.state().condition}`;
      wrapper.find('.toggle-item').at(0).simulate('click');
      expect(wrapper.state().condition).toBe(sourceState);
    });
  });
});
