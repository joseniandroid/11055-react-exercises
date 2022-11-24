import { Link } from 'react-router-dom';

export const BookList = () => {
  return (
    <>
      <h2>List of Books</h2>
      <Link to='/books/1'>Book 1</Link>
      <span> | </span>
      <Link to='/books/2'>Book 2</Link>
      <span> | </span>
      <Link to='/books/3'>Book 3</Link>
    </>
  );
};
