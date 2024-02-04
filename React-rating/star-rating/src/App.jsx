import { useState } from 'react'
import {FaStar} from 'react-icons/fa'

function App() {

  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  
  function handleOnclick (currentIndex) {
    // console.log(currentIndex);
    setRating(currentIndex);
  } 

  function handleOnMouseMove (currentIndex) {
    setHover(currentIndex);
  }

  function handleOnMouseLeave () {
    setHover(rating)
  }
  return (
      <div className='w-[100vw] h-[100vh] flex justify-center items-center'>
        {
          [...Array(10)].map((_, index) => {
              index += 1;

              return <FaStar
              className = {index <= (hover || rating) ? 'text-yellow-300' : 'text-black'}
              key = {index}
              onClick = {()=> handleOnclick(index)}
              onMouseMove = {()=> handleOnMouseMove(index)}
              onMouseLeave = {()=> handleOnMouseLeave()}
              size={40}
              />
            }
          )
        }
    
      </div>
  )
}

export default App
