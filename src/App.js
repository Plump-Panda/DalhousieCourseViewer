import React from 'react';
/* import logo from './logo.svg';
import './App.css'; */
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter as Router,Route} from "react-router-dom";

import Navbar from "./components/navbar.component";
import FirstYear from "./components/regularCourses/first-year.component";
import SecondYear from "./components/regularCourses/second-year.component";
import ThirdYear from "./components/regularCourses/third-year.component";
import FourthYear from "./components/regularCourses/fourth-year.component";
import LevelSix from "./components/otherCourses/level-six.component";
import LevelSeven from "./components/otherCourses/level-seven.component";
import LevelEight from "./components/otherCourses/level-eight.component";
import LevelNine from "./components/otherCourses/level-nine.component";
import AllCourses from "./components/all-courses.component";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/" exact component={AllCourses}/>
        <Route path="/first-year" exact component={FirstYear}/>
        <Route path="/second-year" exact component={SecondYear}/>
        <Route path="/third-year" exact component={ThirdYear}/>
        <Route path="/fourth-year" exact component={FourthYear}/>
        <Route path="/level-six" exact component={LevelSix}/>
        <Route path="/level-seven" exact component={LevelSeven}/>
        <Route path="/level-eight" exact component={LevelEight}/>
        <Route path="/level-nine" exact component={LevelNine}/>
      </div>
    </Router>
  );
}

export default App;

