import { Link } from "react-router-dom"

export const Menu = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
                <Link className="navbar-brand" to="/">Gestión de Alumnos</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menuNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="menuNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/agregar">Agregar</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/mostrar">Mostrar</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
