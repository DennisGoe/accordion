import React, {useEffect, useState} from "react"

const MenuEntry = ({content, index, setClicked, clicked}) => {
    const [selected, setSelected] = useState(false);

    useEffect(() => {
        setSelected(clicked === index)
    }, [clicked, index]);



    return (
        <div className={"flex flex-col w-[90%] m-4"} id={index} onClick={() => setClicked(index)}>
            <div className={"flex w-full justify-between"}>
                <span className={`${selected ? "font-bold": ""} mb-3`}>{content.q}</span>
                {
                    selected &&
                    <span className="material-icons text-orange-400">
                    keyboard_arrow_down
                     </span>
                }
                {
                    !selected &&
                    <span className="material-icons text-orange-400">
                    keyboard_arrow_right
                     </span>
            }
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