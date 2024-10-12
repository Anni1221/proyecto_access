import React, { useState } from 'react';
import '../Styles/Formulario.css';
import { Link } from 'react-router-dom';
import Logo from '../Assets/Img/logo.png';
import Vermas from '../Assets/Img/vermas.png';
import Usuario  from '../Assets/Img/usuario.png';

const HeaderResi = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [contactAdminOpen, setContactAdminOpen] = useState(false);
  const [dropdownMenuOpen, setDropdownMenuOpen] = useState(false);

  return (
    <header className="App-header">
      <nav className="sidebar menu" id="sidebar" style={{ left: sidebarOpen ? '0px' : '-250px' }}>
        <ul>
          <li><Link to="/calendario" id="calendarToggle">Ver calendario <i className="fas fa-calendar-alt"></i></Link></li>
          <li><div id="calendarContainer" className="calendar-container"></div></li>
          <li><span id="contactAdmin" onClick={() => setContactAdminOpen(!contactAdminOpen)}><i className="fas fa-envelope"></i> Contactar Administrador</span></li>
          {contactAdminOpen && (
            <div id="contactAdminBox" className="contact-admin-box">
              <h2 style={{ color: 'white' }}>¿Desea contactar al administrador por correo?</h2>
              <p>Haga clic en el botón para abrir su cuenta de correo electrónico y enviar un mensaje.</p>
              <a href="mailto:administracion@conjuntozafiro.com.co?subject=Consulta&body=Hola,%20me%20gustaría%20informar%20sobre%20el%20siguiente%20incidente:%20%0A%0A[Detalles]%0A%0AGracias.">
                <button className="contact-admin-button">
                  Enviar Correo <i className="fas fa-envelope"></i>
                </button>
              </a>
            </div>
          )}
        </ul>
      </nav>
      <div className="iconos-container">
        <div className="icono-container" style={{ display: 'flex' }}>
          <img src={Vermas} alt="vermas" id="toggleMenu" onClick={() => setSidebarOpen(!sidebarOpen)} />
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
        <div className="title-container">
          <h1 className="Conjunto-title">
            Conjunto Residencial Zafiro la Prosperidad
          </h1>
        </div>
      </nav>
    </header>
  );
};

export default HeaderResi;