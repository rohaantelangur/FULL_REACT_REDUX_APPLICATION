import './App.css';
import { Book } from './Components/Book';
import { Admin } from './Components/Admin';
import { EditBook } from './Components/EditBook';
import { SingleBook } from './Components/SingleBook';
import { Route, Routes } from 'react-router-dom';
import { Login } from './Components/Login';
import RequAuth from './HOF/RequAuth';

function App() {
  return (
    <Routes>
          <Route path="/" element={<Book />} />
          <Route path="/:id" element={<SingleBook />} />
          <Route path="/:id/edit" element={<RequAuth><EditBook/></RequAuth>} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<h3>Page Not Found</h3>} />
    </Routes>
  );
}

export default App;
