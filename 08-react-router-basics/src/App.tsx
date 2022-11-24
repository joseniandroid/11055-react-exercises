import { Book, BookList, Contact, Home, NewBook, NotFound } from './pages';
import { Link, Route, Routes } from 'react-router-dom';

import { BooksLayout } from './layouts';

function App() {
  return (
    <>
      <Routes>
        <Route path='/books' element={<h1>Extra Content for /books</h1>} />
      </Routes>

      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/books'>Books</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/books' element={<BooksLayout />}>
          <Route index element={<BookList />} />
          <Route path=':id' element={<Book />} />
          <Route path='new' element={<NewBook />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
