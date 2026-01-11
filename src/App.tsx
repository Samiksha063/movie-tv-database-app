import { Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout/MainLayout';
import AuthLayout from './components/layout/AuthLayout/AuthLayout';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
export default function App() {
  return (
    <>
    <Routes>
      <Route element={<MainLayout/>}>
        <Route path='/' element={<Home />} />
      </Route>

      <Route element={<AuthLayout/>}>
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>}/>
      </Route>
    </Routes>
      
    </>
    
  );
}
