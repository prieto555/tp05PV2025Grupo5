import { Link } from "react-router-dom"

export const Menu = () => {
    return (
        <>
            <nav>
                <Link to='/'>Inicio</Link> /
                <Link to='/agregar'>Agregar</Link> /
                <Link to='/mostrar'>Mostrar</Link>
            </nav>
        </>
    )
}
