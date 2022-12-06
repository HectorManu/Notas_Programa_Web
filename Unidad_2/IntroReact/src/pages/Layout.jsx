import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    
    return (
        <>
            <nav>
                
                <ul className="nav nav-tabs bg-primary">
                    <li className="nav-item">
                        <Link to="/" className="bg-primary text-white nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/blogs" className="bg-primary text-white nav-link">Blogs</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="bg-primary text-white nav-link">Contact</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/unonuevo" className="bg-primary text-white nav-link">UNO NUEVO PAPU</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/garage" className="bg-primary text-white nav-link">Garage</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/lista" className="bg-primary text-white nav-link">Lista</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/sumar" className="bg-primary text-white nav-link">Sumar</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/conversor" className="bg-primary text-white nav-link">Conversor</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/multipli" className="bg-primary text-white nav-link">Multiplicadora</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/invitados" className="bg-primary text-white nav-link">Lista de Invitados</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>
    )
};

export default Layout;