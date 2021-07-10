import p from './Navbar.module.css';
import React from "react";
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div className={p.item}>
            <NavLink to='/IndentationSystem' className={p.item} activeClassName={p.activeLink}>
                Система отступов</NavLink>
            <NavLink to='/Validation' className={p.item} activeClassName={p.activeLink}>
                Валидация</NavLink>
            <NavLink to='/Animation' className={p.item} activeClassName={p.activeLink}>
                Анимация</NavLink>
        </div>
    )
}

export default Navbar;