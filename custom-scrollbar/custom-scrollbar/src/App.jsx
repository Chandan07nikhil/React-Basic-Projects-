import { useState } from 'react'
import CustomScrollBar from './component/custom-scrollbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
         <CustomScrollBar url={'https://dummyjson.com/products?limit=100'}/>
    </div>
  )
}

export default App
