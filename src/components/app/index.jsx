import React from 'react';
import { Provider } from 'react-redux';
import store from '../../store';
import SearchFilter from '../search-filter';
import SortingFilter from '../sorting-filter';
import MovieList from '../movie-list';
import '../../styles/base.scss';
import './app.scss';
import data from '../../mock-response/list-response.json';
import MovieInfo from '../movie-info';
import ErrorBoundary from '../error-boundary';
import {
  filterItems, siteLabel, searchResult, sortingInfo,
} from '../../constants/staticData';


const App = () => (
  <ErrorBoundary>
    <Provider store={store}>
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
          <MovieList />
        </main>
        <footer className="footer">
          <div className="footer__title">{siteLabel}</div>
        </footer>
        <MovieInfo movieInfo={data.data[6]} />
      </div>
    </Provider>
  </ErrorBoundary>
);

export default App;

// https://reactjs-cdp.herokuapp.com/movies?sortBy=rating&sortOrder=asc&search=love&searchBy=genres&filter=action&offset=20&limit=20
