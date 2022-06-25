import React from 'react';
import { Routes, Route } from "react-router-dom";

//pages
import Home from "./pages/Home";
import List from "./pages/List";
import Hotel from "./pages/Hotel";

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/hotels' element={<List />} />
      <Route path='/hotels/:id' element={<Hotel />} />
    </Routes>
  )
}

export default App
