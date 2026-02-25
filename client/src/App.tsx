import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/home';
import { LoginPage } from './pages/login';
import { MainPage } from './pages/main';



function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/main' element={<MainPage />} />
      </Routes>
    </Router>
  );
}

export default App
