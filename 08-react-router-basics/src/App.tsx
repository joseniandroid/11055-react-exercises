import { Contact, Home, NotFound } from './pages';
import { Link, Route, Routes } from 'react-router-dom';

import { BookRoutes } from './routes';

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
        <Route path='/books/*' element={<BookRoutes />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
