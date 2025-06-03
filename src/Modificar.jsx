import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";


export const Modificar = ({ alumnos, setAlumnos }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const alumno = location.state?.alumno;

    if (!alumno) {
        navigate("/"); 
        return null;
    }

   
    const [formulario, setFormulario] = useState({ ...alumno });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormulario({ ...formulario, [name]: value });
    };

    const actualizarAlumno = (e) => {
        e.preventDefault();
        setAlumnos(alumnos.map((a) => (a.LU === formulario.LU ? formulario : a)));
        navigate("/");
    };

  return (
        <div className="container mt-5">
           
            <form onSubmit={actualizarAlumno} className="card p-4 shadow">
                 <h2 className=" text-center">Modificar Alumno</h2>
                <div className="mb-3">
                    <label className="form-label">Nombre</label>
                    <input type="text" name="nombre" className="form-control" value={formulario.nombre || ""} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Apellido</label>
                    <input type="text" name="apellido" className="form-control" value={formulario.apellido || ""} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Curso</label>
                    <input type="text" name="curso" className="form-control" value={formulario.curso || ""} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="text" name="email" className="form-control" value={formulario.email || ""} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Domicilio</label>
                    <input type="text" name="domicilio" className="form-control" value={formulario.domicilio || ""} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Teléfono</label>
                    <input type="number" name="telefono" className="form-control" value={formulario.telefono || ""} onChange={handleChange} required />
                </div>
                <button type="submit" className="btn btn-primary w-100">Actualizar Alumno</button>
            </form>
        </div>
    );
};

