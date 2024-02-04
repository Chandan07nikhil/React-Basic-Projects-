import { useEffect, useState } from 'react'


function App() {
  const [count, setCount] = useState(0)
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)


  async function fetchProduct() {

    setLoading(true);

    try {

      const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count * 20}`);
      const data = await response.json();

      // console.log(data);

      if (data && data.products && data.products.length) {
        setProducts((prevData) => [...prevData, ...data.products]);
        setLoading(false)
      }
    }
    catch (e) {
      // console.log(e);
      setError(e);
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProduct()
  }, [count])

  if (loading) return <div className='text-center'>Product is loading</div>

  if (error) return <div>{error}</div>

  // console.log(products);

  return (
    <div className='w-[100vw] h-[100vh]'>

      <div className='grid grid-cols-4 gap-3'>
        {
          products && products.length ?
            products.map((Product) => {
              return <div
                key={Product.id}
                className='flex flex-col items-center gap-3 border'>
                <img
                  src={Product.thumbnail}
                  alt="Product.title"
                  className='w-[300px] h-[200px]'
                />
                <h2>{Product.title}</h2>
              </div>
            })
            : null
        }
      </div>

      <div className='flex justify-center'>
        <button
          onClick={() => setCount(count + 1)}
          className=' bg-slate-500 text-yellow-400 my-5 py-3 px-5 font-bold text-xl'
        >Load More</button>
      </div>
    </div>
  )
}

export default App
