import { useState } from 'react'
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
