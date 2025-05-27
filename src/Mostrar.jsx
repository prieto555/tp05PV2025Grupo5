import React, { useState } from 'react';
import { Eliminar } from './Eliminar';
//import { Modificar } from './Modificar';

export const Mostrar = ({alumnos, setAlumnos}) => {

  
    return (
        <div style={{ overflowX: 'auto' }}>
            {alumnos.length > 0 ? (
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>

                        <tr style={{ backgroundColor: '#f2f2f2' }}>
                            <th style={thStyle}>Nombre</th>
                            <th style={thStyle}>Curso</th>
                            <th style={thStyle}>Email</th>
                            <th style={thStyle}>Domicilio</th>
                            <th style={thStyle}>Telefono</th>
                        </tr>
                    </thead>
                    <tbody>
                        {alumnos.map((alumno, index) => {
                            return (
                                <React.Fragment key={alumno.id || index}>
                                    <tr>
                                        <td style={tdStyle}>{alumno.nombre}</td>
                                        <td style={tdStyle}>{alumno.curso}</td>
                                        <td style={tdStyle}>{alumno.email}</td>
                                        <td style={tdStyle}>{alumno.domicilio}</td>
                                        <td style={tdStyle}>{alumno.telefono}</td>
                                        <td className='td-actions' style={tdStyle}>
                                            {/*<Eliminar eliminarProducto={eliminarAlumno} id={alumno.id} />*/}
                                            <button
                                                onClick={() => {
                                                    setAlumnos(
                                                        alumnos.map((a) =>
                                                            a.id === alumnos.id ? { ...a, modificado: !a.modificado } : a
                                                        )
                                                    );
                                                }}
                                            >
                                                Modificar
                                            </button>
                                        </td>
                                    </tr>

                                    {alumnos.modificado === false && (
                                        <tr>
                                            <td colSpan="10">
                                                <Modificar b={alumnos} funcion_modificar={agregarModificado} />
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

const thStyle = {
    border: '1px solid #ddd',
    padding: '8px',
    color: "black",
    textAlign: 'left',
    fontWeight: 'bold',
};

const tdStyle = {

    border: '1px solid #ddd',
    padding: '8px',
};
