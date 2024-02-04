import MenuItems from "./menu-items";


export default function MenuList ({list = []}) {

    return <ul className="list-none my-0 flex flex-col items-center gap-5">
          {
            list && list.length ? 
            list.map((listItem) => <MenuItems item={listItem} 
            key={listItem.label}/>)
            : null
          }
    </ul>
}