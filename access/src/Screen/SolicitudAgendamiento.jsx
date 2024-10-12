import React, { useState, useEffect } from 'react';
import HeaderReportes from '../Components/HeaderReportes';
import Footer from '../Components/Footer';
import '../Styles/App3.css';
import Solicitud from '../Assets/Img/solicitud.png';
import Proximo from '../Assets/Img/proximo.png';

const SolicitudAgendamiento = () => {
  const [nombresResidente, setNombresResidente] = useState('');
  const [apellidosResidente, setApellidosResidente] = useState('');
  const [telefono, setTelefono] = useState('');
  const [nombresVisitante, setNombresVisitante] = useState('');
  const [apellidosVisitante, setApellidosVisitante] = useState('');
  const [fechaVisita, setFechaVisita] = useState('');
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
            <img src={Solicitud} alt="Icono Grande" className="icono-grande" />
            <h1>Solicitud Residente</h1>
            <br />
            <h2>Al recibir la solicitud por parte del residente podrá aceptar o rechazar la solicitud</h2>
            <img src={Proximo} alt="Icono Animado" className="icono-animado" />
          </div>
          <div className="right-section">
            <div className="main-content">
              <div className="content-wrapper">
                <header>
                  <h2 className="center-title">Solicitud Residente</h2>
                </header>
                <div className="reporte-container">
                  <form id="reporte-form">
                  <label htmlFor="nombres-residente">
                      <i className="fas fa-user" /> Nombres del residente:
                    </label>
                    <input
                    type="text"
                    id="nombres-residente"
                    name="nombres-residente"
                    value="Pepe"
                    disabled
                    onChange={(e) => setNombresResidente(e.target.value)}
                    required
                    />

                    <label htmlFor="apellidos-residente">
                      <i className="fas fa-user" /> Apellidos del residente:
                    </label>
                    <input
                    type="text"
                    id="apellidos-residente"
                    name="apellidos-residente"
                    value="Zepeda"
                    disabled
                    onChange={(e) => setApellidosResidente(e.target.value)}
                    required
                    />

                    <label htmlFor="telefono">
                      <i className="fas fa-id-card" /> Teléfono:
                    </label>
                    <input
                    type="text"
                    id="telefono"
                    name="telefono"
                    value="0987654321"
                    disabled
                    onChange={(e) => setTelefono(e.target.value)}
                    required
                    />

                    <label htmlFor="nombres-visitante">
                      <i className="fas fa-user" /> Nombres del visitante:
                    </label>
                    <input
                    type="text"
                    id="nombres-visitante"
                    name="nombres-visitante"
                    value="Camila"
                    disabled
                    onChange={(e) => setNombresVisitante(e.target.value)}
                    required
                    />

                    <label htmlFor="apellidos-visitante">
                      <i className="fas fa-user" /> Apellidos del visitante:
                    </label>
                    <input
                    type="text"
                    id="apellidos-visitante"
                    name="apellidos-visitante"
                    value="Rodríguez"
                    disabled
                    onChange={(e) => setApellidosVisitante(e.target.value)}
                    required
                    />

                    <label htmlFor="fecha-visita">
                      <i className="fas fa-calendar-alt" /> Fecha de visita:
                    </label>
                    <input
                    type="date"
                    id="fecha-visita"
                    name="fecha-visita"
                    value="20-08-2024"
                    disabled
                    onChange={(e) => setFechaVisita(e.target.value)}
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
                    disabled
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
                    value="101"
                    disabled
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
                    disabled
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
                    value="MX122"
                    disabled
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
                    value="Renault"
                    disabled
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
                    value="Negro"
                    disabled
                    onChange={(e) => setColor(e.target.value)}
                    required
                    />
                
                <div className="center-buttons">
                  <button className="ver-mas-button" id="aceptarBtn" type="submit">
                    <i className="fas fa-aceptar" /> Aceptar
                  </button>
                  <button className="ver-mas-button" id="rechazarBtn" type="submit">
                    <i className="fas fa-rechazar" /> Rechazar
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

export default SolicitudAgendamiento;