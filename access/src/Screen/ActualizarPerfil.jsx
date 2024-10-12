import React, { useState, useEffect } from 'react';
import HeaderReportes from '../Components/HeaderReportes';
import Footer from '../Components/Footer';
import '../Styles/App3.css';
import Actualizar from '../Assets/Img/actualizar.png';
import Proximo from '../Assets/Img/proximo.png';

const ActualizarPerfil = () => {
  const [tipodoc, setTipodoc] = useState('');
  const [nombres, setNombres] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [numdoc, setNumdoc] = useState('');
  const [telefono, setTelefono] = useState('');
  const [email, setEmail] = useState('');
  const [contrasenia, setContrasenia] = useState('');
  const [torre, setTorre] = useState('');
  const [apartamento, setApartamento] = useState('');
  const [vehiculo, setVehiculo] = useState('');
  const [placa, setPlaca] = useState('');
  const [modelo, setModelo] = useState('');
  const [color, setColor] = useState('');

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
                    <label htmlFor="tipodoc">
                      <i className="fas fa-id-card" /> Tipo Documento:
                    </label>
                    <input
                    type="text"
                    id="tipodoc"
                    name="tipodoc"
                    value="CE"
                    onChange={(e) => setTipodoc(e.target.value)}
                    required
                    />

                    <label htmlFor="nombres">
                      <i className="fas fa-user" /> Nombres:
                    </label>
                    <input
                    type="text"
                    id="nombres"
                    name="nombres"
                    value="Alma"
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
                    value="Ramirez"
                    onChange={(e) => setApellidos(e.target.value)}
                    required
                    />

                    <label htmlFor="numdoc">
                      <i className="fas fa-id-card" /> Número Documento:
                    </label>
                    <input
                    type="text"
                    id="numdoc"
                    name="numdoc"
                    value= "1020304050"
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
                    value="3145562186"
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
                    value="almaramirez@gmail.com"
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
                    value="Almita1234"
                    onChange={(e) => setContrasenia(e.target.value)}
                    required
                    />

                    <label htmlFor="torre">
                      <i className="fas fa-building" /> Torre:
                    </label>
                    <input
                    type="text"
                    id="torre"
                    name="torre"
                    value="A"
                    onChange={(e) => setTorre(e.target.value)}
                    required
                    />

                    <label htmlFor="apartamento">
                      <i className="fas fa-building" /> Apartamento:
                    </label>
                    <input
                    type="number"
                    id="apartamento"
                    name="apartamento"
                    value="201"
                    onChange={(e) => setApartamento(e.target.value)}
                    required
                    />

                    <label htmlFor="vehiculo">
                      <i className="fas fa-car" /> Vehículo:
                    </label>
                    <input
                    id="vehiculo"
                    name="vehiculo"
                    value="Si"
                    onChange={(e) => setVehiculo(e.target.value)}
                    required
                    />
                    
                    <label htmlFor="placa">
                      <i className="fas fa-car" /> Placa:
                    </label>
                    <input
                    type="text"
                    id="placa"
                    name="placa"
                    value="sos465"
                    onChange={(e) => setPlaca(e.target.value)}
                    required
                    />
                      
                    <label htmlFor="modelo">
                      <i className="fas fa-car" /> Modelo:
                    </label>
                    <input
                    type="text"
                    id="modelo"
                    name="modelo"
                    value="BMW"
                    onChange={(e) => setModelo(e.target.value)}
                    required
                    />

                    <label htmlFor="color">
                      <i className="fas fa-car" /> Color:
                    </label>
                    <input
                    type="text"
                    id="color"
                    name="color"
                    value="Azul"
                    onChange={(e) => setColor(e.target.value)}
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
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <Footer />
    </div>
    </div>
  );
};

export default ActualizarPerfil;