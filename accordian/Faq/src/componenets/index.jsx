
import { useState } from "react";
import data from "./data"


export default function Accordian() {

    const [selected, setSelected] = useState(null)
    const [enableMultipleSelection, setEnableMultipleSelection] = useState(false)
    const [multiple, setMultiple] = useState([])

    function handleSingleSelection(getCurrentId) {
        setSelected(getCurrentId === selected ? null : getCurrentId);
    }

    function handleMultipleSelection(getCurrentId) {
         
        let cpyMultiple = [...multiple];
        const currentIndex = cpyMultiple.indexOf(getCurrentId);

        if(currentIndex === -1) cpyMultiple.push(getCurrentId);
        else cpyMultiple.splice(currentIndex, 1);
        
        setMultiple(cpyMultiple);
    }

    console.log(selected, multiple);

    return (
        <>
            <div className="h-[100vh] w-[100vw] flex justify-center items-center flex-col">
                <div className="mb-5 px-5 py-3 text-white bg-[#614101]">
                    <button onClick={() => setEnableMultipleSelection(!enableMultipleSelection)}> Enable Multiple Selection </button>
                </div>

                <div className="w-[500px]">
                    {data && data.length > 0 ? (
                        data.map(dataItem => (
                            <div className="bg-[#614101] mb-3 px-3 py-3">
                                <div onClick={enableMultipleSelection ? 
                                    () => handleMultipleSelection(dataItem.id) : 
                                    () => handleSingleSelection(dataItem.id)} className="text-white flex justify-between items-center cursor-pointer">
                                    <h3 className="font-bold">{dataItem.question}</h3>
                                    <span>+</span>
                                </div>

                                {/* multiple selection */}
                                {
                                  enableMultipleSelection ? 
                                  multiple.indexOf(dataItem.id) !== -1 &&
                                  <div className="text-white mt-2">{dataItem.answer}</div> :
                                  selected === dataItem.id ?
                                        <div className="text-white mt-2">{dataItem.answer}</div>
                                        : null

                                }

                                {/* single Selection */}
                                {/* {
                                    selected === dataItem.id ?
                                        <div className="text-white mt-2">{dataItem.answer}</div>
                                        : null
                                } */}
                            </div>
                        ))
                    ) : (<div> No data found ! </div>
                    )}
                </div>
            </div>
        </>
    );
}
