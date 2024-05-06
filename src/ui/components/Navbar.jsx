import { Link, NavLink } from 'react-router-dom';


export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark ">
            
            <Link 
                
                className="navbar-brand m-1" 
                to="/"
            >
                Mi Perfil
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className="nav-item nav-link" 
                        to="/project"
                    >
                        Proyectos
                    </NavLink>

                    
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">
                    <NavLink 
                        className="nav-item nav-link" 
                        to="/contact"
                    >
                        Contacto
                    </NavLink>
                </ul>
            </div>
        </nav>

        
    )
}