import React, { Component } from 'react';
import '../styles/SideBar.css';
import { NavLink } from 'react-router-dom';

class SideBar extends Component {
    state = {}
    render() {
        return (
            <div className="side-bar">
                <div className="logo"></div>
                <NavLink to="/">
                    <button type="button">Список</button>
                </NavLink>
                <NavLink to="/documents/new">
                    <button type="button">Новий документ</button>
                </NavLink>
            </div>

        );
    }
}

export default SideBar;