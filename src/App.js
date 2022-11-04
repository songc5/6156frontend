import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Students from './components/students/Students';
import MainNavbar from './components/MainNavbar';
import Contacts from './components/contacts/Contacts';
function App() {
  return (
    <>
      <MainNavbar />
      <Routes>
        <Route exact path='/' element={<h1>Welcome</h1>}></Route>
        <Route path='/students' element={<Students />}></Route>
        <Route path='/contacts/:uni' element={<Contacts />}></Route>
      </Routes>
    </>
  );
}

export default App;
