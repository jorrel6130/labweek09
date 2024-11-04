// Jorrel Tigbayan
// 101329925
import React from "react";
import logo from './logo.svg';
import './App.css';
import Name from "./components/name/Name";
import StudentID from "./components/studentid/StudentID";

function App() {
  return (
    <React.Fragment>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to Fullstack Development - I</h2>
        <h3>React JS Programming Week09 Lab exercise</h3>
        <StudentID studentID="101329925"/>
        <Name firstName="Jorrel" lastName="Tigbayan"/>
        <p className="GBC">Test CSS Object</p>
      </header>
    </div>

    </React.Fragment>
  );
}

export default App;
