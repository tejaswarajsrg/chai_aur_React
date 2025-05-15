import { useState, useCallback, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [length, setLength] = useState(8)
  const [numberallowed, setNumberAllowed] = useState(false)
  const [charallowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIabcdefghi"
    if(numberallowed){
      str +="0123456789"
    }
    if(charallowed){
      str += "!@#$%^&*"
    }                                                        

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)    
    }
    setPassword(pass)

  }, [length, numberallowed, charallowed, setPassword])


const copyPasswordToClipboard = useCallback(() => {
  passwordRef.current?.select();
  passwordRef.current?.setselectionRange(0,3);
  window.navigator.clipboard.writeText(password)},
[password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberallowed, charallowed, passwordGenerator])
  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md
    rounded-lg px-4 pt-1 my-8 text-orange-500 bg-gray-800 h-30'>
      <h1 className='text-white text-center mb-2'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4 bg-white'>
        <input 
        type="text"
        value={password}
        className='outline-none w-full py-1 px-3'
        placeholder='password'
        readOnly
        ref={passwordRef}>
        </input>
        <button 
        onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0
        hover:bg-blue-800 hover:scale-105 transition-transform duration-200 ease-in-out'>Copy</button>
        </div>

        <div className='flex text-sm gap-x-2 ms-4'>
          <div className="flex items-center gap-x-2">
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer transition duration-300 ease-in-out 
               accent-blue-600 hover:accent-blue-700 focus:accent-blue-800"
            onChange={(e) => setLength(e.target.value)}
  />
  <label className="text-sm font-medium">Length: {length}</label>
</div>

          <div className='flex items-center gap-x-1'>
            <input
            type='checkbox'
            defaultChecked={numberallowed}
            id='numberInput'
            onChange={() => {
              setNumberAllowed((prev) => !prev)
            }}/>
            <label>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
            type='checkbox'
            defaultChecked={numberallowed}
            id='characterInput'
            onChange={() => {
              setCharAllowed((prev) => !prev)
            }}/>
            <label>Characters</label>
          </div>
        </div>
        </div>
        </>
  )
}

export default App
