import { Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar/navbar.component';
import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Navbar />

      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
};

export default App;
