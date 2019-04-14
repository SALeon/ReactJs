import React from 'react';
import { shallow } from 'enzyme';
import MovieCard from '../index';

const movieInfo = {
  id: '2',
  title: 'title',
  releaseDate: '2017-08',
  poster: 'https://image.tmdb.org/t/p/w500/ldoY4fTZkGISMidNw60GHoNdgP8.jpg',
  genres: ['ganre1', 'genre2'],
  voteCount: 9,
};

it('render MovieCard Component', () => {
  const component = shallow(<MovieCard movieInfo={movieInfo} />);
  expect(component).toMatchSnapshot();
});
