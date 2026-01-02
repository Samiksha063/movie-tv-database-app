import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Register from './pages/Register/Register';
import Home from './pages/Home/Home'
export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </>
    
  );
}
