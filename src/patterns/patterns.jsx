import React from 'react';
import p from './patterns.module.css';
import Header from "./Header/Header";
import Content from "./Content/Content";
import {BrowserRouter, Route} from "react-router-dom";

const Patterns = () => {
    return (
            <div className={p.patterns}>
                <div className={p.content}>
                    <Content/>
                </div>
            </div>

    )
}

export default Patterns;