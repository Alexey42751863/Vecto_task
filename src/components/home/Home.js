import {useEffect, useState} from "react";
import Poster from "../poster"
import TrendingBlock from "../trendingBlock";

export const HomePage = ({featuredItem, trendingData}) => {
    const [currentItem, setCurrentItem] = useState({})
    const [trendingItems, setTrendingItems] = useState([])
    const [isPlay, setIsPlay] = useState(false)

    useEffect(() => {
        setCurrentItem(featuredItem)
        setTrendingItems(trendingData)
    }, [featuredItem, trendingData])

    useEffect(() => {
        setIsPlay(false)
        const timeout = setTimeout(() => setIsPlay(true), 2000)
        const clickedItems = JSON.parse(sessionStorage.getItem('clickedItems')) || []
        let state = [...trendingItems]
        const newState = [
            ...clickedItems.map(id => {
                const item = state.find((element) => +element.Id === id);
                const filteredState = state.filter(el => +el.Id !== id)
                state = [...filteredState]
                return item || null
            }).filter(el => el !== null),
            ...state
        ]
        setTrendingItems(newState)

        return () => {
            clearTimeout(timeout)
        }
    }, [currentItem]);

    return <div className="home_page">
        {isPlay && currentItem?.VideoUrl ?
            <video autoPlay playsInline className="background_image">
                <source src={currentItem?.VideoUrl} type="video/mp4"/>
            </video>
            :
            <img
                className="background_image"
                src={`/assets/${currentItem.CoverImage}`}
                alt={`${currentItem.Title}'s cover_image`}
            />
        }
        <Poster {...currentItem} setIsPlay={setIsPlay}/>
        <TrendingBlock trendingItems={trendingItems} setFeaturedItem={setCurrentItem}/>
    </div>
}