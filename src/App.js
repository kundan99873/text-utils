// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Alert from './componentd/Alert';
// import About from './componentd/About';
import Navbar from './componentd/Navbar';
import TextForm from './componentd/TextForm';

// import {
//   BrowserRouter as Router,
//   // Switch,
//   Route,
//   // Link,
//   Routes
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message) => {
    setAlert(message)
    setTimeout(() => {
      setAlert(null)
    }, 1000);
  }

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white"
      document.body.style.color = "black"
      showAlert("Dark mode disabled")
    }
    else {
      setMode("dark");
      document.body.style.backgroundColor = "black"
      document.body.style.color = "white"
      showAlert("Dark mode enabled")
    }
  }

  return (
    <>
      {/* <Router> */}
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <TextForm showAlert={showAlert} place="Enter any text " heading="Enter text to analyses : " />
        {/* 
        <div className="container my-3">
          <Routes>
            <Route path="/about"
              element = {<About />}>
            </Route>
            <Route path="/"
              element = {<TextForm showAlert={showAlert} place="Enter any text " heading="Enter text to analyses : " />}>

            </Route>
          </Routes>
        </div> */}
      {/* </Router> */}

    </>
  );
}

export default App;
