import React from 'react';
import '../Styles/pp.css';
import Footer from '../Components/Footer';
import HeaderIn from '../Components/HeaderIn';
import Parqueadero from '../Assets/Img/parqueadero.png';

const Home = () => {
  return (
    <div>
      <HeaderIn />
      <main>
        <div className="inicios-container">
          <div className="container-in">
          <section className="left-img">
            <img src={Parqueadero} alt="Parqueadero" style={{ display: 'block', margin: '0 auto' }} />
          </section>
            <section className="right">
              <h2 style={{ textAlign: 'center' }}>Conjunto Residencial Zafiro La Prosperidad </h2>
              <p> </p>
              <a href="/Login" className="inicio-button">Iniciar Sesion</a>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;