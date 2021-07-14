import React from 'react';
import p from './Content.module.css';
import Navbar from "./Navbar/Navbar";
import {BrowserRouter, Route, Redirect} from "react-router-dom";
import IndentationSystem from "./IndentationSystem/IndentationSystem";
import Animation from "./Animation/Animation";
import Validation from "./Validation/Validation";

const Content = () => {
    return (
        <BrowserRouter>
            <div className={p.content}>
                <div className={p.topic}>
                    Паттерны
                </div>
                <div className={p.navbar}>
                    <Navbar/>
                </div>
                <switch>
                    <Route path='/IndentationSystem' component={IndentationSystem}/>
                    <Route path='/Validation' component={Validation}/>
                    <Route path='/Animation' component={Animation}/>
                    <Redirect from='/' to='/IndentationSystem'/>
                </switch>
            </div>
        </BrowserRouter>
    );
}

export default Content;