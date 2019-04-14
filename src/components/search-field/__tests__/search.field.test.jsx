import React from 'react';
import { shallow } from 'enzyme';
import SearchField from '../index';

const placeholder = 'placeholder';
const inputHandler = () => ({ });

it('render SearchField component', () => {
  const component = shallow(
    <SearchField
      placeholder={placeholder}
      inputHandler={inputHandler}
    />,
  );

  expect(component).toMatchSnapshot();
});
