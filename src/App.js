import logo from './logo.svg';
import './App.css';
import Patterns from "./patterns/patterns";
import {BrowserRouter} from "react-router-dom";
import Header from "./patterns/Header/Header";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Patterns/>
            </div>
        </BrowserRouter>
    );
}

export default App;
