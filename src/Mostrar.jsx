import React, { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { Modificar } from './Modificar';

export const Mostrar = ({ alumnos, setAlumnos }) => {
    return (
        <div>
            {alumnos.length > 0 && alumnos.some(alumno => alumno.estado === true)? (
                <table>
                    <thead>
                        <tr>
                            <th >Nombre</th>
                            <th >Curso</th>
                            <th >Email</th>
                            <th >Domicilio</th>
                            <th >Telefono</th>
                            <th >LU</th>
                            <th >Opciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {alumnos.map((alumno, index) => {
                            return (
                                <React.Fragment key={alumno.id || index}>
                                    {alumno.estado === true && (
                                        <tr>
                                            <td >{alumno.nombre}</td>
                                            <td >{alumno.curso}</td>
                                            <td >{alumno.email}</td>
                                            <td >{alumno.domicilio}</td>
                                            <td >{alumno.telefono}</td>
                                            <td >{'APU00' + alumno.LU % 1000}</td>
                                            <td className='td-actions'>
                                                <Link to='/modificar'>Modificar</Link>
                                                <button onClick={() => {
                                                    const nuevosAlumnos = [...alumnos];
                                                    nuevosAlumnos[index].estado = false;
                                                    setAlumnos(nuevosAlumnos);
                                                }}> Eliminar </button>
                                            </td>
                                        </tr>
                                    )}
                                </React.Fragment>
                            );
                        })}
                    </tbody>

                </table>
            ) : (
                <h2>No se encontraron alumnos...</h2>
            )}

        </div>
    );
};
