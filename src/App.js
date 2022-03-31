import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Homepage from './pages/Homepage';
import EditCategory from './pages/EditCategory';
import DetailProduct from './pages/DetailProduct';
import EditProduct from './pages/EditProduct';


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
    </Routes>
  );
}

export default App;
