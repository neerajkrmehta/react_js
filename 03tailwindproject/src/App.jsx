import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/Card'


function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username:"neerajrz",
    age:23
  }
  let newArr = [1,2,3]
  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl mb-5'>TailWind test</h1>
      <Card username = 'neerajRz' btnText ="click me"/>
      <Card username="Namehia" btnText= "Visit Me" />
    
    </>
  )}

export default App
