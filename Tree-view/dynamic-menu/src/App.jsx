import { useState } from 'react'
import TreeView from './componants'


function App() {
  const [count, setCount] = useState(0)

  return (
       <>
          <TreeView/>
       </>
  )
}

export default App
