import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Homepage from './pages/Homepage';
import EditCategory from './pages/EditCategory';
import DetailProduct from './pages/DetailProduct';
import EditProduct from './pages/EditProduct';
import ListCategory from './pages/ListCategory';
import ListProduct from './pages/ListProduct';
import AdminComplain from './pages/AdminComplain';
import UserComplain from './pages/UserComplain';


function App() {
  return (

    <Routes>
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/register" element={<Register />} />
      <Route exact path="/profile" element={<Profile />} />
      <Route exact path="/homepage" element={<Homepage />} />
      <Route exact path="/edit-category" element={<EditCategory />} />
      <Route exact path="/detail-product" element={<DetailProduct />} />
      <Route exact path="/edit-product" element={<EditProduct />} />
      <Route exact path="/list-category" element={<ListCategory />} />
      <Route exact path="/list-product" element={<ListProduct />} />
      <Route exact path="/admin-complaint" element={<AdminComplain />} />
      <Route exact path="/user-complaint" element={<UserComplain />} />
    </Routes>
  );
}

export default App;
