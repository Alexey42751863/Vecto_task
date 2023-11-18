
export const TrendingCard = ({item}) => {

    return <div className="trending_card">
        <img
            className="card_image"
            src={`/assets/${item.CoverImage}`}
            alt={`${item.Title}'s cover_image`}
        />
    </div>
}