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
       <div className="container mt-5">
            <div className="card p-4 shadow-lg">
                <h1 className="text-center text-primary">Gestión de Alumnos</h1>
                <form onSubmit={Agregando}>
                    <div className="mb-3">
                        <label className="form-label">Nombre</label>
                        <input type="text" name="nombre" className="form-control" placeholder="Nombre" value={formulario.nombre} onChange={handleChange} required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Apellido</label>
                        <input type="text" name="apellido" className="form-control" placeholder="Apellido" value={formulario.apellido} onChange={handleChange} required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Curso</label>
                        <input type="text" name="curso" className="form-control" placeholder="Curso" value={formulario.curso} onChange={handleChange} required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="email" name="email" className="form-control" placeholder="Email" value={formulario.email} onChange={handleChange} required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Domicilio</label>
                        <input type="text" name="domicilio" className="form-control" placeholder="Domicilio" value={formulario.domicilio} onChange={handleChange} required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Teléfono</label>
                        <input type="number" name="telefono" className="form-control" placeholder="Teléfono" value={formulario.telefono} min="1" onChange={handleChange} required />
                    </div>
                    <button type="submit" className="btn btn-success w-100">Agregar Alumno</button>
                </form>
            </div>
        </div>
    );
};


