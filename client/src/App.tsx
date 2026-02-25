import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/home';
import { Loginpage } from './pages/login';



function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Loginpage />} />
      </Routes>
    </Router>
  );
}

export default App
