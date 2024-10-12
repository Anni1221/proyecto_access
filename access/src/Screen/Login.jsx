import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/App3.css';
import { loginResidente, loginAdmin, loginFuncionario } from '../services/Api'; // Importamos las funciones necesarias
import HeaderIn from '../Components/HeaderInicio';
import Footer from '../Components/Footer';
import Inicio1 from '../Assets/Img/inicio1.jpg';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    numdoc: '',
    contrasenia: '',
    tipoUsuario: 'residentes', // Por defecto está en 'residentes'
  });
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Manejar cambios en los campos del formulario
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Manejar el envío del formulario
  const handleLogin = async (event) => {
    event.preventDefault();
    const { numdoc, contrasenia, tipoUsuario } = formData;

    try {
      if (tipoUsuario === 'residentes') {
        await loginResidente(numdoc, contrasenia);
        navigate('/InicioResi'); // Redirige a la página de residentes
      } else if (tipoUsuario === 'vigilante') {
        await loginFuncionario(numdoc, contrasenia); // Ajuste para vigilante
        navigate('/InicioVig'); // Redirige a la página de vigilantes
      } else if (tipoUsuario === 'admin') {
        await loginAdmin(numdoc, contrasenia);
        navigate('/InicioAdmin'); // Redirige a la página de administradores
      }

      setSuccessMessage('Inicio de sesión exitoso.');
      setError('');
    } catch (error) {
      setError('Error al iniciar sesión. Verifique sus credenciales.');
      setSuccessMessage('');
    }
  };

  return (
    <div className="App">
      <HeaderIn />
      <header className="App-header">
      </header>
      <div className="container">
        <div className="left-section">
          <img src={Inicio1} alt="Icono Grande" className="icono-grande" />
          <h1>Si ya tienes una cuenta inicia sesión aquí</h1>
          <h2>Por favor, diligencia el siguiente formulario</h2>
          <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        </div>

        <div className="right-section">
          <div className="main-content">
            <div className="content-wrapper">
              <header>
                <h2 className="center-title">Iniciar Sesión</h2>
              </header>
              <div className="reporte-container">
              <form id="reporte-form" onSubmit={handleLogin}>
             
              <label htmlFor="numdoc">
                    <i className="fas fa-id-card" /> <b>Número de documento:</b>
                  </label>
    
                  <input
                    type="text"
                    id="numdoc"
                    name="numdoc"
                    value={formData.numdoc}
                    onChange={handleInputChange}
                    pattern="[0-9]+"
                    title="Solo se permiten números"
                    required
                  />

                <label htmlFor="contrasenia" className="fas fa-id-card">
                  <b>Contraseña:</b>
                </label>
                <input
                type="password"
                id="contrasenia"
                name="contrasenia"                
                value={formData.contrasenia}
                onChange={handleInputChange}
                  className="reporte-container__input"
                  required
                />

                <label htmlFor="tipoUsuario">
                    <i className="fas fa-user" /> <b>Tipo de Usuario:</b>
                  </label>
                  <select
                    id="tipoUsuario"
                    name="tipoUsuario"s
                    value={formData.tipoUsuario}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="residentes">Residente</option>
                    <option value="vigilante">Vigilante</option> {/* Cambiado aquí */}
                    <option value="admin">Administrador</option>
                  </select>
                
                  {error && <p className="error-message">{error}</p>}
                  {successMessage && <p className="success-message">{successMessage}</p>}
                <div className="center-buttons">
                <button className="ver-mas-button" id="loginBtn" type="submit">
                  <i className="fas fa-sign-in-alt" /> Iniciar Sesión
                </button>
              </div>
                </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      <Footer />
    </div>
  );
}

export default Login;