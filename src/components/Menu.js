import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import "./Menu.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function Menu() {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(!dropdownOpen);

    return ( 
        <nav className="navbar navbar-expand-lg navbar-light bg-secondary-subtle p-3">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">
                    Home
                </NavLink>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active" to="#">
                                Documentación
                            </NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                                <DropdownToggle nav caret>
                                    Prácticas
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem>
                                        <NavLink className="nav-link" activeClassName="active" to="/practica1">
                                            Primera Práctica
                                        </NavLink>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <NavLink className="nav-link" activeClassName="active" to="/practica2">
                                            Segunda Práctica
                                        </NavLink>
                                    </DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Menu;
