import { useState } from 'react'
import QRCode from 'react-qr-code'

function App() {
  const [input, setInput] = useState('')
  const [qrCode, setQrCode] = useState('')

  function handleGenerateQrCode () {

    setQrCode(input)
    setInput('')
  }

  return (
    <div className='flex flex-col items-center mt-5'>
       <h3>QR Code Generator</h3>
          <div className='flex m-3'>
             <input 
             type="text" 
             placeholder='Enter your value here'
             value={input}
             onChange={(e)=> setInput(e.target.value)}  
             className='border border-emerald-600 p-1'/>
             <button 
             onClick={handleGenerateQrCode}
             disabled={input && input.trim() !== '' ? false : true}
             className='border border-emerald-600 p-1 ml-1 cursor-pointer'
            >Generate</button>
          </div>

          <div>
            <QRCode 
            id='qr-code-value'
            value={qrCode}
            size={400}/>
          </div>
        
    </div>
  )
}

export default App
