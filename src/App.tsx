import { useState } from 'react'
import './styles/global.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1 className='bg-fuchsia-200 font-sans'>
        fala galera
      </h1>
    </div>
  )
}

export default App
