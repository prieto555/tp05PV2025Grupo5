import { useState } from 'react'
import './App.css'
import { Agregar } from './Agregar'
import { Mostrar } from './Mostrar'
import { Inicio } from './Inicio'
import { Routes, Route } from 'react-router'
import { Menu } from './Menu'
import { Modificar } from './Modificar'
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [count, setCount] = useState(0)
  const [alumnos, setAlumnos] = useState([])
  const agregar_actualizar = (alumno_actu) => {
    setAlumnos(alumno_actu)
  }
  console.log(alumnos)
  return (
    <>
      <Menu></Menu>
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/agregar' element={<Agregar alumnos={alumnos} setAlumnos={setAlumnos} ></Agregar>} />
        <Route path='/mostrar' element={<Mostrar alumnos={alumnos} setAlumnos={setAlumnos} ></Mostrar>}></Route>
        <Route path='/modificar' element={<Modificar alumnos={alumnos} setAlumnos={setAlumnos} agregar_actualizar={agregar_actualizar}/>}></Route>
      </Routes>
    </>
  )
}
export default App
