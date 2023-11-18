import TrendingCard from "../trendingCard";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const TrendingBlock = ({trendingData}) => {
    console.log(trendingData)
    const settings = {
        arrows: false,
        infinite: true,
        slidesToShow: 8,
        slidesToScroll: 1,
        autoplay: false,
        speed: 1000,
        autoplaySpeed: 5000,
    };

    return <div className="trending_block">
        <div className="block_title">
            trending now
        </div>
        <Slider {...settings}>
            {trendingData.map((item) => {
                return <TrendingCard item={item} key={item.id}/>
            })}
        </Slider>
    </div>
}