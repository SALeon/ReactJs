import React from 'react';
import { shallow } from 'enzyme';
import MovieInfo from '../index';

const movieInfo = {
  poster_path: 'poster',
  release_date: '40-80',
  title: 'title',
  overview: 'overview',
};

it('render the MovieInfo component', () => {
  const renderedMovieInfo = shallow(<MovieInfo movieInfo={movieInfo} />);
  expect(renderedMovieInfo).toMatchSnapshot();
});
