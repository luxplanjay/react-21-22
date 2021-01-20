import { useEffect, lazy, Suspense } from 'react';
import { NavLink, Route, useRouteMatch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { authorsOperations } from '../redux/authors';
import { authorsSelectors } from '../redux/authors/authorsSlice';
import PageHeading from '../components/PageHeading/PageHeading';

const AuthorSubView = lazy(() =>
  import('./AuthorSubView.js' /* webpackChunkName: "authors-subview"*/),
);

export default function AuthorsView() {
  const { url, path } = useRouteMatch();
  const dispatch = useDispatch();
  const authors = useSelector(authorsSelectors.selectAll);

  useEffect(() => {
    dispatch(authorsOperations.fetchAuthors());
  }, [dispatch]);

  return (
    <>
      <PageHeading text="Авторы" />

      {authors && (
        <ul>
          {authors.map(author => (
            <li key={author.id}>
              <NavLink to={`${url}/${author.id}`}>{author.name}</NavLink>
            </li>
          ))}
        </ul>
      )}
      <hr />

      <Suspense fallback={<h1>Загружаем подмаршрут...</h1>}>
        <Route path={`${path}/:authorId`}>
          <AuthorSubView />
        </Route>
      </Suspense>
    </>
  );
}
