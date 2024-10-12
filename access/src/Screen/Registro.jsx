import React, { useState } from 'react';
import { createResidente } from '../services/residenteService';
import Footer from '../Components/Footer';
import HeaderIn from '../Components/HeaderIn';
import '../Styles/App3.css';
import Inicio1 from '../Assets/Img/inicio1.jpg';
import Proximo from '../Assets/Img/proximo.png';

function Registro() {
  const [datosFormulario, setDatosFormulario] = useState({
    tipoDocumento: '',
    nombres: '',
    apellidos: '',
    numdoc: '',
    telefono: '',
    torre: '',
    apartamento: '',
    vehiculo: '',
    placa: '',
    modelo: '',
    color: '',
    email: '',
    contrasenia: ''
  });
  
  const [mensaje, setMensaje] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Si selecciona "vehiculo", se asigna el valor correcto
    if (name === 'vehiculo') {
      setDatosFormulario({ ...datosFormulario, vehiculo: value });
    } else {
      setDatosFormulario({ ...datosFormulario, [name]: value });
    }
  };   

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validar que todos los campos necesarios estén completos
    const {
      tipoDocumento,
      nombres,
      apellidos,
      numdoc,
      telefono,
      torre,
      apartamento,
      vehiculo,
      email,
      contrasenia
    } = datosFormulario;

    if (!tipoDocumento || !nombres || !apellidos || !numdoc || !telefono || !torre || !apartamento || !email || !contrasenia) {
      setMensaje("Por favor, llena todos los campos requeridos.");
      return;
    }

    // Agregar validación para el vehículo
    if (vehiculo === 'Si') {
      if (!datosFormulario.placa || !datosFormulario.modelo || !datosFormulario.color) {
        setMensaje("Por favor, llena los datos del vehículo.");
        return;
      }
    }

    // Llama a la función de creación del residente y guarda la respuesta
    const response = await createResidente(datosFormulario);
    
    console.log("Respuesta del servidor:", response);
  
    if (response && response.success) {
      setMensaje("Registro exitoso.");
    } else {
      setMensaje(response.message || "Error en el registro.");
    }
  };

  return (
    <div className="App">
      <HeaderIn />
      <header className="App-header"></header>
      
      <div className="container">
        <div className="left-section">
          <img src={Inicio1} alt="Icono Grande" className="icono-grande" />
          <h1>Registro</h1>
          <br />
          <h1>Si no tienes una cuenta, regístrate aquí</h1>
          <h2>Por favor, diligencia el siguiente formulario</h2>
          <img src={Proximo} alt="Icono Animado" className="icono-animado" />
        </div>
        <div className="right-section">
          <div className="main-content">
            <div className="content-wrapper">
              <header>
                <h2 className="center-title">Registro de usuario</h2>
              </header>
              <div className="reporte-container">
                <form id="reporte-form" onSubmit={handleSubmit}>
                  <label htmlFor="tipo-documento">
                    <i className="fas fa-user" /> Tipo de documento:
                  </label>
                  <select
                    id="tipo-documento"
                    name="tipoDocumento"
                    value={datosFormulario.tipoDocumento}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Seleccione</option>
                    <option value="CC">C.C</option>
                    <option value="CE">C.E</option>
                  </select>

                  <label htmlFor="nombres">
                    <i className="fas fa-user" /> Nombres:
                  </label>
                  <input
                    type="text"
                    id="nombres"
                    name="nombres"
                    value={datosFormulario.nombres}
                    onChange={handleChange}
                    required
                  />

                  <label htmlFor="apellidos">
                    <i className="fas fa-user" /> Apellidos:
                  </label>
                  <input
                    type="text"
                    id="apellidos"
                    name="apellidos"
                    value={datosFormulario.apellidos}
                    onChange={handleChange}
                    required
                  />

                  <label htmlFor="numdoc">
                    <i className="fas fa-id-card" /> Número de documento:
                  </label>
                  <input
                    type="text"
                    id="numdoc"
                    name="numdoc"
                    value={datosFormulario.numdoc}
                    onChange={handleChange}
                    required
                  />

                  <label htmlFor="telefono">
                    <i className="fas fa-phone" /> Teléfono:
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    value={datosFormulario.telefono}
                    onChange={handleChange}
                    required
                  />

                  <label htmlFor="torre">
                    <i className="fas fa-building" /> Torre del apartamento:
                  </label>
                  <select
                    id="torre"
                    name="torre"
                    value={datosFormulario.torre}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Seleccione</option>
                    <option value="A">Torre A</option>
                    <option value="B">Torre B</option>
                    <option value="C">Torre C</option>
                    <option value="D">Torre D</option>
                  </select>

                  <label htmlFor="apartamento">
                    <i className="fas fa-door-closed" /> Número de apartamento:
                  </label>
                  <select
                    id="apartamento"
                    name="apartamento"
                    value={datosFormulario.apartamento}
                    onChange={handleChange}
                    required
                  >
                    
                    <option value="">Seleccione</option>
                    <option value="101">101</option>
                    <option value="102">102</option>
                    <option value="103">103</option>
                    <option value="104">104</option>
                    <option value="201">201</option>
                    <option value="202">202</option>
                    <option value="203">203</option>
                    <option value="204">204</option>
                    <option value="301">301</option>
                    <option value="302">302</option>
                    <option value="303">303</option>
                    <option value="304">304</option>
                    <option value="401">401</option>
                    <option value="402">402</option>
                    <option value="403">403</option>
                    <option value="404">404</option>
                    <option value="501">501</option>
                    <option value="502">502</option>
                    <option value="503">503</option>
                    <option value="504">504</option>
                    <option value="601">601</option>
                    <option value="602">602</option>
                    <option value="603">603</option>
                    <option value="604">604</option>
                    {/* Añade más opciones aquí */}
                  </select>

                  <label htmlFor="vehiculo">
                    <i className="fas fa-car" /> ¿Vehículo?
                  </label>
                  <select
                    id="vehiculo"
                    name="vehiculo"
                    value={datosFormulario.vehiculo}
                    onChange={handleChange}
                    required
                  >
                    <option value="No">No</option>
                    <option value="Si">Sí</option>
                  </select>

                  {datosFormulario.vehiculo === 'Si' && (
                    <div id="vehiculo-form">
                      <label htmlFor="placa">
                        <i className="fas fa-car-side" /> Placa:
                      </label>
                      <input
                        type="text"
                        id="placa"
                        name="placa"
                        value={datosFormulario.placa}
                        onChange={handleChange}
                        required
                      />

                      <label htmlFor="modelo">
                        <i className="fas fa-car-side" /> Modelo:
                      </label>
                      <input
                        type="text"
                        id="modelo"
                        name="modelo"
                        value={datosFormulario.modelo}
                        onChange={handleChange}
                        required
                      />

                      <label htmlFor="color">
                        <i className="fas fa-palette" /> Color:
                      </label>
                      <select
                        id="color"
                        name="color"
                        value={datosFormulario.color}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Seleccione</option>
                        <option value="Rojo">Rojo</option>
                        <option value="Verde">Verde</option>
                        <option value="Azul">Azul</option>
                        <option value="Amarillo">Amarillo</option>
                        <option value="Negro">Negro</option>
                        <option value="Blanco">Blanco</option>
                      </select>
                    </div>
                  )}

                  <label htmlFor="email">
                    <i className="fas fa-envelope" /> Correo electrónico:
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={datosFormulario.email}
                    onChange={handleChange}
                    required
                  />

                  <label htmlFor="contrasenia">
                    <i className="fas fa-key" /> Contraseña:
                  </label>
                  <input
                    type="password"
                    id="contrasenia"
                    name="contrasenia"
                    value={datosFormulario.contrasenia}
                    onChange={handleChange}
                    required
                  />

                  <div className="center-buttons">
                    <button className="ver-mas-button" id="updateBtn" type="submit">Registrar</button>
                  </div>

                </form>
                {mensaje && <p className="mensaje">{mensaje}</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <Footer />
    </div>
  );
}

export default Registro;