function Titulo() {
  // (es jsx) -> React.createElement
  const nombre = "user";
  if (nombre) {
    return <h1>Hola {nombre} </h1>;
  }
  return <h1>Hola Tomas</h1>;
}

export default Titulo;
