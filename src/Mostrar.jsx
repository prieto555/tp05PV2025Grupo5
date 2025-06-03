import React, { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { Modificar } from './Modificar';

export const Mostrar = ({ alumnos, setAlumnos }) => {
    return (
       <div className="container mt-4">
            {alumnos.length > 0 && alumnos.some(alumno => alumno.estado === true) ? (
                <div className="card shadow-lg p-4">
                    <h2 className="text-center text-primary">Lista de Alumnos</h2>
                    <table className="table table-bordered table-striped">
                        <thead className="table-dark">
                            <tr>
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>Curso</th>
                                <th>Email</th>
                                <th>Domicilio</th>
                                <th>Teléfono</th>
                                <th>LU</th>
                                <th>Opciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {alumnos.map((alumno, index) => (
                                alumno.estado === true && (
                                    <tr key={alumno.id || index}>
                                        <td>{alumno.nombre}</td>
                                        <td>{alumno.apellido}</td>
                                        <td>{alumno.curso}</td>
                                        <td>{alumno.email}</td>
                                        <td>{alumno.domicilio}</td>
                                        <td>{alumno.telefono}</td>
                                        <td>{'APU00' + alumno.LU % 1000}</td>
                                        <td className="td-actions">
                                            <Link to="/modificar" state={{ alumno }} className="btn btn-warning btn-sm me-2">Modificar</Link>
                                            <button className="btn btn-danger btn-sm"
                                                onClick={() => {
                                                    const nuevosAlumnos = [...alumnos];
                                                    nuevosAlumnos[index].estado = false;
                                                    setAlumnos(nuevosAlumnos);
                                                }}>
                                                Eliminar
                                            </button>
                                        </td>
                                    </tr>
                                )
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <h2 className="text-center text-danger mt-4">No se encontraron alumnos...</h2>
            )}
        </div>
    );
};


