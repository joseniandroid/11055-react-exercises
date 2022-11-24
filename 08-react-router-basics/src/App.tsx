import { Contact, Home, NotFound } from './pages';
import { Link, Route, Routes, useRoutes } from 'react-router-dom';

import { BookRoutes } from './routes';

function App() {
  const elements = useRoutes([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/books/*',
      element: <BookRoutes />,
    },
    {
      path: '/contact',
      element: <Contact />,
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ]);

  return (
    <>
      {/* <Routes>
        <Route path='/books' element={<h1>Extra Content for /books</h1>} />
      </Routes> */}

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

      {elements}

      {/* <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/books/*' element={<BookRoutes />} />
        <Route path='*' element={<NotFound />} />
      </Routes> */}
    </>
  );
}

export default App;
