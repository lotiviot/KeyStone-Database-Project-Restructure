//import logo from './logo.svg';
//import './App.css';
//import {CarsGrid} from './carsgrid';

//function App() {
  //return (
      //<CarsGrid />
  //);
//}
//export default App;

//^^ above is the App.js in the tutorial
import React from 'react';
import './App.scss';
import AdminBase from 'admin'
// export of app from AdminBase
function App() {
  return (
    <div className="App">
      <AdminBase />
    </div>
  );
}

export default App;
