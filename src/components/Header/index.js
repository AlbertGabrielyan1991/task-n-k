import React from 'react';
import { NavLink } from 'react-router-dom';

import './HeaderStyle.css';

function Header() {
    return (
        <div className="header">
            <a  className="logo">CompanyLogo</a>
            <div className="header-right">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/employees">Employees</NavLink>
                <NavLink to="/tasks">Tasks</NavLink>
            </div>
        </div>
    );
};


export default Header
