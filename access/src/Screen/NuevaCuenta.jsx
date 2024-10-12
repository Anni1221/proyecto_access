import React, { useState } from 'react';
import '../Styles/App3.css';
import Perfil from '../Assets/Img/nuevoperfil.png';
import Proximo from '../Assets/Img/proximo.png';
import HeaderReportes from '../Components/HeaderReportes';
import Footer from '../Components/Footer';
import { registerUser } from '../services/Api';

const CrearCuenta = () => {
  const [datosFormulario, setDatosFormulario] = useState({
    nombres: '',
    apellidos: '',
    tipoDocumento: '',
    numdoc: '', // Cambiado a numdoc
    telefono: '',
    contrasenia: '',
    email: ''
  });
  const [mensaje, setMensaje] = useState(''); // Estado para mensajes de éxito o error

  const manejarCambioEntrada = (e) => {
    const { name, value } = e.target;
    console.log(name, value); // Añadido para depuración
    setDatosFormulario({
      ...datosFormulario,
      [name]: value
    });
  };
  
  const manejarRegistro = async (e) => {
    e.preventDefault();
    try {
      // Envía los datos del formulario a la API
      await registerUser(datosFormulario);
      setMensaje('Registro exitoso. ¡Bienvenido!');
    } catch (error) {
      setMensaje(`Error en el registro: ${error.message}`);
    }
  };

  return (
    <div>
      <HeaderReportes/>
      <header className="App-header">
      </header>
      
      <div className="container">
        <div className="left-section">
          <img src={Perfil} alt="Icono Grande" className="icono-grande" />
          <h1>Cuenta Funcionario</h1>
          <br />
          <h1>Si necesitas registrar un nuevo funcionario hazlo aquí</h1>
          <h2>Por favor, diligencia el siguiente formulario</h2>
          <img src={Proximo} alt="Icono Animado" className="icono-animado" />
        </div>
        <div className="right-section">
          <div className="main-content">
          <br></br>
            <div className="content-wrapper">
              <header>
                <h2 className="center-title">Cuenta Funcionario</h2>
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
                    value={datosFormulario.nombres}
                    onChange={manejarCambioEntrada}
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
                    onChange={manejarCambioEntrada}
                    required
                  />

                  <label htmlFor="tipo-documento">
                    <i className="fas fa-user" /> Tipo de documento:
                  </label>

                  <select
                    id="tipo-documento"
                    name="tipoDocumento"
                    value={datosFormulario.tipoDocumento}
                    onChange={manejarCambioEntrada}
                    required
                  >
                    <option value="">Seleccione</option>
                    <option value="CC">C.C</option>
                    <option value="CE">C.E</option>
                  </select>

                  <label htmlFor="numdoc">
                    <i className="fas fa-id-card" /> Número de documento:
                  </label>
                  <input
                    type="text"
                    id="numdoc"
                    name="numdoc"
                    value={datosFormulario.numdoc}
                    onChange={manejarCambioEntrada}
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
                    onChange={manejarCambioEntrada}
                    required
                  />
                  
                  <label htmlFor="contrasenia">
                    <i className="fas fa-lock" /> Contraseña:
                  </label>
                  <input
                    type="password"
                    id="contrasenia"
                    name="contrasenia"
                    value={datosFormulario.contrasenia}
                    onChange={manejarCambioEntrada}
                    required
                  />

                  <label htmlFor="email">
                    <i className="fas fa-lock" /> Correo electrónico:
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={datosFormulario.email}
                    onChange={manejarCambioEntrada}
                    required
                  />

                  <div className="center-buttons">
                    <button className="ver-mas-button" id="updateBtn" type="submit" onClick={manejarRegistro}>Registrar</button>
                  </div>
                </form>

                {mensaje && <p className="mensaje">{mensaje}</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <Footer />
    </div>
  );
};

export default CrearCuenta;