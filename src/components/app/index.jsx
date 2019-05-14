import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import store from '../../store';
import MovieList from '../movie-list';
import ErrorBoundary from '../error-boundary';
import RoutMovieInfo from '../routes/route-movie-info';
import MoviesHeader from '../movies-header';
import MovieInfoHeader from '../movie-info-header';

import { filterItems, siteLabel, searchResult, searchLabel, sortingInfo, genreInfoLabel } from '../../constants/staticData';
import '../../styles/base.scss';
import './app.scss';


const routes = [
  {
    path: '/movies',
    Component: MoviesHeader,
    labels: { siteLabel, filterItems, searchLabel, searchResult, sortingInfo },
  },
  {
    path: '/movies/:id',
    Component: MovieInfoHeader,
    labels: { siteLabel, searchLabel, genreInfoLabel },
  },
];

const App = () => (
  <BrowserRouter>

    <Provider store={store}>
      <ErrorBoundary>
        <div className="app-container">
          <div className="header-container">
            <Route render={({ location }) => (
              <TransitionGroup component={null}>
                <CSSTransition
                  key={location.key}
                  classNames="header-"
                  timeout={6000}
                >
                  <Switch location={location}>
                    <Route
                      path="/movies"
                      render={props => (
                        <MoviesHeader
                          {...props}
                          labels={{
                            siteLabel,
                            filterItems,
                            searchLabel,
                            searchResult,
                            sortingInfo,
                          }}
                        />
                      )}
                      exact
                    />
                    <Route
                      key="/movies/:id"
                      path="/movies/:id"
                      render={props => (
                        <RoutMovieInfo
                          {...props}
                          labels={{ siteLabel, searchLabel, genreInfoLabel }}
                        />
                      )}

                      // render={({ match }) => {
                      //   console.log(match);
                      //   return (
                      //     <CSSTransition
                      //       in={match !== null}
                      //       mountOnEnter
                      //       unmountOnExit
                      //       classNames="movie-info__header-"
                      //       timeout={6000}
                      //     >
                      //       <MovieInfoHeader
                      //         // {...props}
                      //         childProps={{ id: match.params.id }}
                      //         labels={{ siteLabel, searchLabel, genreInfoLabel }}
                      //       />
                      //     </CSSTransition>
                      //   );
                      // }}


                      // {routes.map(({ path, Component, labels }) => (
                      //   <Route
                      //     key={path}
                      //     exact
                      //     path={path}
                      //   >
                      //     {({ match }) => (
                      //       <CSSTransition
                      //         in={match != null}
                      //         timeout={6000}
                      //         classNames="header-"
                      //         unmountOnExit
                      //       >
                      //         <Component labels={labels} />
                      //       </CSSTransition>
                      //     )
                      //   }
                      //   </Route>
                      // ))}


                      exact
                    />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            )}
            />
          </div>

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
