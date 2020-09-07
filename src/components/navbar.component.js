import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Navbar extends Component{
    render(){
        return(
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/" className="navbar-brand">Computer Science Courses</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/first-year" className="nav-link">1st Year</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/second-year" className="nav-link">2nd Year</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/third-year" className="nav-link">3rd Year</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/fourth-year" className="nav-link">4th Year</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}