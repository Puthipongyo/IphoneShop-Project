import { useState } from 'react'
import NavBar from './components/NavBar'


function App() {
  const [count, setCount] = useState(0)
  const Heading: string = "Welcome to Iphone Shop"

  return (
    <>
      <div>
        <NavBar></NavBar>
        <h1 className="text-center">
          {Heading}
          </h1>
      </div>
    </>
  )
}

export default App
