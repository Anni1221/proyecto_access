import React, { useState } from 'react';
import '../Styles/Formulario.css';
import { Link } from 'react-router-dom';
import Logo from '../Assets/Img/logo.png';

import Usuario  from '../Assets/Img/usuario.png';

const HeaderInAd = () => {


  const [dropdownMenuOpen, setDropdownMenuOpen] = useState(false);

  return (
    <header className="App-header">
      
      <div className="iconos-container">
        <div className="icono-container" style={{ display: 'flex' }}>
        
          <img src={Usuario} alt="usuario" id="userIcon" onClick={() => setDropdownMenuOpen(!dropdownMenuOpen)} />
        </div>
      </div>
      {dropdownMenuOpen && (
        <div id="dropdownMenu" className="dropdown-menu">
          <ul>
            <li><Link to="perfil.html"><i className="fas fa-user-edit"></i> Actualizar Perfil</Link></li>
            <li><Link to="inicioVig.html"><i className="fas fa-home"></i> Inicio</Link></li>
            <li><Link to="inicio_sesion.html"><i className="fas fa-sign-out-alt"></i> Cerrar sesión</Link></li>
          </ul>
        </div>
      )}
      <div className="logo">
        <a href="/InicioResi">
          <img src={Logo} alt="Logo" />
        </a>
      </div>
      <nav className="menu">
      <div className="title-container" style={{ marginLeft: '20px' }}>
  <h1 className="Conjunto-title">
    Conjunto Residencial Zafiro la Prosperidad
  </h1>
</div>

      </nav>
    </header>
  );
};

export default HeaderInAd;