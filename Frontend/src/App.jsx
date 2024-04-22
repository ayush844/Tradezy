import { useState } from 'react'
import { FaHome } from "react-icons/fa";
import './App.css'
import Navbar from './Components/Navbar/Navbar';

function App() {
  const [count, setCount] = useState(0)

  return (
  <>    
    <Navbar />
  </>
  )
}

export default App
