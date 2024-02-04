import MenuList from "./menu-list";
import menus from './data'

export default function TreeView (){
         
      return <div className="w-[350px] min-h-[100vh] bg-blue-500">
        <MenuList list={menus}/>
      </div>
}