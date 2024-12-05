import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/App3.css';
import HeaderIn from '../Components/HeaderIn';
import Footer from '../Components/Footer';
import Inicio1 from '../Assets/Img/inicio1.jpg';
import axios from 'axios';
import CryptoJS from 'crypto-js';

// Obtener el token (por ejemplo, de localStorage o cookies)
const token = localStorage.getItem('token'); 

// Configurar el encabezado Authorization
const api = axios.create({
  baseURL: 'http://localhost:3000/access_check/api',
  headers: {
    Authorization: `Bearer ${token}` // Asegúrate de que las comillas invertidas sean correctas
  }
});

// Hacer una solicitud con Axios
api.get('/ruta-protegida')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevenir el comportamiento por defecto del formulario
  
    try {
      const response = await axios.post('http://localhost:3000/login', formData); // Cambia Axios a axios
      const token = response.data.token; // Suponiendo que el token está en la respuesta
      localStorage.setItem('token', token); // Guardar el token en localStorage
      
      // Configurar el encabezado Authorization para futuras solicitudes
      const api = axios.create({ // Cambia Axios a axios
        baseURL: 'http://localhost:3000/access_check/api',
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
  
      // Ejemplo de solicitud a una ruta protegida
      const protectedResponse = await api.get('/ruta-protegida');
      console.log(protectedResponse.data);
  
      setSuccessMessage('Inicio de sesión exitoso');
      navigate('/ruta-deseada'); // Redirigir a otra página después del inicio de sesión
    } catch (error) {
      console.error(error);
      setError('Error al iniciar sesión. Por favor, verifica tus credenciales.');
    }
  };
  
  const handleLogin = async (event) => {
    event.preventDefault();
    const { numdoc, contrasenia } = formData;
  
    console.log("Datos enviados:", { numdoc, contrasenia }); // Log de los datos enviados
  
    // Encriptar la contraseña
    const encryptedPassword = encryptPassword(contrasenia);
  
    try {
      const response = await axios.post('http://localhost:3001/login', { // Cambia Axios a axios
        numdoc,
        contrasenia: encryptedPassword, // Enviar la contraseña encriptada
      });
  
      const { rol } = response.data; 
  
      console.log("Rol recibido:", rol); // Log del rol recibido
  
      if (rol === 'Admin') {
        navigate('/InicioAdmin');
      } else if (rol === 'Vigilante') {
        navigate('/InicioVig');
      } else if (rol === 'Residente') {
        navigate('/InicioResi');
      } else {
        setError('Rol no reconocido.');
      }
  
      setSuccessMessage('Inicio de sesión exitoso.');
      setError('');
    } catch (error) {
      console.error('Error al iniciar sesión:', error.response ? error.response.data : error);
      setError('Error al iniciar sesión. Verifique sus credenciales.');
      setSuccessMessage('');
    }
  };

  // Función para encriptar la contraseña
  const encryptPassword = (password) => {
    const secretKey = 'your-secret-key'; // Usa una clave secreta
    const encryptedPassword = CryptoJS.AES.encrypt(password, secretKey).toString();
    return encryptedPassword;
  };

  return (
    <div className="App">
      <HeaderIn /><br />
      <h1 className="apartment-list-title typing-text">Bienvenido a Access Check</h1>
      <div className="container">
        <div className="left-section" style={{ marginTop: '-260px', paddingLeft: '40px' }}>
          <img src={Inicio1} alt="Icono Grande" className="icono-grande" />
          <h1>Inicio de Sesión</h1>
          <br />
          <h1>¡Bienvenido de nuevo!</h1>
          <h2>Por favor, ingresa tus datos para iniciar sesión</h2>
        </div>

        <div className="outer-container" style={{ padding: '80px', marginTop: '80px', marginLeft: '100px', minHeight: '80px' }}>
          <div className="form-container" style={{ width: '500px' }}>
            <h2 className="center-title">Iniciar Sesión</h2>
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
                onKeyPress={(e) => {
                  if (!/^\d+$/.test(e.key)) {
                    e.preventDefault();
                  }
                }}
                maxLength={10}
                placeholder="Ingresa tu número de documento"
                required
              />
              <label htmlFor="contrasenia">
                <i className="fas fa-lock" /> <b>Contraseña:</b>
              </label>
              <input
                type="password"
                id="contrasenia"
                name="contrasenia"
                value={formData.contrasenia}
                onChange={handleInputChange}
                placeholder="Ingresa su contraseña"
                maxLength={8}
                required
              />
              <small>(máximo 8 caracteres)</small>
              
              {error && <p className="error-message">{error}</p>}
              {successMessage && <p className="success-message">{successMessage}</p>}
              
              <div className="center-buttons">
                <button className="ver-mas-button" id="loginBtn" type="submit">
                  Iniciar Sesión
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
         
      <br /><br /><br /><br /><br />
      <Footer />
    </div>
  );
}

export default Login;