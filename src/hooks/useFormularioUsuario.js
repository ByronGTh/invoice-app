import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const initialUserForm = {
    nombre_usuario: '',
    clave: '',
    email: ''
}

export const useFormularioUsuario = ( {handlerAgregarUsuario, usuarioSeleccionado} ) => {
    const [formularioUsuario, setFormularioUsuario] = useState(initialUserForm);
    const {nombre_usuario, clave, email} = formularioUsuario;

    useEffect( ()=>{
        setFormularioUsuario({
            ...usuarioSeleccionado, 
            clave: ''
        });
    }, [usuarioSeleccionado] );

    const onInputChange = ({ target }) =>{
        const {name, value} = target;
        setFormularioUsuario({
            ...formularioUsuario,
            [name] : value
        });
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if(!nombre_usuario || (!clave && !formularioUsuario.id) || !email){
            Swal.fire(
                'Error de validacion',
                'Debe completar los campos del formulario',
                'Error'
              )
            return;
        }
        handlerAgregarUsuario(formularioUsuario);
        setFormularioUsuario(initialUserForm);
    }

    return{
        initialUserForm,
        formularioUsuario,
        nombre_usuario,
        clave,
        email,
        onInputChange,
        onSubmit
    }
}