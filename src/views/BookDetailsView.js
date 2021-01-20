import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useLocation, Link } from 'react-router-dom';
import PageHeading from '../components/PageHeading/PageHeading';
import { booksOperations } from '../redux/books';
import { booksSelectors } from '../redux/books/booksSlice';
import { authorsSelectors } from '../redux/authors/authorsSlice';

export default function BookDetailsView() {
  const location = useLocation();
  const dispatch = useDispatch();
  const { slug } = useParams();
  const bookId = slug.match(/[a-z0-9]+$/)[0];
  const book = useSelector(state =>
    booksSelectors.selectById(state, Number(bookId)),
  );
  const author = useSelector(state =>
    authorsSelectors.selectById(state, book?.author),
  );

  useEffect(() => {
    dispatch(booksOperations.fetchBookById(bookId));
  }, [bookId, dispatch]);

  return (
    <>
      <PageHeading text={`Книга ${slug}`} />

      {book && (
        <>
          <Link to={location?.state?.from?.location ?? '/books'}>
            {location?.state?.from?.label ?? 'Назад'}
          </Link>
          <hr />

          <img src={book.imgUrl} alt={book.title} />
          <h2>{book.title}</h2>
          <p>Автор: {author.name}</p>
          <p>{book.descr}</p>
        </>
      )}
    </>
  );
}
