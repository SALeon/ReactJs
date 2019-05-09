import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import store from '../../store';
import MovieList from '../movie-list';
import ErrorBoundary from '../error-boundary';
import RoutMovieInfo from '../routes/route-movie-info';
import MoviesHeader from '../movies-header';
import { filterItems, siteLabel, searchResult, searchLabel, sortingInfo, genreInfoLabel } from '../../constants/staticData';
import '../../styles/base.scss';
import './app.scss';


const App = () => (
  <BrowserRouter>

    <Provider store={store}>
      <ErrorBoundary>
        <div className="app-container">
          <Route render={({ location }) => (
            <TransitionGroup component={null}>
              <CSSTransition
                key={location.key}
                classNames="header-"
                timeout={4000}
              >
                <Switch location={location}>
                  <Route
                    path="/movies"
                    render={props => (
                      <MoviesHeader
                        {...props}
                        labels={{ siteLabel, filterItems, searchLabel, searchResult, sortingInfo }}
                      />
                    )}
                    exact
                  />
                  <Route
                    path="/movies/:id"
                    render={props => (
                      <RoutMovieInfo
                        {...props}
                        labels={{ siteLabel, searchLabel, genreInfoLabel }}
                      />
                    )}
                    exact
                  />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
          />
          <main className="main">
            <MovieList />
          </main>
          <footer className="footer">
            <div className="footer__title">{siteLabel}</div>
          </footer>
        </div>
      </ErrorBoundary>
    </Provider>
  </BrowserRouter>

);

export default App;

// https://reactjs-cdp.herokuapp.com/movies?sortBy=rating&sortOrder=asc&search=love&searchBy=genres&filter=action&offset=20&limit=20
