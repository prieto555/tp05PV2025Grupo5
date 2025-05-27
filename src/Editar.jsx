export const Editar = ({ alu, setAlu }) => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [curso, setCurso] = useState("");
  const [email, setEmail] = useState("");
  const [domicilio, setDomicilio] = useState("");
  const [telefono, setTelefono] = useState(0);
  const [estado, setEstado] = useState(true);

  
  const cambiaNombre = (event) => setNombre(event.target.value);
  const cambiaApellido = (event) => setApellido(event.target.value);
  const cambiaCurso = (event) => setCurso(event.target.value);
  const cambiaEmail = (event) => setEmail(event.target.value);
  const cambiaDomicilio = (event) => setDomicilio(event.target.value);
  const cambiaTelefono = (event) => setTelefono(event.target.value);
  const cambiaEstado = () => setEstado(!estado);

  const nuevoAlumno = {
    LU: alu.Lu,
    nombre: nombre === "" ? "" : nombre,
    apellido: apellido === "" ? "" : apellido,
    curso: curso === "" ? "" : curso,
    email: email === "" ? "" : email,
    domicilio: domicilio === "" ? "" : domicilio,
    telefono: telefono === 0 ? "" : telefono,
    estado,
  };

  return (
    <>
      <div>
        LU = {alu.Lu}
        Nombre = <input placeholder="Nombre" type="text" onChange={cambiaNombre} /> -
        Apellido = <input placeholder="Apellido" type="text" onChange={cambiaApellido} /> -
        Curso = <input placeholder="Curso" type="text" onChange={cambiaCurso} /> -
        Email = <input placeholder="Email" type="email" onChange={cambiaEmail} /> -
        Domicilio = <input placeholder="Domicilio" type="text" onChange={cambiaDomicilio} /> -
        Teléfono = <input placeholder="Teléfono" type="number" onChange={cambiaTelefono} /> -
        Estado = <input type="checkbox" checked={estado} onChange={cambiaEstado} /> -
        <button onClick={() => setAlu([...alumnos, nuevoAlumno])}>Guardar</button>
      </div>
    </>
  );
};