import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import MainPage from './components/MainPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/" element={<Navigate to="/auth/login" />} />
          <Route path="/auth/login" element={<LoginPage />} />
          <Route path="/home" element={<MainPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
