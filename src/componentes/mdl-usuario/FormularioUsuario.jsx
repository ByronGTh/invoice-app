import { useState } from "react";

export const FormularioUsuario = ( {handlerAgregarUsuario} ) =>{

    const initialUserForm = {
        nombre_usuario: '',
        clave: '',
        email: ''
    }
    const [formularioUsuario, setFormularioUsuario] = useState(initialUserForm);
    const {nombre_usuario, clave, email} = formularioUsuario;

    const onInputChange = ({ target }) =>{
        console.log(target.value);
        const {name, value} = target;
        setFormularioUsuario({
            ...formularioUsuario,
            [name] : value
        });
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if(!nombre_usuario || !clave || !email){
            alert('Todos los campos del formulario deben de estar llenos');
            return;
        }
        //console.log(formularioUsuario);
        handlerAgregarUsuario(formularioUsuario);
        setFormularioUsuario(initialUserForm);
    }
    
    return(<form onSubmit={ onSubmit }>
        <input className="form-control my-3 w-75" type="text" name="nombre_usuario" onChange={ onInputChange } value={ nombre_usuario } placeholder="Nombre de usuario"/>
        <input className="form-control my-3 w-75" type="password" name="clave" onChange={ onInputChange } value={ clave } placeholder="Clave"/>
        <input className="form-control my-3 w-75" type="email" name="email" onChange={ onInputChange } value={ email } placeholder="Email"/>
        <button className="btn btn-success">Guardar</button>
    </form>);
}