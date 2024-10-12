import React, { useState } from 'react';
import Footer from '../Components/Footer';
import '../Styles/App3.css';
import Visitantes from '../Assets/Img/familia.png';
import Proximo from '../Assets/Img/proximo.png'
import HeaderResi from '../Components/HeaderInicioResi';

const InicioResi = () => {
  const [fechaInicio, setFechaInicio] = useState('');
  const [fechaFin, setFechaFin] = useState('');
  const [horaInicio, setHoraInicio] = useState('');
  const [horaSalida, setHoraSalida] = useState('');
  const [identificacion, setIdentificacion] = useState('');
  const [nombresVisitante, setNombresVisitante] = useState('');
  const [apellidosVisitante, setApellidosVisitante] = useState('');
  const [torre, setTorre] = useState('');
  const [apartamento, setApartamento] = useState('');
  const [vehiculo,] = useState('');
  const [placa, setPlaca] = useState('');
  const [modelo, setModelo] = useState('');
  const [color, setColor] = useState('');

  const handleVehiculoChange = (e) => {
    if (e.target.value === 'Si') {
      document.getElementById('vehiculo-form').style.display = 'block';
    } else {
      document.getElementById('vehiculo-form').style.display = 'none';
    }
  };

  const handleLimpiarCampos = () => {
    setIdentificacion('');
    setNombresVisitante('');
    setApellidosVisitante('');
    setModelo('');
    setColor('');
  };

  return (
    <div>
    <div className="App">
      <HeaderResi />
      <header className="App-header">
      </header>
      <div className="App">
        <div className="container">
          <div className="left-section">
            <img src={Visitantes} alt="Icono Grande" className="icono-grande" />
            <h1>Agenda una Visita</h1>
            <br />
            <h2>Llena este formulario para solicitar el ingreso de familia o amigos a tu apartamento y uso de parqueadero</h2>
            <img src={Proximo} alt="Icono Animado" className="icono-animado" />
          </div>
          <div className="right-section">
            <div className="main-content">
              <div className="content-wrapper">
                <header>
                  <h2 className="center-title">Generar Agendamiento</h2>
                </header>
                <div className="reporte-container">
                  <form id="reporte-form">
                    <label htmlFor="fecha-inicio">
                      <i className="fas fa-calendar-alt" /> Fecha de inicio:
                    </label>
                    <input
                      type="date"
                      id="fecha-inicio"
                      name="fecha-inicio"
                      value={fechaInicio}
                      onChange={(e) => setFechaInicio(e.target.value)}
                      required
                    />

                    <label htmlFor="fecha-fin">
                      <i className="fas fa-calendar-alt" /> Fecha de fin:
                    </label>
                    <input
                      type="date"
                      id="fecha-fin"
                      name="fecha-fin"
                      value={fechaFin}
                      onChange={(e) => setFechaFin(e.target.value)}
                      required
                    />

                    <label htmlFor="hora-inicio">
                      <i className="fas fa-clock" /> Hora de inicio:
                    </label>
                    <input
                      type="time"
                      id="hora-inicio"
                      name="hora-inicio"
                      value={horaInicio}
                      onChange={(e) => setHoraInicio(e.target.value)}
                      required
                    />

                    <label htmlFor="hora-salida">
                      <i className="fas fa-clock" /> Hora de salida:
                    </label>
                    <input
                      type="time"
                      id="hora-salida"
                      name="hora-salida"
                      value={horaSalida}
                      onChange={(e) => setHoraSalida(e.target.value)}
                      required
                    />

                    <label htmlFor="identificacion">
                      <i className="fas fa-id-card" /> Identificación:
                    </label>
                    <input
                      type="text"
                      id="identificacion"
                      name="identificacion"
                      value={identificacion}
                      onChange={(e) => setIdentificacion(e.target.value)}
                      required
                    />

                    <label htmlFor="nombres-visitante">
                      <i className="fas fa-user" /> Nombres del visitante:
                    </label>
                    <input
                      type="text"
                      id="nombres-visitante"
                      name="nombres-visitante"
                      value={nombresVisitante}
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
                      value={apellidosVisitante}
                      onChange={(e) => setApellidosVisitante(e.target.value)}
                      required
                    />

                    <label htmlFor="torre">
                      <i className="fas fa-building" /> Torre:
                    </label>
                    <input
                      type="text"
                      id="torre"
                      name="torre"
                      value={torre}
                      onChange={(e) => setTorre(e.target.value)}
                      required
                    />

                    <label htmlFor="apartamento">
                      <i className="fas fa-building" /> Apartamento:
                    </label>
                    <input
                      type="text"
                      id="apartamento"
                      name="apartamento"
                      value={apartamento}
                      onChange={(e) => setApartamento(e.target.value)}
                      required
                    />

                    <label htmlFor="vehiculo">
                      <i className="fas fa-car" /> ¿Vehículo?
                    </label>
                    <select
                      id="vehiculo"
                      name="vehiculo"
                      value={vehiculo}
                      onChange={handleVehiculoChange}
                      required
                    >
                      <option value="">Seleccione</option>
                      <option value ="No">No</option>
                      <option value="Si">Sí</option>
                    </select>

                    <div id="vehiculo-form" style={{ display: vehiculo === 'Si' ? 'block' : 'none' }}>
                      <label htmlFor="placa">
                        <i className="fas fa-car" /> Placa:
                      </label>
                      <input
                        type="text"
                        id="placa"
                        name="placa"
                        value={placa}
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
                        value={modelo}
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
                        value={color}
                        onChange={(e) => setColor(e.target.value)}
                        required
                      />
                    </div>

                    <div className="center-buttons">
                      <button className="ver-mas-button">
                        <i className="fas fa-calendar-check" /> Enviar
                      </button>
                      <button
                        className="ver-mas-button"
                        id="limpiar-campos"
                        onClick={handleLimpiarCampos}
                      >
                        <i className="fas fa-eraser" /> Limpiar Campos
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <Footer />
    </div>
  );
};

export default InicioResi;