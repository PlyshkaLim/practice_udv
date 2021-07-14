import './App.css';
import Patterns from "./patterns/patterns";
import {BrowserRouter, Redirect, Route} from "react-router-dom";
import Header from "./patterns/Header/Header";
import Articles from "./articles/articles";
import React from "react";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                {/*<Patterns/>*/}
                {/*<Articles/>*/}
                <switch>
                    <Route path='/patterns' component={Patterns}/>
                    <Route path='/articles' component={Articles}/>
                    <Redirect from='/' to='/patterns'/>
                </switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
