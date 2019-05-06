import React, { Component } from 'react';
import '../styles/SideBar.css';
import { Link } from 'react-router-dom';

class SideBar extends Component {
    state = {}
    render() {
        return (
            <div className="side-bar">
                <div className="logo"></div>
                <ul>
                    <li>
                        <Link to="/">
                            <button type="button">Главная</button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/datatable">
                            <button type="button">React таблица</button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/fetchdata">
                            <button type="button">Redux Fetch</button>
                        </Link>
                    </li>

                        <Link to="/newdocument">
                            <button type="button">Новий документ</button>
                        </Link>
                </ul>
            </div>
        );
    }
}

export default SideBar;