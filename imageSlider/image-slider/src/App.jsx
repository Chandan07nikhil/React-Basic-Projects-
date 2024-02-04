import { useState } from 'react'

import images from './Images'

import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from 'react-icons/bs'

function App() {
  const [currentSlide, setCurrentSlide] = useState(0)

  function handleLeftArrow () {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  }
  
  function handleRightArrow () {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  }

  function handleOnCircleClick (currentIndex){
    setCurrentSlide(currentIndex);
  }

  return (
    <>
      <div className='w-[500px] h-[400px] justify-center items-center relative'>
        
        <BsArrowLeftCircleFill 
        onClick={handleLeftArrow}
        className={'absolute w-10 h-10 rounded-full text-white left-[1rem] top-[200px]'}
        />

        {
          images && images.length ?
            images.map((_, index) => {
              return <img
                key={index}
                src={images[index]}
                alt={'test-image'}
                width={500}
                className={index === currentSlide ? 'block' : 'hidden' }
              />
            }) :
            null
        }

        <BsArrowRightCircleFill
        onClick={handleRightArrow}
        className={'absolute w-10 h-10 rounded-full text-white right-[1rem] top-[200px]'}
        />
          
        <span className='absolute bottom-2 w-full h-7 flex justify-center'>
          {
            images && images.length ?
              images.map((_, index) => (
                <button
                  key={index}
                  className={index === currentSlide ? "w-7 h-7 rounded-full m-0.5 bg-white" : "w-5 h-5 rounded-full m-0.5 bg-gray-400"}
                  onClick={() => handleOnCircleClick(index)}></button>
              ))
              : null
          }
        </span>

      </div>
    </>
  )
}

export default App
