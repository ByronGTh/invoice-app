export const ListaDeUsuarios = ()=>{
    return(<form>
        <input className="form-control my-3 w-75" type="text" name="nombre_usuario" placeholder="Nombre de usuario"/>
        <input className="form-control my-3 w-75" type="text" name="clave" placeholder="Clave"/>
        <input className="form-control my-3 w-75" type="text" name="email" placeholder="Email"/>
        <button className="btn btn-success">Guardar</button>
    </form>);
}