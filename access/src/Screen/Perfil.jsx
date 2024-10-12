import React, { useState, useEffect } from 'react';
import HeaderReportes from '../Components/HeaderReportes';
import Footer from '../Components/Footer';
import '../Styles/App3.css';
import Actualizar from '../Assets/Img/actualizar.png';
import Proximo from '../Assets/Img/proximo.png';

const ActualizarPerfil = () => {
  const [nombres, setNombres] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [tipodoc, setTipodoc] = useState('');
  const [numdoc, setNumdoc] = useState('');
  const [telefono, setTelefono] = useState('');
  const [email, setEmail] = useState('');
  const [contrasenia, setContrasenia] = useState('');

  return (
    <div>
      <HeaderReportes />
      <div className="App">
        <div className="container">
          <div className="left-section">
            <img src={Actualizar} alt="Icono Grande" className="icono-grande" />
            <h1>Actualizar Perfil</h1>
            <br />
            <h2>Aquí puedes actualizar tus datos</h2>
            <img src={Proximo} alt="Icono Animado" className="icono-animado" />
          </div>
          <div className="right-section">
            <div className="main-content">
              <div className="content-wrapper">
                <header>
                  <h2 className="center-title">Actualizar Perfil</h2>
                </header>
                <div className="reporte-container">
                  <form id="reporte-form">
                  <label htmlFor="nombres">
                      <i className="fas fa-user" /> Nombres:
                    </label>
                    <input
                    type="text"
                    id="nombres"
                    name="nombres"
                    value="Carlos"
                    onChange={(e) => setNombres(e.target.value)}
                    required
                    />

                    <label htmlFor="apellidos">
                      <i className="fas fa-user" /> Apellidos:
                    </label>
                    <input
                    type="text"
                    id="apellidos"
                    name="apellidos-"
                    value="Torrez"
                    onChange={(e) => setApellidos(e.target.value)}
                    required
                    />

                    <label htmlFor="tipodoc">
                      <i className="fas fa-id-card" /> Tipo Documento:
                    </label>
                    <input
                    type="text"
                    id="tipodoc"
                    name="tipodoc"
                    value="CC"
                    onChange={(e) => setTipodoc(e.target.value)}
                    required
                    />

                    <label htmlFor="numdoc">
                      <i className="fas fa-id-card" /> Número Documento:
                    </label>
                    <input
                    type="text"
                    id="numdoc"
                    name="numdoc"
                    value= "1028680208"
                    onChange={(e) => setTipodoc(e.target.value)}
                    required
                    />

                    <label htmlFor="telefono">
                      <i className="fas fa-id-card" /> Teléfono:
                    </label>
                    <input
                    type="text"
                    id="telefono"
                    name="telefono"
                    value="3101234567"
                    onChange={(e) => setTelefono(e.target.value)}
                    required
                    />

                    <label htmlFor="email">
                      <i className="fas fa-lock" /> Correo electrónico:
                    </label>
                    <input
                    type="email"
                    id="email"
                    name="email"
                    value="carlosT@gmail.com"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    />

                    <label htmlFor="contrasenia">
                      <i className="fas fa-lock" /> Contraseña:
                    </label>
                    <input
                    type="password"
                    id="contrasenia"
                    name="contrasenia"
                    value="admin123*"
                    onChange={(e) => setContrasenia(e.target.value)}
                    required
                    />

                <div className="center-buttons">
                  <button className="ver-mas-button" id="actualizarBtn" type="submit">
                    <i className="fas fa-actualizar" /> Actualizar
                  </button>
                </div>
                  </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <Footer />
    </div>
    </div>
  );
};

export default ActualizarPerfil;