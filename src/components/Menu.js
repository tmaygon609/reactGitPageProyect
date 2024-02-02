import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Menu() {
    const [dropdownOpen1, setDropdownOpen1] = useState(false);
    const [dropdownOpen2, setDropdownOpen2] = useState(false);

    const toggleDropdown1 = () => setDropdownOpen1(!dropdownOpen1);
    const toggleDropdown2 = () => setDropdownOpen2(!dropdownOpen2);

    return ( 
        <nav className="navbar navbar-expand-lg navbar-light bg-secondary-subtle sticky-top">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">
                    Inicio
                </NavLink>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">

                        <li className="nav-item dropdown">
                            <Dropdown isOpen={dropdownOpen1} toggle={toggleDropdown1}>
                                <DropdownToggle nav caret>
                                    Documentos
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem>
                                        <NavLink className="nav-link" activeClassName="active" to="/documentacion">
                                            Documentación
                                        </NavLink>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <NavLink className="nav-link" activeClassName="active" to="/presentacion">
                                            Presentación
                                        </NavLink>
                                    </DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </li>

                        <li className="nav-item dropdown">
                            <Dropdown isOpen={dropdownOpen2} toggle={toggleDropdown2}>
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
