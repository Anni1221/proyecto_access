import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Asegúrate de importar useNavigate
import '../Styles/InicioVig.css';
import HeaderInicioResi from '../Components/HeaderInicioResi';
import Footer from '../Components/Footer';
import Vigilante from '../Assets/Img/vigilante.png';
import VisitantePerfil from '../Assets/Img/visitante.png';
import TorreA from '../Assets/Img/torreA.png';
import TorreB from '../Assets/Img/torreB.png';
import TorreC from '../Assets/Img/torreC.png';
import TorreD from '../Assets/Img/torreD.png';
import Agenda from '../Assets/Img/agenda.png';
import Reporte from '../Assets/Img/reporte.png';

function InicioVig() {
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();

  // Simular el inicio de sesión exitoso cuando se monta la página
  useEffect(() => {
    setShowAlert(true);
    const timer = setTimeout(() => {
      setShowAlert(false); // La alerta desaparece automáticamente después de 3 segundos
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Función para cerrar sesión
  const handleLogout = () => {
    // Aquí puedes limpiar el token o la información de sesión almacenada
    navigate('/Login'); // Redirigir a la página de inicio de sesión después de cerrar sesión
  };

  return (
    <div className="App">
      <HeaderInicioResi />
      {showAlert && (
        <div className="alert">
          Inicio de sesión exitoso
        </div>
      )}
      <h1 className="vigilante-title">Bienvenido a Access Check</h1>
      <div className="options-container">
        <div className="profile-container">
          <div className="profile-header">
            <div className="profile-photo">
              <img src={Vigilante} alt="Foto de Perfil" />
            </div>
            <h2 className="profile-name">José Alberto Linares Castellanos</h2>
          </div>
          <div className="profile-details">
            <p><i className="fas fa-clock"></i> <strong>Jornada:</strong> Diurna</p>
            <p><i className="far fa-id-card"></i> <strong>Tipo de Documento:</strong> C.C</p>
            <p><i className="fas fa-id-badge"></i> <strong>Número de Identificación:</strong> 1023456756</p>
            <p><i className="fas fa-mobile-alt"></i> <strong>Celular:</strong> 300-354-4579</p>
            <p><i className="fas fa-envelope"></i> <strong>Correo Electrónico:</strong> josealberto@correo.com</p>
          </div>
          <div className="button-container">
            <Link to="/perfil" className="perfil-button">Ver más</Link>
          </div>
        </div>
        <div className="option">
          <Link to="/TorreA">
            <div className="option-icon">
              <img src={TorreA} alt="Torre A" />
            </div>
            <div className="option-text">
              <h2>Torre A</h2>
            </div>
          </Link>
        </div>
        <div className="option">
          <Link to="/TorreB">
            <div className="option-icon">
              <img src={TorreB} alt="Torre B" />
            </div>
            <div className="option-text">
              <h2>Torre B</h2>
            </div>
          </Link>
        </div>
        <div className="option">
          <Link to="/TorreC">
            <div className="option-icon">
              <img src={TorreC} alt="Torre C" />
            </div>
            <div className="option-text">
              <h2>Torre C</h2>
            </div>
          </Link>
        </div>
        <div className="option">
          <Link to="/TorreD">
            <div className="option-icon">
              <img src={TorreD} alt="Torre D" />
            </div>
            <div className="option-text">
              <h2>Torre D</h2>
            </div>
          </Link>
        </div>
        <div className="option">
          <Link to="/VerAgendamiento">
            <div className="option-icon">
              <img src={Agenda} alt="Ver Agendamiento" />
            </div>
            <div className="option-text">
              <h2>Ver Agendamiento</h2>
            </div>
          </Link>
        </div>
        <div className="option">
          <Link to="/VerReportes">
            <div className="option-icon">
              <img src={Reporte} alt="Ver Reportes" />
            </div>
            <div className="option-text">
              <h2>Ver Reportes</h2>
            </div>
          </Link>
        </div>
        <div className="option">
          <Link to="/VisitaSorpresa">
            <div className="option-icon">
              <img src={VisitantePerfil} alt="Agendar Visita Sorpresa" />
            </div>
            <div className="option-text">
              <h2>Agendar Visita Sorpresa</h2>
            </div>
          </Link>
        </div>
      </div>    
      <Footer/>
      <button id="scrollDownBtn" className="scroll-btn">
      </button>
      <button id="scrollUpBtn" className="scroll-btn" style={{ display: 'none' }}>
      </button>
      <button id="logoutBtn" className="logout-btn" onClick={handleLogout}>
        Cerrar Sesión
      </button>
    </div>
  );
}

export default InicioVig;
