import React from 'react';
import '../Styles/pp.css';
import Footer from '../Components/Footer';
import HeaderHome from '../Components/HeaderHome';
import Parqueadero from '../Assets/Img/parqueadero.png';

const Home = () => {
  return (
    <div>
      <HeaderHome />
      <main>
        <div className="inicios-container">
          <div className="container-in">
            <section className="left-img">
              <img src={Parqueadero} alt="Parqueadero" style={{ display: 'block', margin: '0 auto' }} />
            </section>
            <section className="right">
            <h2 className="cafe" style={{ textAlign: 'center' }}>Access Check</h2>
              <p></p>
              {/* Agregar ícono al botón */}
              <a href="/Login" className="inicio-button">
                <i className="fas fa-sign-in-alt"></i> Iniciar Sesión
              </a>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
