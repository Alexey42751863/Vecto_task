import {useLocation} from 'react-router-dom'
import classNames from 'classnames';

export const Navigation = ({isOpen}) => {
    const {pathname} = useLocation()
    const navArray = [
        {
            id: 1,
            title: "search",
            src: "/assets/icons/ICON - Search.png",
            url: "#"
        },
        {
            id: 2,
            title: "home",
            src: "/assets/icons/Group 46.png",
            url: "/"
        },
        {
            id: 3,
            title: "tv shows",
            src: "/assets/icons/Group 56.png",
            url: "#"
        },
        {
            id: 4,
            title: "movies",
            src: "/assets/icons/Group 54.png",
            url: "#"
        },
        {
            id: 5,
            title: "genres",
            src: "/assets/icons/Group 53.png",
            url: "#"
        },
        {
            id: 6,
            title: "watch later",
            src: "/assets/icons/Group 47.png",
            url: "#"
        }
    ]
    const navClasses = classNames("navigation", {
        "open": isOpen
    })

    return <div className={navClasses}>
        {navArray.map(({id, url, src, title}) => {
            const classes = classNames("nav_item_wrapper", {
                "active": pathname === url,
            })

            return <div key={id}
                        className={classes}
            >
                <a href={url} className="nav_item">
                    <img
                        className="nav_item_image"
                        src={src}
                        alt={`${title}'s icon`}
                    />
                    <span className="nav_item_title"> {title} </span>
                </a>
            </div>
        })}
    </div>
}