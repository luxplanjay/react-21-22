import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4040';

export async function fetchAuthors() {
  const { data } = await axios.get(`/authors`);
  return data;
}

export async function fetchBooks() {
  const { data } = await axios.get(`/books`);
  return data;
}

export async function fetchBookById(bookId) {
  const { data } = await axios.get(`/books/${bookId}?_expand=author`);
  return data;
}

export async function fetchBooksByAuthor(authorId) {
  const { data } = await axios.get(`/books?authorId=${authorId}`);
  return data;
}
