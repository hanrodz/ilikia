import './App.css'
import React from 'react';
import {MainScreenAdmin} from './mainScreen/MainScreenAdmin';
import {ErrorPage} from './ErrorPage'
import AppLayout from './layout/AppLayout'
import { Settings } from './settings';
import { ExamenResultados } from './mainScreen/examenResultados';

import {Evaluation} from './evaluation/Minimental.js';
import {

  BrowserRouter as Router,
  Route,
  Routes,
  Link

} from "react-router-dom";
import { ExamenesPacientes } from './mainScreen/examenesPacientes';

function App() {
  return (

    <Router>
        <Routes>


          {/* <Route exact path='/' element = {<GridLogin />}/> // Raiz login screen */}

          <Route path="/" element = {<AppLayout/>}>

  
            {/* <Route path="/menu" element = {<ExamenesPacientes/>} />  */}
            <Route path="/menu" element = {<MainScreenAdmin/>} />
            <Route path="/config" element = {<Settings/>} />
            <Route path='menu/examenesPacientes/:id' element = {<ExamenesPacientes/>} />
            <Route path='examenesPacientes/examenResultados/:id' element = {<ExamenResultados/>} />


          </Route>



          <Route path='*' element={<ErrorPage/>} />

        </Routes>
    </Router>
    );
}

export default App;
