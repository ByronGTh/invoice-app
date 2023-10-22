import { useFormularioUsuario } from "../../hooks/useFormularioUsuario";

export const FormularioUsuario = ( {handlerAgregarUsuario, usuarioSeleccionado, handlerCerrarFormulario} ) =>{

    const{
        formularioUsuario,
        nombre_usuario,
        clave,
        email,
        onInputChange,
        onSubmit
    } = useFormularioUsuario( {handlerAgregarUsuario, usuarioSeleccionado} );
    
    return(<form onSubmit={ onSubmit }>
        <input className="form-control my-3 w-75" type="text" name="nombre_usuario" onChange={ onInputChange } value={ nombre_usuario } placeholder="Nombre de usuario"/>
        {formularioUsuario.id > 0 || 
            <input className="form-control my-3 w-75" type="password" name="clave" onChange={ onInputChange } value={ clave } placeholder="Clave"/>
        }
        <input className="form-control my-3 w-75" type="email" name="email" onChange={ onInputChange } value={ email } placeholder="Email"/>
        <button className="btn btn-success">{formularioUsuario.id > 0 ? 'Editar' : 'Guardar'}</button>
        <button className="btn btn-success" onClick={ ()=>handlerCerrarFormulario() } type="button">Cerrar</button>
    </form>);
}