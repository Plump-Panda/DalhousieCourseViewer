import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';
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
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Other Courses
                    </Dropdown.Toggle>

                    <DropdownMenu>
                        <DropdownItem as={Link} to='/level-six'>6000 Level</DropdownItem>
                        <DropdownItem as={Link} to='/level-seven'>7000 Level</DropdownItem>
                        <DropdownItem as={Link} to='/level-eight'>8000 Level</DropdownItem>
                        <DropdownItem as={Link} to='/level-nine'>9000 Level</DropdownItem>
                    </DropdownMenu>
                </Dropdown>

            </nav>
        );
    }
}