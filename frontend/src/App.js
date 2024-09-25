import {BrowserRouter, Route,Routes} from "react-router-dom"
import './App.css';
import Router from "./components/Router";


function App(props) {
  return (
       <BrowserRouter>

            <Router/>
            
       </BrowserRouter>
  );
}

export default App;
