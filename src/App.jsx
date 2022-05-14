import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import List from './Components/List/List'
import Search from './Components/Search/Search'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Search/>
      <List/>
    </div>
  )
}

export default App
