import TrendingCard from "../trendingCard";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const TrendingBlock = ({trendingItems, setFeaturedItem}) => {
    const settings = {
        arrows: false,
        infinite: false,
        slidesToShow: 8,
        slidesToScroll: 1,
        autoplay: false,
        speed: 1000,
        autoplaySpeed: 5000,
        swipeToSlide: true,
        focusOnSelect: false
    };

    return trendingItems?.length > 0 ? <div className="trending_block">
        <div className="block_title">
            trending now
        </div>
        <Slider {...settings} onClick={(e) => e.stopPropagation()}>
            {trendingItems?.map((item) => {
                return <TrendingCard item={item} key={item.Id} setFeaturedItem={setFeaturedItem}/>
            })}
        </Slider>
    </div> : ""
}