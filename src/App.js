import './App.css';
import Homepage from './Homepage';
import Login from './components/Login';
import Signup from './components/Signup';
import Menu from './components/Menu';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PageLoading from './utils/PageLoading';
import { useState } from 'react';
import PageNotFound from './utils/PageNotFound';


function App() {
  // HOOKS
  const [pageLoading, setPageLoading] = useState(true);

  setTimeout(() => {
    setPageLoading(false);
  }, 2000);

  if (pageLoading) {
    return (
      <div className='d-flex justify-content-center align-items-center' style={{minHeight: '100vh'}}>
        <PageLoading />
      </div>
    );
  }

  return (
    <div className='container my-5 p-4 rounded-5 shadow'>
      <Navbar />
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='*' element={<PageNotFound />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/menu' element={<Menu />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
