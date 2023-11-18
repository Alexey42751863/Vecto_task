import {useEffect, useRef, useState} from "react";
import Navigation from "../navigation";
import classNames from "classnames";

export const MainMenu = () => {
    const menuRef = useRef(null)
    const [isHovered, setIsHovered] = useState(false)

    useEffect(() => {
        const onHover = (e) => {
            if (menuRef && menuRef.current && menuRef.current.contains(e.target) && menuRef.current !== e.target) {
                setIsHovered(true)
                menuRef.current.style.width = "100vw"
                // console.log(menuRef.current)
            } else {
                setIsHovered(false)
                menuRef.current.style.width = "157px"
            }
        }

        document.addEventListener("mouseover", onHover)

        return () => {
            document.removeEventListener("mouseover", onHover)
        }
    }, []);

    // console.log(isHovered)

    const menuClasses = classNames("main_menu", {
        "open": isHovered
    })

    return <div className={menuClasses} ref={menuRef} >
        {/*{*/}
        {/*    isHovered ?*/}
        {/*        <div className="menu_content opened" ref={menuRef}*/}
        {/*             // style={{display: `${isHovered? "block" : "none"}`}}*/}
        {/*        >*/}
        {/*            <div>*/}
        {/*                <div className="user_content">*/}
        {/*                    <img*/}
        {/*                        className="user_avatar"*/}
        {/*                        src="/assets/user_image.png"*/}
        {/*                        alt={`user's avatar`}*/}
        {/*                    />*/}
        {/*                    <span className="user_name">Daniel</span>*/}
        {/*                </div>*/}
        {/*                <Navigation isOpen={isHovered}/>*/}
        {/*            </div>*/}
        {/*            <div className="menu_links">*/}
        {/*                <a href="#">*/}
        {/*                    language*/}
        {/*                </a>*/}
        {/*                <a href="#">*/}
        {/*                    get help*/}
        {/*                </a>*/}
        {/*                <a href="#">*/}
        {/*                    exit*/}
        {/*                </a>*/}
        {/*            </div>*/}
        {/*        </div>*/}
        {/*        :*/}
        {/*        <div className="menu_content closed" ref={menuRef}*/}
        {/*             // style={{display: `${isHovered? "none" : "block"}`}}*/}
        {/*        >*/}
        {/*            <Navigation isOpen={false}/>*/}
        {/*        </div>*/}
        {/*}*/}
        <div className="menu_content">
            <div className="opened">
                <div>
                    <div className="user_content">
                        <img
                            className="user_avatar"
                            src="/assets/user_image.png"
                            alt={`user's avatar`}
                        />
                        <span className="user_name">Daniel</span>
                    </div>
                    <Navigation/>
                </div>
                <div className="menu_links">
                    <a href="#">
                        language
                    </a>
                    <a href="#">
                        get help
                    </a>
                    <a href="#">
                        exit
                    </a>
                </div>
            </div>
            <div className="closed">
                <Navigation/>
            </div>
        </div>

        {/*<div className="opened" ref={menuRef}>*/}
        {/*    <div>*/}
        {/*        {isHovered && <div className="user_content">*/}
        {/*            <img*/}
        {/*                className="user_avatar"*/}
        {/*                src="/assets/user_image.png"*/}
        {/*                alt={`user's avatar`}*/}
        {/*            />*/}
        {/*            <span className="user_name">Daniel</span>*/}
        {/*        </div>}*/}
        {/*        <Navigation isOpen={isHovered}/>*/}
        {/*    </div>*/}
        {/*    {isHovered && <div className="menu_links">*/}
        {/*        <a href="#">*/}
        {/*            language*/}
        {/*        </a>*/}
        {/*        <a href="#">*/}
        {/*            get help*/}
        {/*        </a>*/}
        {/*        <a href="#">*/}
        {/*            exit*/}
        {/*        </a>*/}
        {/*    </div>}*/}
        {/*</div>*/}
    </div>
}