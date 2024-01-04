import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Domain/Login'
import Register from './Domain/Register'
import Home from './Domain/Home';
import RegistrationForm from './Domain/RegistrationForm';
import Package from './Domain/Package';
import Contact from './Domain/Contact';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='package' element={<Package />} />
        <Route path='contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/registerForm' element={<RegistrationForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
