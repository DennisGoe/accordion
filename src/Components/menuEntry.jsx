import React from "react"

const MenuEntry = ({content, index, setClicked, clicked}) => {
    return (
        <div className={"flex flex-col m-4"} id={index} onClick={() => setClicked(index)}>
            <div className={"flex"}>
                <span className={""}>{content.q}</span>
                <span className="material-icons text-orange-400">
                keyboard_arrow_down
                </span>
            </div>
            {
                clicked === index &&
                <div className={"flex"}>
                    <span>{content.a}</span>
                </div>
            }
            <hr/>
        </div>
    )
}
export default MenuEntry