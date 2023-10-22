import { useEffect, useReducer, useState } from "react";
import { FormularioUsuario } from "./FormularioUsuario";
import { usersReducer } from "../../reducer/usersReducer";
import Swal from "sweetalert2";

export const ListaDeUsuarios = ()=>{

    const initialUsers = [{
        id: 1,
        nombre_usuario: 'Nombre Usuario',
        clave: '12345',
        email: 'nombreusuario@correo.com'
    }];

    const initialUserForm = {
        nombre_usuario: '',
        clave: '',
        email: ''
    }

    const [usuarios, dispatch] = useReducer(usersReducer, initialUsers);
    const [usuarioSeleccionado, setUsuarioSeleccionado] = useState(initialUserForm);
    const [formularioVisible, setFormularioVisible] = useState(false);

    const handlerAgregarUsuario = ( usuario ) => {
        let type;

        if(!usuario.id){
            type = 'addUser';
        }else{
            type = 'updateUser'
        }

        dispatch({
            type,
            payload: usuario
        });

        Swal.fire(
            (!usuario.id) ? 'Usuario creado correctamente!' : 'Usuario Actualizado correctamente!',
            (!usuario.id) ? 'El usuario a sido creado correctamente' : 'El usuario ha sido actualizado correctamente',
            'success'
        )
        handlerCerrarFormulario();
    }

    const handlerModificar = (usuario) => {
        setUsuarioSeleccionado({ ...usuario });
        setFormularioVisible(true);
    }

    const handlerEliminarUsuario = ( id ) =>{

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                dispatch({
                    type: 'eliminarUsuario',
                    payload: id
                });
              Swal.fire(
                'Usuario eliminado!',
                'El usuario se a eliminado correctamente.',
                'success'
              )
            }
          })
        
    }

    const handlerAbrirFormulario = () => {
        setFormularioVisible(true);
    }

    const handlerCerrarFormulario = () => {
        setFormularioVisible(false);
        setUsuarioSeleccionado(initialUserForm);
    }

    return(<div className="row">
        {!formularioVisible || 
            <div className="col-6">
                <FormularioUsuario handlerAgregarUsuario={ handlerAgregarUsuario } usuarioSeleccionado={ usuarioSeleccionado } handlerCerrarFormulario={ handlerCerrarFormulario } />
            </div>
        }
        
        <div className="col-6">
            {formularioVisible ||
                <button className="btn btn-primary" onClick={()=>{setFormularioVisible(true)}}>Crear usuario</button> 
            }
            
            {usuarios.length === 0
            ? <div className="alert alert-warning">No hay usuarios en el sistema</div>
            : <table className="table table-hover table-striped">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Usuario</th>
                            <th>Email</th>
                            <th>Editar</th>
                            <th>Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usuarios.map( user => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.nombre_usuario}</td>
                                <td>{user.email}</td>
                                <td>
                                    <button className="btn btn-secondary" onClick={ ()=> handlerModificar(user) }>Editar</button>
                                </td>
                                <td>
                                    <button className="btn btn-danger" onClick={()=> handlerEliminarUsuario(user.id)}>Eliminar</button>
                                </td>
                            </tr>
                        )
                        )}
                        
                    </tbody>
                </table>
            }
            
        </div>
    </div>
    );
}