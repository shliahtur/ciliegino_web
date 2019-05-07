import React, { Component } from 'react';
import '../styles/SideBar.css';
import { NavLink } from 'react-router-dom';

class SideBar extends Component {
    state = {}
    render() {
        return (
            <div className="side-bar">
                <div className="logo"></div>
                <ul>
                    <li>
                        <NavLink to="/">
                            <button type="button">Главная</button>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/documents">
                            <button type="button">Список</button>
                        </NavLink>
                    </li>

                    <NavLink to="/documents/new">
                        <button type="button">Новий документ</button>
                    </NavLink>
                </ul>
            </div>
        );
    }
}

export default SideBar;