import { Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar/navbar.component';
import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import './App.scss';
import ProductPage from './pages/productpage/productpage.component';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/products" component={ProductPage} />
      </Switch>
    </div>
  );
};

export default App;
