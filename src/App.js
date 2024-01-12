import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Body from './componentes/Body/Body';
import { Login } from './componentes/Login';

function App() {
  return (
    <Router>
      <div className="Body">
        <Routes>
          <Route exact path="/" element={<Body />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;