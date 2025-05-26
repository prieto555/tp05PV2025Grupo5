import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Agregar } from './Agregar'

function App() {
  const [count, setCount] = useState(0)
  const [alumnos, setAlumnos] = useState([])
  return (
    <>
      <Agregar alumnos={alumnos} setAlumnos={setAlumnos}></Agregar>
    </>
  )
}
export default App
