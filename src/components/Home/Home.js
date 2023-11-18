import {useEffect, useState} from "react";
import Poster from "../poster"
import TrendingBlock from "../trendingBlock";

export const HomePage = () => {
    const [featuredData, setFeaturedData] = useState({})
    const [trendingData, setTrendingData] = useState({})


    useEffect(() => {
        fetch('http://localhost:3000/Featured')
            .then(response => response.json())
            .then(data => setFeaturedData(data))
            .catch(err => console.error("error:", err))

        fetch('http://localhost:3000/TrendingNow')
            .then(response => response.json())
            .then(data => setTrendingData(data))
            .catch(err => console.error("error:", err))
    }, []);

    return <div className="home_page">
        <img
            className="background_image"
            src={`/assets/${featuredData.CoverImage}`}
            alt={`${featuredData.Title}'s cover_image`}
        />
        <Poster {...featuredData}/>
        <TrendingBlock trendingData={trendingData}/>
    </div>
}