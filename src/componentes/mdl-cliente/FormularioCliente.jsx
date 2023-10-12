export const FormularioCliente = () => {
    return (<>
        <form action="">
            <div className="input-group input-group-sm mb-3">
                <span className="input-group-text" id="inputGroup-sizing-sm">Nombres</span>
                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" placeholder="Nombres del cliente" />
            </div>

            <div className="input-group input-group-sm mb-3">
                <span className="input-group-text" id="inputGroup-sizing-sm">Apellido paterno</span>
                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" placeholder="Apellido paterno" />
            </div>

            <div className="input-group input-group-sm mb-3">
                <span className="input-group-text" id="inputGroup-sizing-sm">Apellido materno</span>
                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" placeholder="Apellido materno" />
            </div>

            <div className="input-group input-group-sm mb-3">
                <span className="input-group-text" id="inputGroup-sizing-sm">Telefono</span>
                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" placeholder="Numero de telefono" />
            </div>

            <div className="input-group">
                <span className="input-group-text">Direccion</span>
                <textarea className="form-control" aria-label="With textarea"></textarea>
            </div>

            <div className="card mt-3">
                <div className="row g-0">
                    <div className="col-md-2">
                        <span>Informacion de Trabajo o Negocio</span>
                    </div>
                    <div className="col-md-10">
                        <div className="card-body">
                            <div className="input-group input-group-sm mb-3">
                                <span className="input-group-text" id="inputGroup-sizing-sm">Empresa</span>
                                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" placeholder="Nombres de la empresa o lugar de trabajo" />
                            </div>
                            <div className="input-group input-group-sm mb-3">
                                <span className="input-group-text" id="inputGroup-sizing-sm">Puesto</span>
                                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" placeholder="Puesto de trabajo" />
                            </div>
                            <div className="input-group">
                                <span className="input-group-text">Direccion</span>
                                <textarea className="form-control" aria-label="With textarea"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-md-3">
                    <button type="button" className="btn btn-primary">Guardar registro</button>
                </div>
            </div>

        </form>
    </>);
}