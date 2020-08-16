import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Checkout from "./Components/Checkout/Checkout";
import Login from "./Components/Login/Login";
import { useStateValue } from "./Context/StateProvider";
import { auth } from "./firebase";
const App = () => {
  return (
    <div>
      <h1>Hello Basic React Setup</h1>
    </div>  
  );
};

export default App;
