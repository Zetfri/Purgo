import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Nav from './components/nav';
import Home from './components/home';

const App = () => {
  return (
    <div>
      <Nav/>
        <Routes>
          <Route path='/Home' element={<Home/>}/>
        </Routes>
    </div>
  );
}

export default App;
