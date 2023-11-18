import HomePage from "./components/home";
import MainMenu from "./components/mainMenu";
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import {useEffect, useState} from "react";

function App() {
    const [featuredItem, setFeaturedItem] = useState({})
    const [trendingData, setTrendingData] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/Featured')
            .then(response => response.json())
            .then(data => setFeaturedItem(data))
            .catch(err => console.error("error:", err))

        fetch('http://localhost:3000/TrendingNow?_limit=50')
            .then(response => response.json())
            .then(data => {
                const arr = [...data.sort((a, b) => new Date(b.Date) - new Date(a.Date))]
                setTrendingData(arr)
            })
            .catch(err => console.error("error:", err))
    }, []);


    return (
        <Router>
            <div className="App">
                <MainMenu/>
                <Routes>
                    <Route path='/' element={
                        <HomePage
                            featuredItem={featuredItem}
                            trendingData={trendingData}
                        />
                    }/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
