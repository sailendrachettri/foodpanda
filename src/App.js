import './App.css';
import Homepage from './Homepage';
import Login from './components/Login';
import Signup from './components/Signup';
import Menu from './components/Menu';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className='container my-5 p-4 rounded-5 shadow'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} /> 
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/menu' element={<Menu />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
