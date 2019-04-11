import React from 'react';
import SearchFilter from '../search-filter';
import SortingFilter from '../sorting-filter';
import MovieList from '../movie-list';
import '../../styles/base.scss';
import './app.scss';
import data from '../../mock-response/list-response.json';
import MovieInfo from '../movie-info';

const filterItems = [
  { id: '1', label: 'TITLE' },
  { id: '2', label: 'GENRE' },
];

const sortingInfo = {
  label: 'Sort by',
  items: [
    { id: '1', label: 'release' },
    { id: '2', label: 'date' },
    { id: '3', label: 'rating' },
  ],
};

const searchResult = '7 movies found';
const siteLabel = 'nerflixroulette';

const App = () => (
  <div className="app-container">
    <header className="header">
      <div className="header__title">{siteLabel}</div>
      <SearchFilter
        searchConditionsItems={filterItems}
        inputPlaceholder="enter search"
        searchLabel="SEARCH"
      />
      <div className="header__row">
        <div className="search-result">{searchResult}</div>
        <SortingFilter sortingData={sortingInfo} />
      </div>
    </header>
    <main className="main">
      <MovieList movies={data.data} />
    </main>
    <footer className="footer">
      <div className="footer__title">{siteLabel}</div>
    </footer>
    <MovieInfo movieInfo={data.data[6]} />
  </div>
);

export default App;
