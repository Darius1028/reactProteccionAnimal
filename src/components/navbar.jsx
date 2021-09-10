import {
  Link
} from "react-router-dom";

const NavBar = () => {
  return (
    <nav className='nav d-flex justify-content-between'>
      <Link to="/" className='p-2' >
        Inicio
      </Link> 
      <Link to="/form" className='p-2 ' >
        Formulario de adopción
      </Link> 
      <Link to="/about" className='p-2 ' >
        Quienes Somos
      </Link> 
      <Link to="/contact" className='p-2 ' >
        Contáctanos
      </Link> 
    </nav>
  );
};

export default NavBar;
