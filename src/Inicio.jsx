import { Link } from "react-router-dom";

export const Inicio = () => {
  return (
    <div className="container text-center mt-5">
      <div className="card p-4 shadow-lg">
        <h1 className="mb-3 text-primary">Bienvenido a la Gestión de Alumnos</h1>
        <p className="lead">Explora las distintas páginas para administrar alumnos de manera eficiente.</p>
        <Link className="btn btn-success mt-3" to='/mostrar'>Ver Lista de Alumnos</Link>
      </div>
    </div>
  );
};


