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
                </ul>
            </nav>

            <Outlet />
        </>
    )
};

export default Layout;