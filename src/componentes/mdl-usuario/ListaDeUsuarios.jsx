import { useState } from "react";
import { FormularioUsuario } from "./FormularioUsuario";

export const ListaDeUsuarios = ()=>{

    const initialUsers = [{
        id: 1,
        nombre_usuario: 'Nombre Usuario',
        clave: '12345',
        email: 'nombreusuario@correo.com'
    }];

    return(<div className="row">
        <div className="col-6">
            <FormularioUsuario/>
        </div>
        <div className="col-6">
            <table className="table table-hover table-striped">
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
                    {initialUsers.map( user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.nombre_usuario}</td>
                            <td>{user.email}</td>
                            <td>
                                <button className="btn btn-secondary">Editar</button>
                            </td>
                            <td>
                                <button className="btn btn-danger">Eliminar</button>
                            </td>
                        </tr>
                    )
                    )}
                    
                </tbody>
            </table>
        </div>
    </div>
    );
}