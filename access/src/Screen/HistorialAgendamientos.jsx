import React, { useState } from 'react';
import '../Styles/App3.css';
import Footer from '../Components/Footer';
import HeaderPR from '../Components/HeaderPR'; // Asegúrate de que esta ruta sea correcta

const HistorialAgendamientos = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [searchType, setSearchType] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const handleToggleMenu = (visible) => {
    setIsMenuVisible(visible);
  };

  const handleSearchTypeChange = (event) => {
    setSearchType(event.target.value);
    setSearchValue('');
    setIsSearchVisible(true);
  };

  const hideSearchBar = () => {
    setIsSearchVisible(false);
  };

  return (
    <div className="App">
      <HeaderPR onToggleMenu={handleToggleMenu} />
      <div className={`content-wrapper2 ${isMenuVisible ? 'menu-visible' : ''}`}>
        <header>
          <div className="white-container">
            <h2 className="center-title">Información de Residentes</h2>
            <div className="search-container">
              <select id="searchOption" className="search-bar" onChange={handleSearchTypeChange} defaultValue="">
                <option value="" disabled>
                  Selecciona una opción
                </option>
                <option value="fecha">Buscar por fecha</option>
                <option value="nombre">Buscar por nombre del visitante</option>
              </select>

              {isSearchVisible && (
                <div className="input-with-icon" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <input
                    type="text"
                    id="searchInput"
                    placeholder={
                      searchType === 'fecha'
                        ? 'Ingresa la fecha del agendamiento..'
                        : 'Ingrese el nombre del visitante...'
                    }
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    className="search-bar"
                    style={{ flex: 1, paddingRight: '30px' }}
                  />
                  <i className="fas fa-search icon" style={{ marginLeft: '10px' }}></i>
                </div>
              )}

              {isSearchVisible && (
                <div className="button-container">
                  <button className="ver-mas-button" onClick={hideSearchBar}>
                    Ocultar barra de búsqueda
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>

        <h1 className="apartment-list-title typing-text">Historial de Agendamientos</h1>
        <h2 className="access-check-title">Conjunto Residencial Zafiro La Prosperidad</h2>
        <h3 className="access-check-title">Access Check</h3>

        <div className="apartment-list">
          {/* Primer Piso */}
          <div className="floor-container">
            <div className="floor-title">
              <h2 className="centered-title" style={{ color: '#6e3f1d' }}>
                <i className="fas fa-building" style={{ color: '#6e3f1d' }}></i> Historial
              </h2>
            </div>
            {["Agendamiento 1", "Agendamiento 2", "Agendamiento 3", "Agendamiento 4"].map((apt) => (
              <div className="apartment" key={apt}>
                <h3 style={{ color: '#6e3f1d' }}>{apt}</h3>
                <ul>
                  <li>
                    <i className="fas fa-user" style={{ color: '#6e3f1d' }}></i> Nombre Visitante: 
                  </li>
                  <li>
                    <i className="fas fa-calendar-alt" style={{ color: '#6e3f1d ' }}></i> Fecha de Inicio: 
                  </li>
                  <li>
                    <i className="fas fa-calendar-check" style={{ color: '#6e3f1d' }}></i> Fecha de Fin: 
                  </li>
                  <li>
                    <i className="fas fa-car" style={{ color: '#6e3f1d' }}></i> Vehículo: 
                  </li>
                  <li>
                    <i className="fas fa-tag" style={{ color: '#6e3f1d' }}></i> Tipo de Vehículo: 
                  </li>
                </ul>
                <div className="button-container">
                  <button className="ver-mas-button">Ver más</button>
                </div>
              </div>
            ))}
          </div>

          {/* Segundo Piso */}
          <div className="floor-container">
            <div className="floor-title">
              <h2 className="centered-title" style={{ color: '#6e3f1d' }}>
                <i className="fas fa-building" style={{ color: '#6e3f1d' }}></i> Agendamientos
              </h2>
            </div>
            {["Agendamiento 5", "Agendamiento 6", "Agendamiento 7", "Agendamiento 8"].map((apt) => (
              <div className="apartment" key={apt}>
                <h3 style={{ color: '#6e3f1d' }}>{apt}</h3>
                <ul>
                  <li>
                    <i className="fas fa-user" style={{ color: '#6e3f1d' }}></i> Nombre Visitante: 
                  </li>
                  <li>
                    <i className="fas fa-calendar-alt" style={{ color: '#6e3f1d' }}></i> Fecha de Inicio: 
                  </li>
                  <li>
                    <i className="fas fa-calendar-check" style={{ color: '#6e3f1d' }}></i> Fecha de Fin: 
                  </li>
                  <li>
                    <i className="fas fa-car" style={{ color: '#6e3f1d' }}></i> Vehículo: 
                  </li>
                  <li>
                    <i className="fas fa-tag" style={{ color: '#6e3f1d' }}></i> Tipo de Vehículo: 
                  </li>
                </ul>
                <div className="button-container">
                  <button className="ver-mas-button">Ver más</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default HistorialAgendamientos;