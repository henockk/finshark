import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card/Card'
import CardList from './Components/CardList/CardList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <div className="card">
     <CardList/>
      </div>
     
    </>
  )
}

export default App
