import React from 'react';
import '../Styles/torres.css';
import Footer from '../Components/Footer';
import HeaderReportes from '../Components/HeaderReportes';

const TorreDComponent = () => {
  return (
    <div className="App">
      <HeaderReportes />
      <div className="content-wrapper2">
        <header>
          <h2 className="center-title">Información de Propietarios</h2>
          <div className="search-container">
            <select id="searchOption" className="search-bar">
              <option value="" disabled selected>Selecciona una opción</option>
              <option value="apartment">Buscar por número de apartamento</option>
              <option value="name">Buscar por nombre del residente</option>
            </select>
            <div className="input-with-icon" style={{ display: 'none' }}>
              <i className="fas fa-search icon"></i>
              <input type="text" id="searchInput" placeholder="Ingrese su búsqueda aquí..." className="search-bar" />
            </div>
          </div>
        </header>
        <button id="scrollDownBtn" className="scroll-btn"><i className="fas fa-arrow-down"></i></button>
        <button id="scrollUpBtn" className="scroll-btn" style={{ display: 'none' }}>
          <i className="fas fa-arrow-up"></i>
        </button>
        <h1 className="apartment-list-title typing-text">Torre D</h1>
        <h2 className="access-check-title">Conjunto Residecial Zafiro La Prosperidad</h2>
        <h3 className="access-check-title">Access Check</h3>
        <div className="apartment-list">
          {/* Apartamentos de la Torre D */}
        </div>
      </div>
      <div className="modal" id="modal-101">
        <div className="modal-content">
          <span className="close">&times;</span>
          <h2>Detalles del Apartamento 101</h2>
          <ul>
            <li><i className="fas fa-user"></i> Nombre Residente: </li>
            <li><i className="fas fa-phone"></i> Teléfono: </li>
            <li><i className="fas fa-envelope"></i> Correo Electrónico: </li>
            <li><i className="fas fa-parking"></i> Parqueadero: </li>
            <li><i className="fas fa-id-card"></i> Tipo de Documentos: </li>
            <li><i className="fas fa-id-badge"></i> Número de Documento: </li>
            <li><i className="fas fa-user-tag"></i> Tipo de Residente: </li>
            <li><i className="fas fa-dollar-sign"></i> Estado de Mora: </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TorreDComponent;