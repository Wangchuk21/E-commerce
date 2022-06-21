import React from 'react';
import { Route, Routes} from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/hompage.component';
import ShopPage from './pages/shop-page/shopPage.component.jsx';

function App() {
  return (
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/shop' element={<ShopPage/>}/>
      </Routes>
  );
}

export default App;
