import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './pages/Login';

function App() {
  return (

    <Routes>
      <Route exact path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
