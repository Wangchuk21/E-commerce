import React from 'react';
import { Route, Routes} from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/hompage.component';
import ShopPage from './pages/shop-page/shopPage.component.jsx';
import Header from './component/header-component/header.component';

function App() {
  return (
    
     <div>
        <Header/>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/shop' element={<ShopPage/>}/>
          </Routes>
     </div>
  );
}

export default App;
