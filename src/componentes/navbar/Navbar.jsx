import { NavLink } from "react-router-dom";

export const Navbar = () => {
    return (<>
        <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark">
            <div className="container-fluid">
                <button className="navbar-brand" type="button" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                    <span className="navbar-toggler-icon"></span>
                </button>
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
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <i className="bi bi-person-fill"></i>
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </div>
            </div>
        </nav>

        <div className="offcanvas offcanvas-start sidebar-nav" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
            <div className="offcanvas-body p-0">
                <nav className="navbar">
                    <ul className="navbar-nav">
                        <li>
                            <div className="text-muted small fw-bold text-uppercase px-3">
                                CORE
                            </div>
                        </li>
                        <li>
                            <a href="#" className="nav-link px-3 active">
                                <span className="me-2">
                                    <i className="bi bi-speedometer2"></i>
                                </span>
                                <span>Dashboard</span>
                            </a>
                        </li>
                        <li className="my-4">
                            <hr className="dropdown-divider" />
                        </li>
                        <li>
                            <div className="text-muted small fw-bold text-uppercase px-3">
                                INTERFACE
                            </div>
                        </li>
                        <li>
                            <a className="nav-link px-3 sidebar-link" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                                <span className="me-2">
                                    <i className="bi bi-layout-split"></i>
                                </span>
                                <span>Layouts</span>
                                <span className="right-icon ms-auto"><i className="bi bi-chevron-down"></i></span>
                            </a>
                            <div className="collapse" id="collapseExample">
                                <div>
                                    <ul className="navbar-nav ps-3">
                                        <li>
                                            <a href="" className="nav-link">
                                                <span className="me-2">
                                                    <i className="bi bi-layout-split"></i>
                                                </span>
                                                <span>Nested</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </>);
}