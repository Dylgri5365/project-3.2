import React, { Component } from "react";
import {
  Route, Routes, 
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Secondpage from "./Secondpage";
import Foximage from "./Foximage";
import mitlogo from './mitlogo.png';
 
class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div> <center> 
         
          <h1>
            <div className="Foximage">
                <img alt="" src={mitlogo} />
                    <p></p>

                </div>
     
                 Center For Advanced Visual Studies Special Collection
                 
                 </h1>
      
          </center>
          
     
    

          <center>
          <ul className="header">
          
            <li><NavLink to="/Firstpage">Works</NavLink></li>
            <li><NavLink to="/Secondpage">People</NavLink></li> 
            <li><NavLink to="/Foximage">About</NavLink></li>
          </ul>
          <div className="content">
          <Routes>
            <Route path="/Firstpage" element={<Home/>}/>
            <Route path="/Secondpage" element={<Secondpage/>}/>
            <Route path="/Foximage" element={<Foximage/>}/>
            </Routes>
            
          </div>
          </center>
        </div>
      </HashRouter>
    );
  }
}
 
export default Main;