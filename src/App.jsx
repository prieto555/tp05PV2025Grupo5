import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Agregar } from './Agregar'

function App() {
  const [count, setCount] = useState(0)
  const [alumnos, setAlumnos] = useState([])
  const agregar_actualizar = (alumno_actu) => {
    setAlumnos(alumno_actu)
  }
  console.log(alumnos)
  return (
    <>
      <Agregar alumnos={alumnos} setAlumnos={setAlumnos} agregar_actualizar={agregar_actualizar}></Agregar>
    </>
  )
}
export default App
