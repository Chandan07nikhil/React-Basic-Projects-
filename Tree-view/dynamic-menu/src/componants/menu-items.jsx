import { useState } from "react";
import MenuList from "./menu-list";
import { FaPlus, FaMinus } from "react-icons/fa"

export default function MenuItems({ item }) {

    const [displayCurrentChildren, setDisplayCurrentChildren] = useState({})

    function handleToggleBtn(getCurrentLabel) {
        setDisplayCurrentChildren({
            ...displayCurrentChildren,
            [getCurrentLabel]: !displayCurrentChildren[getCurrentLabel]
        })
    }


    return <li>
        <div className="text-white flex items-center gap-5 cursor-pointer">
            <p>{item.label}</p>
            {
                item && item.children && item.children.length ?
                    <span onClick={() => handleToggleBtn(item.label)}>
                        {
                            displayCurrentChildren[item.label] ? <FaMinus size={20} /> : <FaPlus size={20} />
                        }
                    </span> : null
            }
        </div>

        {
            item && item.children && item.children.length && displayCurrentChildren[item.label] ?
                <MenuList list={item.children} /> : null
        }
    </li>
}