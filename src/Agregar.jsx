import React from 'react'
import { useState } from 'react'
import { Mostrar } from './Mostrar'

export const Agregar = ({ alumnos, setAlumnos }) => {
    const [formulario, setFormulario] = useState({
        LU: 0,
        nombre: '',
        apellido: '',
        curso: '',
        email: '',
        domicilio: '',
        telefono: 0,
        estado: true,
    })
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormulario({ ...formulario, [name]: value })
    }
    const Agregando = (e) => {
        e.preventDefault()
        const nuevoAlumno = {
            ...formulario,
            LU: Date.now(),
            nombre: formulario.nombre,
            apellido: formulario.marca,
            curso: formulario.curso,
            email: formulario.email,
            domicilio: formulario.domicilio,
            telefono: parseFloat(formulario.telefono),
        }
        setAlumnos([...alumnos, nuevoAlumno])
        setFormulario({
            LU: 0,
            nombre: '',
            apellido: '',
            curso: '',
            email: '',
            domicilio: '',
            telefono: 0,
            estado: true,
        })
    }
    return (
        <>
            <h1>Gestion de Alumnos</h1>
            <form onSubmit={Agregando}>
                <input type="text" name="nombre" placeholder="Nombre" value={formulario.nombre} onChange={handleChange} required />
                <input type="text" name="apellido" placeholder="Apellido" value={formulario.apellido} onChange={handleChange} required />
                <input type="text" name="curso" placeholder="Curso" value={formulario.curso} onChange={handleChange} required />
                <input type="text" name="email" placeholder="Email" value={formulario.email} onChange={handleChange} required />
                <input type="text" name="domicilio" placeholder="Domicilio" value={formulario.domicilio} onChange={handleChange} required />
                <input type="number" name="telefono" placeholder="Telefono" value={formulario.telefono} onChange={handleChange} required />
                <button type="submit">Agregar Alumno</button>
            </form>
        </>
    )
}
