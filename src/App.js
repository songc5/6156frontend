import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Students from './components/students/Students';
import MainNavbar from './components/MainNavbar';

function App() {
  return (
    <>
      <MainNavbar />
      <Routes>
        <Route path='/' element={<Students />}></Route>
        <Route path='/students' element={<Students />}></Route>
      </Routes>
    </>
  );
}

export default App;
