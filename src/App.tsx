import { Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout/MainLayout';
import AuthLayout from './components/layout/AuthLayout/AuthLayout';
import Search from './pages/Search/Search';
import Home from './pages/Home/Home';
import Movies from './pages/Movies/Movies';
import MovieDetail from './pages/MovieDetail/MovieDetail';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

import {initDB} from './data/db';
initDB();
export default function App() {
  return (
    <>
    <Routes>
      <Route element={<MainLayout/>}>
        <Route path='/' element={<Home />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/movies/:id' element={<MovieDetail/>} />
        <Route path='/search' element={<Search />}/>
      </Route>

      <Route element={<AuthLayout/>}>
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>}/>
      </Route>
    </Routes>
      
    </>
    
  );
}
