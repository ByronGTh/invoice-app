import { NavLink } from "react-router-dom";

export const Navbar = () => {
    return (<>
        <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Sistema de Facturacion</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className={'nav-link active'} to={"/"}>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={'nav-link'} to={"/factura"}>Factura</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={'nav-link'} to={"/productos"}>Productos</NavLink>
                        </li>
                    </ul>
                </div>
                <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
  <i class="bi bi-person-fill"></i>
  </button>
  <ul class="dropdown-menu dropdown-menu-end">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
            </div>
        </nav>
    </>);
}