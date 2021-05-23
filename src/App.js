import React from 'react';
import { Route } from 'react-router';
import './App.css';

import HomePage from './pages/homepage/homepage.component';

import ShopPage from './pages/shop/shop.component.jsx';

function App() {
  return (
    <div>
      <switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/Shop' component={ShopPage} />

      </switch>
      
    </div>
  );
}

export default App;
