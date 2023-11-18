
export const TrendingCard = ({item, setFeaturedItem}) => {

    const handleClick =  () => {
        let oldArray = JSON.parse(sessionStorage.getItem('clickedItems')) || []
        let set = new Set([+item.Id, ...oldArray])
        let newArray = [...set]
        sessionStorage.setItem("clickedItems", JSON.stringify(newArray))
        setFeaturedItem(item)
    }

    return <div className="trending_card" onClick={handleClick}>
        <img
            className="card_image"
            src={`/assets/${item.CoverImage}`}
            alt={`${item.Title}'s cover_image`}
        />
    </div>
}