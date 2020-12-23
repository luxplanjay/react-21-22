import { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import AppBar from './components/AppBar/AppBar';
import Container from './components/Container/Container';
// import HomeView from './views/HomeView';
// import AuthorsView from './views/AuthorsView';
// import BooksView from './views/BooksView';
// import BookDetailsView from './views/BookDetailsView';
// import NotFoundView from './views/NotFoundView';
// import TableView from './views/TableView';

const HomeView = lazy(() =>
  import('./views/HomeView.js' /* webpackChunkName: "home-view" */),
);
const AuthorsView = lazy(() =>
  import('./views/AuthorsView.js' /* webpackChunkName: "authors-view" */),
);
const BooksView = lazy(() => import('./views/BooksView.js'));
const BookDetailsView = lazy(() => import('./views/BookDetailsView.js'));
const NotFoundView = lazy(() => import('./views/NotFoundView.js'));
const TableView = lazy(() => import('./views/TableView.js'));

export default function App() {
  return (
    <Container>
      <AppBar />

      <Suspense fallback={<h1>ЗАГРУЖАЕМ МАРШРУТ...</h1>}>
        <Switch>
          <Route path="/" exact>
            <HomeView />
          </Route>

          <Route path="/authors">
            <AuthorsView />
          </Route>

          <Route path="/books" exact>
            <BooksView />
          </Route>

          <Route path="/books/:bookId">
            <BookDetailsView />
          </Route>

          <Route path="/table">
            <TableView />
          </Route>

          <Route>
            <NotFoundView />
          </Route>
        </Switch>
      </Suspense>
    </Container>
  );
}
