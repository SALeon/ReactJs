import React from 'react';
import { shallow } from 'enzyme';
import ToggleItem from '../index';

const id = 'id';
const innerComponent = <div>mock</div>;
const anotherId = 'selected';
const toggleListener = jest.fn();

describe('ToggleItem', () => {
  it('state not selected', () => {
    const component = shallow(
      <ToggleItem
        id={id}
        component={innerComponent}
        toggleListener={toggleListener}
        selectedId={anotherId}
      />,
    );
    expect(component.state().isSelected).toBeFalsy();
  });

  it('state selected', () => {
    const component = shallow(
      <ToggleItem
        id={id}
        component={innerComponent}
        toggleListener={toggleListener}
        selectedId={anotherId}
      />,
    );
    expect(component.state().isSelected).toBeFalsy();
  });

  it('snapshot initial component', () => {
    const component = shallow(
      <ToggleItem
        id={id}
        component={innerComponent}
        toggleListener={toggleListener}
        selectedId={id}
      />,
    );
    expect(component).toMatchSnapshot();
  });

  it('toggle to unselected state', () => {
    const component = shallow(
      <ToggleItem
        id={id}
        component={innerComponent}
        toggleListener={toggleListener}
        selectedId={id}
      />,
    );
    component.setProps({ selectedId: anotherId });
    expect(component.state().isSelected).toBeFalsy();
  });

  it('call click handler of the component ', () => {
    const clickFunc = jest.fn();

    const component = shallow(
      <ToggleItem
        id={id}
        component={innerComponent}
        toggleListener={clickFunc}
        selectedId={anotherId}
      />,
    );
    component.find('.toggle-item').simulate('click');
    expect(clickFunc).toHaveBeenCalledWith(id);
  });
});
