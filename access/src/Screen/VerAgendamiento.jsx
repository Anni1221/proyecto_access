import React from 'react';
import '../Styles/InicioVig.css';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Pendiente from '../Assets/Img/pendiente.png';
import Planificacion from '../Assets/Img/planificacion.png';
import Verificado from '../Assets/Img/verificado.png';
import Coche from '../Assets/Img/coche.png';
import Complet from '../Assets/Img/complet.png';
const VerAgendamiento = () => {
  return (
    <div>
    <div className="App">
      <Header />
      <div className="main-content" id="mainContent">
        <header>
          <h2 className="center-title">Agendamientos de Hoy</h2>
          <div className="search-container">
            <select id="searchOption" className="search-bar">
              <option value disabled selected>Selecciona una opción</option>
              <option value="apartment">Buscar por número de apartamento</option>
              <option value="name">Buscar por nombre del visitante</option>
            </select>
            <div className="input-with-icon" style={{ display: 'none' }}>
              <i className="fas fa-search icon" />
              <input type="text" id="searchInput" placeholder="Ingrese su búsqueda aquí..." className="search-bar" />
            </div>
          </div>
        </header>
        {/* Resumen Diario */}
        <div className="summary">
          <div className="summary-item">
            <h3>Visitas Programadas</h3>
            <p>10</p>
            <div className="option-icon">
              <img src={Planificacion} alt="Visitas Programadas" />
            </div>
          </div>
          <div className="summary-item">
            <h3>Visitas Pendientes</h3>
            <p>6</p>
            <div className="option-icon">
              <img src={Pendiente} alt="Visitas Pendientes" />
            </div>
          </div>
          <div className="summary-item">
            <h3>Visitas Activas</h3>
            <p>6</p>
            <div className="option-icon">
              <img src={Verificado} alt="Visitas Activas" />
            </div>
          </div>
          <div className="summary-item">
            <h3>Visitas Completadas</h3>
            <p>4</p>
            <div className="option-icon">
              <img src={Complet} alt="Visitas Completadas" />
            </div>
          </div>
          <div className="summary-item">
            <h3>Vehículos Registrados</h3>
            <p>5</p>
            <div className="option-icon">
              <img src={Coche} alt="coche" />
            </div>
          </div>
        </div>
        {/* Lista de Agendamientos */}
        <div className="agendamientos">
          <div className="agendamiento-card">
            <h2><i className="fas fa-building" /> TORRE D</h2>
            <h3><i className="fas fa-door-open" /> Apartamento 101</h3>
            <p><i className="fas fa-user" /> Nombre Visitante: </p>
            <p><i className="fas fa-clock" /> Hora de entrada: </p>
            <p><i className="fas fa-car" /> Vehículo:</p>
            <div className="button-container">
              <button className="ver-mas-button"><i className="fas fa-info-circle" /> Ver más</button>
            </div>
            <div id="popup" className="popup">
              <div className="popup-content">
                <div className="modal" id="modal-1">
                  <div className="modal-content">
                    <span className="close">×</span>
                    <h2>Detalles del Apartamento 102 de la TORRE D</h2>
                    <ul>
                      <li><i className="fas fa-user" /> Nombre Visitante Principal: </li>
                      <li><i className="fas fa-phone" /> Teléfono: </li>
                      <li><i className="fas fa-parking" /> Parqueadero: </li>
                      <li><i className="fas fa-id-card" /> Tipo de Documentos: </li> {/* Ícono de identificación */}
                      <li><i className="fas fa-id-badge" /> Número de Documento: </li> {/* Ícono de documento */}
                      <li><i className="fas fa-tags" /> Cantidad de Visitantes: </li> 
                      <li><i className="fas fa-calendar-alt" /> Fecha de salida: </li> 
                      <li><i className="fas fa-clock" /> Hora de Salida: </li> 
                    </ul>
                    <button id="activarBtn">Marcar como activa</button>
                    <button id="completadaBtn">Marcar como completada</button>
                    <button id="pendienteBtn">Pendiente</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="agendamiento-card">
            <h2><i className="fas fa-building" /> TORRE B</h2>
            <h3><i className="fas fa-door-open" /> Apartamento 202</h3>
            <p><i className="fas fa-user" /> Nombre Visitante: </p>
            <p><i className="fas fa-clock" /> Hora de entrada:</p>
            <p><i className="fas fa-car" /> Vehículo: </p>
            <div className="button-container">
              <button className="ver-mas-button"><i className="fas fa-info-circle" /> Ver más</button>
            </div>
            <div className="modal" id="modal-2">
              <div className="modal-content">
                <span className="close">×</span>
                <h2>Detalles del Apartamento 202 de la TORRE B</h2>
                <ul>
                  <li><i className="fas fa-user" /> Nombre Visitante Principal: </li>
                  <li><i className="fas fa-phone" /> Teléfono: </li>
                  <li><i className="fas fa-parking" /> Parqueadero: </li>
                  <li><i className="fas fa-id-card" /> Tipo de Documentos: </li> {/* Ícono de identificación */}
                  <li><i className="fas fa-id-badge" /> Número de Documento: </li> {/* Ícono de documento */}
                  <li><i className="fas fa-tags" /> Cantidad de Visitantes: </li> 
                  <li><i className="fas fa-calendar-alt" /> Fecha de salida: </li> 
                  <li><i className="fas fa-clock" /> Hora de Salida: </li> 
                </ul>
                <button id="activarBtn">Marcar como activa</button>
                <button id="completadaBtn">Marcar como completada</button>
                <button id="pendienteBtn">Pendiente</button>
              </div>
            </div>
          </div>
          <div className="agendamiento-card">
            <h2><i className="fas fa-building" /> TORRE A</h2>
            <h3><i className="fas fa-door-open" /> Apartamento 303</h3>
            <p><i className="fas fa-user" /> Nombre Visitante: </p>
            <p><i className="fas fa-clock" /> Hora de entrada:</p>
            <p><i className="fas fa-car" /> Vehículo: </p>
            <div className="button-container">
              <button className="ver-mas-button"><i className="fas fa-info-circle" /> Ver más</button>
            </div>
            <div className="modal" id="modal-2">
              <div className="modal-content">
                <span className="close">×</span>
                <h2>Detalles del Apartamento 303 de la TORRE A</h2>
                <ul>
                  <li><i className="fas fa-user" /> Nombre Visitante Principal: </li>
                  <li><i className="fas fa-phone" /> Teléfono: </li>
                  <li><i className="fas fa-parking" /> Parqueadero: </li>
                  <li><i className="fas fa-id-card" /> Tipo de Documentos: </li> {/* Ícono de identificación */}
                  <li><i className="fas fa-id-badge" /> Número de Documento: </li> {/* Ícono de documento */}
                  <li><i className="fas fa-tags" /> Cantidad de Visitantes: </li> 
                  <li><i className="fas fa-calendar-alt" /> Fecha de salida: </li> 
                  <li><i className="fas fa-clock" /> Hora de Salida: </li> 
                </ul>
                <button id="activarBtn">Marcar como activa</button>
                <button id="completadaBtn">Marcar como completada</button>
                <button id="pendienteBtn">Pendiente</button>
              </div>
            </div>
          </div>
          <div className="agendamiento-card">
            <h2><i className="fas fa-building" /> TORRE C</h2>
            <h3><i className="fas fa-door-open" /> Apartamento 601</h3>
            <p><i className="fas fa-users" />Nombre Visitante: </p>
            <p><i className="fas fa-clock" /> Hora de entrada:</p>
            <p><i className="fas fa-car" /> Vehículo: </p>
            <div className="button-container">
              <button className="ver-mas-button"><i className="fas fa-info-circle" /> Ver más</button>
            </div>
            <div className="modal" id="modal-4">
              <div className="modal-content">
                <span className="close">×</span>
                <h2>Detalles del Apartamento 601 de la TORRE C</h2>
                <ul>
                  <li><i className="fas fa-user" /> Nombre Visitante Principal: </li>
                  <li><i className="fas fa-phone" /> Teléfono: </li>
                  <li><i className="fas fa-parking" /> Parqueadero: </li>
                  <li><i className="fas fa-id-card" /> Tipo de Documentos: </li> {/* Ícono de identificación */}
                  <li><i className="fas fa-id-badge" /> Número de Documento: </li> {/* Ícono de documento */}
                  <li><i className="fas fa-tags" /> Cantidad de Visitantes: </li> 
                  <li><i className="fas fa-calendar-alt" /> Fecha de salida: </li> 
                  <li><i className="fas fa-clock" /> Hora de Salida: </li> 
                </ul>
                <button id="activarBtn">Marcar como activa</button>
                <button id="completadaBtn">Marcar como completada</button>
                <button id="pendienteBtn">Pendiente</button>
              </div>
            </div>
          </div>
          {/* Puedes añadir más agendamientos aquí */}
          <button id="scrollDownBtn" className="scroll-btn"><i className="fas fa-arrow-down" /></button>
          <button id="scrollUpBtn" className="scroll-btn" style={{ display: 'none' }}><i className="fas fa-arrow-up" /></button>
        </div>
      </div>
    </div>
    <br></br><br></br> <br></br> <br></br><br></br> <br></br> <br></br> <br></br> <br></br> <br></br>  <br></br> <br></br>   <br></br> 
          <Footer />
          </div>
  );
};

export default VerAgendamiento;