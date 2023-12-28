import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Domain/Login'
import Register from './Domain/Register'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
