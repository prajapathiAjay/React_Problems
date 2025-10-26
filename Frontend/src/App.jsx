import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Hook1 from './Hooks/hook1/hook1.jsx';
import Hook2 from './Hooks/hook2/Hook2'
import Interview from './interview/Interview'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <Hook1/> */}
     {/* <Hook2/> */}
     <Interview/>
    </>
  )
}

export default App
