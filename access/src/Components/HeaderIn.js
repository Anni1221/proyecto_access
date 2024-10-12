
import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Formulario.css';
import Logo from '../Assets/Img/logo.png';

const HeaderIn = () => {
  return (
    <header className="App">
      <div className="logo">
        <a href="/home">
          <img src={Logo} alt="Logo" />
        </a>
      </div>
      <nav className="menu">
        <ul>
          <li></li>
          <li className="title-container">
            <h1 className="Conjunto-title">Conjunto Residencial Zafiro la Prosperidad</h1>
          </li>
        </ul>
        <div className="buttons">
          <Link to="/Login">
            <button>Iniciar Sesión</button>
          </Link>
          <Link to="/Registro">
            <button>Registrarse</button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default HeaderIn;