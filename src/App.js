import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from "./pages/Home";
import CodeComplier from './pages/CodeComplier';
import About from './pages/About';
import CodeRoom from './pages/CodeRoom';
import WebDevEnvironment from './pages/WebDevEnvironment';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/CodeComplier" element={<CodeComplier />} />
        <Route path="/CodeRoom" element={<CodeRoom />} />
        <Route path="/WebDevEnvironment" element={<WebDevEnvironment />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
