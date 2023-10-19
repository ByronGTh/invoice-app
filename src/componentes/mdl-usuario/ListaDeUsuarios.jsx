import { useEffect, useReducer, useState } from "react";
import { FormularioUsuario } from "./FormularioUsuario";
import { usersReducer } from "../../reducer/usersReducer";

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
    }

    const handlerModificar = (usuario) => {
        setUsuarioSeleccionado({ ...usuario });
    }

    const handlerEliminarUsuario = ( id ) =>{
        dispatch({
            type: 'eliminarUsuario',
            payload: id
        });
    }

    return(<div className="row">
        <div className="col-6">
            <FormularioUsuario handlerAgregarUsuario={ handlerAgregarUsuario } usuarioSeleccionado={ usuarioSeleccionado }/>
        </div>
        <div className="col-6">
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