import { BookList, Contact, Home } from './pages';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/books' element={<BookList />} />
    </Routes>
  );
}

export default App;
