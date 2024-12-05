import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HeaderAdminSol from '../Components/HeaderAdminSol';
import Footer from '../Components/Footer';
import '../Styles/App3.css';
import Visitantes from '../Assets/Img/visitantes.gif';

function SolicitudAgendamiento() {
  const [nombres, setNombres] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [telefonoVisitante, setTelefonoVisitante] = useState("");
  const [nombresVisitante, setNombresVisitante] = useState("");
  const [apellidosVisitante, setApellidosVisitante] = useState("");
  const [fechaInicio, setFechaInicio] = useState("");
  const [fechaFin, setFechaFin] = useState("");
  const [horaInicio, setHoraInicio] = useState("");
  const [horaFin, setHoraFin] = useState("");
  const [numPersonas, setNumPersonas] = useState("");
  const [estado, setEstado] = useState('Pendiente');
  const [torre, setTorre] = useState("");
  const [apartamento, setApartamento] = useState("");
  const [vehiculo, setVehiculo] = useState("");
  const [tipoVehiculo, setTipoVehiculo] = useState("");
  const [placa, setPlaca] = useState("");
  const [modelo, setModelo] = useState("");
  const [marca, setMarca] = useState("");
  const [color, setColor] = useState("");
  const [idAgendamiento, setIdAgendamiento] = useState(null);

  const getUsuario = () => {
    axios.get("http://localhost:3001/agendamientos")
    .then((response) => {
      // Filtra los agendamientos pendientes
      const agendamientosPendientes = response.data.filter(agendamiento => agendamiento.estado === 'Pendiente');
      
      // Si hay agendamientos pendientes, toma el último
      if (agendamientosPendientes.length > 0) {
        const lastAgendamiento = agendamientosPendientes[agendamientosPendientes.length - 1];
        setIdAgendamiento(lastAgendamiento.idAgendamiento);
        setNombres(lastAgendamiento.nombres);
        setApellidos(lastAgendamiento.apellidos);
        setTelefonoVisitante(lastAgendamiento.telefonoVisitante);
        setNombresVisitante(lastAgendamiento.nombresVisitante);
        setApellidosVisitante(lastAgendamiento.apellidosVisitante);
        setFechaInicio(lastAgendamiento.fechaInicio);
        setFechaFin(lastAgendamiento.fechaFin);
        setHoraInicio(lastAgendamiento.horaInicio);
        setHoraFin(lastAgendamiento.horaFin);
        setNumPersonas(lastAgendamiento.numPersonas);
        setTorre(lastAgendamiento.torre);
        setApartamento(lastAgendamiento.apartamento);
          
        // Verifica si el visitante tiene un vehículo
        if (lastAgendamiento.vehiculoId) {
          setVehiculo('Sí');
          setTipoVehiculo(lastAgendamiento.tipoVehiculo);
          setPlaca(lastAgendamiento.placa);
          setModelo(lastAgendamiento.modelo);
          setColor(lastAgendamiento.color);
          setMarca(lastAgendamiento.marca);
        } else {
          setVehiculo('No');
        }
      } else {
        alert("No hay agendamientos pendientes.");
      }
    })
    .catch((error) => {
      console.error("Error al obtener datos:", error);
    });
  };

  const updateAgendamiento = (nuevoEstado) => {
    axios.put("http://localhost:3001/actualizar-agendamiento", {
      idAgendamiento: idAgendamiento,
      estado: nuevoEstado,
    }).then(() => {
      alert(`Agendamiento ${nuevoEstado === 'Aceptada' ? 'aceptado' : 'rechazado'} con éxito`);
      resetForm(); // Función para restablecer el formulario
      getUsuario(); // Actualiza la información del agendamiento
    }).catch((error) => {
      console.error("Error al actualizar el agendamiento:", error);
    });
  };

  const resetForm = () => {
    setNombres("");
    setApellidos("");
    setTelefonoVisitante("");
    setNombresVisitante("");
    setApellidosVisitante("");
    setFechaInicio("");
    setFechaFin("");
    setHoraInicio("");
    setHoraFin("");
    setNumPersonas("");
    setTorre("");
    setApartamento("");
    setVehiculo("");
    setTipoVehiculo("");
    setPlaca("");
    setModelo("");
    setMarca("");
    setColor("");
  };

  useEffect(() => {
    getUsuario();
  }, []);

  return (
    <div>
      <HeaderAdminSol />
      <div className="App">
        <div className="container">
          <div className="left-section">
            <img src={Visitantes} alt="Icono Grande" className="icono-grande" /><br></br><br></br>
            <h1>Solicitud Residente</h1><br></br>
            <h2>Al recibir la solicitud por parte del residente podrá aceptar o rechazar la solicitud</h2>
          </div>
          <div className="outer-container" style={{ padding: '60px', marginTop: '530px', marginLeft: '20px', minHeight: '400px' }}>
            <div className="form-container">
              <h2 className="center-title">Solicitud Residente</h2><br></br>
              <div className="formulario-grid">
                <div>
                  <label htmlFor="nombres-residente">
                    Nombres del residente:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={nombres}
                    readOnly
                  />
                </div>

                <div>
                  <label htmlFor="apellidos-residente">
                    Apellidos del residente:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={apellidos}
                    readOnly
                  />
                </div>

                <div>
                  <label htmlFor="telefono">
                    Teléfono Visitante:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={telefonoVisitante}
                    readOnly
                  />
                </div>

                <div>
                  <label htmlFor="nombres-visitante">
                    Nombres del visitante:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={nombresVisitante}
                    readOnly
                  />
                </div>
                
                <div>
                  <label htmlFor="apellidos-visitante">
                    Apellidos del visitante:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={apellidosVisitante}
                    readOnly
                  />
                </div>
                    
                <div>
                  <label htmlFor="fecha-inicio">
                    Fecha de inicio:
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    value={fechaInicio} // Esto debería ser en formato YYYY-MM-DD
                    readOnly
                  />
                </div>
                
                <div>
                  <label htmlFor="fecha-fin">
                    Fecha de fin:
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    value={fechaFin} // Esto también debería ser en formato YYYY-MM-DD
                    readOnly
                  />
                </div>
                
                <div>
                  <label htmlFor="hora-inicio">
                    Hora de inicio:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={horaInicio}
                    readOnly
                  />
                </div>
                
                <div>
                  <label htmlFor="hora-fin">
                    Hora de fin:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={horaFin}
                    readOnly
                  />
                </div>

                <div>
                  <label htmlFor="num-personas">
                    Número de personas:
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    value={numPersonas}
                    readOnly
                  />
                </div>

                <div>
                  <label htmlFor="torre">
                    Torre:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={torre}
                    readOnly
                  />
                </div>

                <div>
                  <label htmlFor="apartamento">
                    Apartamento:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={apartamento}
                    readOnly
                  />
                </div>

                <div>
                  <label htmlFor="vehiculo">
                    <i className="fas fa-car" /> Vehículo:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={vehiculo}
                    readOnly
                  />
                </div>
                
                {vehiculo === 'Si' && (
                  <>
                  <div>
                    <label htmlFor="tipoVehiculo">
                      Tipo de vehículo:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={tipoVehiculo}
                      readOnly
                    />
                  </div>
                  
                  {tipoVehiculo === 'Automóvil' || tipoVehiculo === 'Motocicleta' ? (
                    <>
                    <div>
                      <label htmlFor="placa">
                        Placa:
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        value={placa}
                        readOnly
                      />
                    </div>
                
                    <div>
                      <label htmlFor="modelo">
                        Modelo:
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        value={modelo}
                        disabled
                      />
                    </div>
                
                    <div>
                      <label htmlFor="color">
                        Color:
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        value={color}
                        disabled
                      />
                    </div>
                    </>
                    ) : tipoVehiculo === 'Bicicleta' ? (
                      <>
                      <div>
                        <label htmlFor="marca">
                          Marca:
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          value={marca}
                          disabled
                        />
                      </div>
                  
                      <div>
                        <label htmlFor="color">
                          Color:
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          value={color}
                          disabled
                        />
                      </div>
                      </>
                      ) : null}
                  </>
                )}
                
                <div>
                  <div className="center-buttons">
                    <button className="ver-mas-button" onClick={() => updateAgendamiento('Aceptada')}>Aceptar</button>
                    <button className="ver-mas-button" onClick={() => updateAgendamiento('Rechazada')}>Rechazar</button>
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

export default SolicitudAgendamiento;