import React from 'react';
import { Route, Routes } from 'react-router';
import './App.css';
import { Favourites } from './pages/Favourites';
import { Home } from './pages/Home';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/favourites" element={ <Favourites /> } />
        <Route path="/*" element={ <Home /> } />
      </Routes>
    </div>
  );
}

export default App;
