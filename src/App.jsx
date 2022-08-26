import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddUser from './components/AddUser';
import AllUsers from './components/AllUsers';
import EditUser from './components/EditUser';
import NavBar from './components/NavBar';
import ShowAllButton from './components/ShowAllButton';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <h1 style={{ textAlign: 'center' }}>Student Record Applicatoin</h1>
      <Routes>
        <Route path="/" element={<ShowAllButton />} />
        <Route path="/all" element={<AllUsers />} />
        <Route path="/add" element={<AddUser />} />
        <Route path="/edit/:id" element={<EditUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
