import { useState } from 'react'
import './App.css'
import RouteList from './routes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <RouteList />
    </>
  )
}

export default App
