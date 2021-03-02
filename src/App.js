import React from "react";
import './App.css';
import Mars from './Mars';
import Coolstuff from './Coolstuff';
import AboutDev from './AboutDev';
import { Route, Link } from 'react-router-dom';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <Route to exact path="/" component={Home} />


      <Route to exact path="/Mars" component={Mars} />
      <Route to exact path="/Coolstuff" component={Coolstuff} />
      <Route to exact path="/AboutDev" component={AboutDev} />

    </div>
  );
}

export default App;
