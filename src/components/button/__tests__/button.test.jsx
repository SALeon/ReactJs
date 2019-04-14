import React from 'react';
import { shallow } from 'enzyme';
import Button from '../index';

const mockProps = {
  clickHandler: jest.fn(),
  label: 'label',
};
describe('Button', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Button
      label={mockProps.label}
      clickHandler={mockProps.clickHandler}
    />);
  });

  it('Button snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('button click', () => {
    wrapper.find('.button').simulate('click');
    expect(mockProps.clickHandler).toHaveBeenCalled();
  });
});
