import p from "./Header.module.css";
import React from "react";
import MenuItem from "./MenuItem/MenuItem";
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className={p.header}>
            <div className={p.name}>
                <div className={p.name1}>UDV</div>
                <div className={p.name2}>Дизайн-система</div>
            </div>
            <div className={p.menu}>
                <NavLink to='/1' className={p.item} activeClassName={p.activeLink}>Компоненты</NavLink>
                <NavLink to='/patterns' className={p.item} activeClassName={p.activeLink}>Паттерны</NavLink>
                <NavLink to='/3' className={p.item} activeClassName={p.activeLink}>Принципы UX</NavLink>
                <NavLink to='/4' className={p.item} activeClassName={p.activeLink}>Исследования</NavLink>
                <NavLink to='/5' className={p.item} activeClassName={p.activeLink}>Статьи</NavLink>

                {/*<MenuItem name='Компоненты' />*/}
                {/*<MenuItem name='Паттерны' />*/}
                {/*<MenuItem name='Принципы UX' />*/}
                {/*<MenuItem name='Исследования' />*/}
                {/*<MenuItem name='Статьи' />*/}
            </div>
            <div className={p.line}/>
        </div>
    )
}

export default Header;