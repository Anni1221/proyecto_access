import React from 'react';
import '../Styles/Formulario.css';
import { Link } from 'react-router-dom';
import Logo from '../Assets/Img/logo.png';

function Header() {
    const [isDropdownVisible, setIsDropdownVisible] = React.useState(false);
  
    const toggleDropdown = () => {
      setIsDropdownVisible(!isDropdownVisible);
    };
  
    return (
      <header className="App-header">
        <div className="icono-container">
          <div onClick={toggleDropdown} className="user-icon" />
          {isDropdownVisible && (
            <div className="dropdown-menu" style={{ right: 0, left: 'auto' }}>
              <ul>
                <li>
                  <Link to="/perfil">
                    <i className="fas fa-user-edit"></i> Actualizar Perfil
                  </Link>
                </li>
                <li>
                  <Link to="/inicioVig">
                    <i className="fas fa-home"></i> Inicio
                  </Link>
                </li>
                <li>
                  <Link to="/inicio_sesion">
                    <i className="fas fa-sign-out-alt"></i> Cerrar sesión
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className="logo">
          <a href="/InicioVig">
            <img src={Logo} alt="Logo" />
          </a>
        </div>
        
        <nav className="menu">
          <div className="title-container">
            <h1 className="Conjunto-title">
              Conjunto Residencial Zafiro la Prosperidad
            </h1>
          </div>
        </nav>
      </header>
    );
  }

export default Header;