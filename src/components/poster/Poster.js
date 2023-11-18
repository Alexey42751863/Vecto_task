export const Poster = (props) => {
    const {
        Title: title,
        TitleImage: titleImage,
        ReleaseYear: releaseYear,
        MpaRating: mpaRating,
        Category: category,
        Duration: duration,
        Description: description,
        setIsPlay
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
                <div className="play_button btn" onClick={() => setIsPlay(true)}>
                    <img
                        src={`/assets/icons/Play_icon.png`}
                        alt={`${title}'s title_image`}
                    />
                    play
                </div>
                <div className="more_info btn">
                    more info
                </div>
            </div>
        </div>
    </div>
}