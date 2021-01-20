import { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { booksOperations } from '../redux/books';
import { booksSelectors } from '../redux/books/booksSlice';
import { authorsSelectors } from '../redux/authors/authorsSlice';

export default function AuthorSubView() {
  const location = useLocation();
  const { authorId } = useParams();
  const dispatch = useDispatch();
  const books = useSelector(state =>
    booksSelectors.getBooksByAuthor(state, Number(authorId)),
  );
  const { name } = useSelector(state =>
    authorsSelectors.selectById(state, Number(authorId)),
  );

  useEffect(() => {
    dispatch(booksOperations.fetchBooksByAuthor(authorId));
  }, [authorId, dispatch]);

  return (
    <>
      <h1>{name}</h1>

      {books && (
        <ul>
          {books.map(book => (
            <li key={book.id}>
              <Link
                to={{
                  pathname: `/books/${book.id}`,
                  state: {
                    from: {
                      location,
                      label: 'Назад к автору',
                    },
                  },
                }}
              >
                {book.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
