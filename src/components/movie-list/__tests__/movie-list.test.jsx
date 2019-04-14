import React from 'react';
import { shallow } from 'enzyme';
import MovieList from '../index';

const mockProps = [
  {
    id: 'id-1',
    title: 'title-1',
    release_date: 'release_date-1',
    poster_path: 'poster_path-1',
    genres: ['genres-1'],
    vote_count: 1,
  },
  {
    id: 'id-2',
    title: 'title-2',
    release_date: 'release_date-2',
    poster_path: 'poster_path-2',
    genres: ['genres-2'],
    vote_count: 2,
  },
  {
    id: 'id-3',
    title: 'title-3',
    release_date: 'release_date-3',
    poster_path: 'poster_path-3',
    genres: ['genres-3'],
    vote_count: 3,
  },
];

it('MovieList snapshot', () => {
  const wrapper = shallow(<MovieList movies={mockProps} />);
  expect(wrapper).toMatchSnapshot();
});
