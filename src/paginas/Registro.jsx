

const Registro =()=>{


    
    return (
        <>
        <input type="text" placeholder="Nombre"  ref={refNombre}/>
        <input type="password" placeholder="Contraseña" ref={refClave} />
        <button onClick={validaVacios}>Iniciar Sesión</button>
      </>
    )
}
export default Registro