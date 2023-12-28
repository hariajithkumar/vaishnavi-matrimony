import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Domain/Login'
import Register from './Domain/Register'
import Home from './Domain/Home';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
