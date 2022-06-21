import React from 'react';
import { Route, Routes} from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/hompage.component';

const Hats=()=>(
  <div>
    <h1>
      Hats
    </h1>
  </div>
)


function App() {
  return (
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/hats' element={<Hats/>}/>
      </Routes>
  );
}

export default App;
