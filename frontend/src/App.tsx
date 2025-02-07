import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card/Card'
import CardList from './Components/CardList/CardList'
import Search from './Components/Search/Search'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <div className="card">
        
        <CardList/>
        <Search/>
      </div>
     
    </>
  )
}

export default App
