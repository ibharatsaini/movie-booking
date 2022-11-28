import {BrowserRouter, Route,Routes} from "react-router-dom"
import './App.css';
import Header from "./components/Header/Header";
import SignUp from "./components/Join/SignUp";
import Router from "./components/Router";


function App(props) {
  return (
       <BrowserRouter>

            <Router/>
            
       </BrowserRouter>
  );
}

export default App;
