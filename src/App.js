// import './App.css';

import HomePage from "./components/home";
import MainMenu from "./components/mainMenu";
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";

function App() {

    return (
        <Router>
            <div className="App">
                <MainMenu/>
                <Routes>
                    <Route path='/' element={<HomePage/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
