import React, {useState} from "react";
import MenuEntry from "./menuEntry";

const Main = () => {
    const [contents, setContents] = useState([
        {q: "Question 1", a: "answer 1"},
        {q: "Question 2", a: "answer 2"},
        {q: "Question 3", a: "answer 3"},
        {q: "Question 4", a: "answer 4"},
        {q: "Question 5", a: "answer 5"},
        {q: "Question 6", a: "answer 6"},
    ]);

    const [clicked, setClicked] = useState(-1);
    console.log("clicked",clicked)
    return (
        <div className={"bg-gradient-to-tr from-blue-400 to-red-300 h-screen grid place-items-center"}>
            <div className={"w-[80%] h-[80%] bg-white rounded-3xl overflow-hidden flex shadow-2xl"}>
                <div className={"w-1/2 h-full grid place-items-center "}>
                    <img  src={"https://cdn-icons-png.flaticon.com/512/4403/4403555.png"}/>
                </div>
                <div className={"w-1/2 h-full  flex flex-col"}>
                    <span className={"text-6xl mt-10 text-black font-bold"}>FAQ</span>
                    {contents.map((content,index) => {
                        return (
                            <MenuEntry content={content} index={index} key={index} clicked={clicked} setClicked={setClicked}/>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Main