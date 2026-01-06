import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
export default function App() {
  return (
    <>
    <div className="app">
      <Header />
      
      <div className="content">
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>}/>
      </Routes>
      </div>
      
      <Footer />
    </div>
      
    </>
    
  );
}
