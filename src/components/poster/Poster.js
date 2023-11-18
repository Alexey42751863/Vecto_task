
export const Poster = (props) => {
    const {
        Id: id,
        Title: title,
        CoverImage: coverImage,
        TitleImage: titleImage,
        Date: date,
        ReleaseYear: releaseYear,
        MpaRating: mpaRating,
        Category: category,
        Duration: duration,
        VideoUrl: videoUrl,
        Description: description
    } = props

    const secondsToDuration = (sec) => {
        let hours = Math.floor(sec / 3600)
        let mins = Math.round((sec - 3600 * hours) / 60)

        return `${hours}h ${mins}m`
    }

    return <div className="poster">
        <div className="content">
            <div className="category_name">
                {category}
            </div>
            <div className="title_image_wrapper">
                <img
                    className="title_image"
                    src={`/assets/${titleImage}`}
                    alt={`${title}'s title_image`}
                />
            </div>
            <div className="info">
                <div className="release_year">
                    {releaseYear}
                </div>
                <div className="mpa_rating">
                    {mpaRating}
                </div>
                <div className="duration">
                    {secondsToDuration(duration)}
                </div>
            </div>
            <div className="description">
                {description}
            </div>
            <div className="buttons">
                <div className="play_button btn">
                    play
                </div>
                <div className="more_info btn">
                    more info
                </div>
            </div>
        </div>
    </div>
}