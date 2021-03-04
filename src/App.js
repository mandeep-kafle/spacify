import React from "react";
import './App.css';
import Mars from './Mars';
import { Route} from 'react-router-dom';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <Route to exact path="/" component={Home} />


      <Route to exact path="/Mars" component={Mars} />

    </div>
  );
}

export default App;
