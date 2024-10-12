import React, { useState, useEffect } from 'react';
import { Chart } from 'chart.js';
import { BarController, LineController } from 'chart.js';
import { jsPDF } from 'jspdf';
import HeaderReportes from '../Components/HeaderReportes';
import Footer from '../Components/Footer';
import '../Styles/App3.css';

Chart.register(BarController);
Chart.register(LineController);

const VerReportes = () => {
  const [dataDia, setDataDia] = useState([]); 
  const [dataSemana, setDataSemana] = useState([]); 
  const [dataMes, setDataMes] = useState([]); 


  useEffect(() => {
    fetch('https://your-api-url.com/reports')
      .then(response => response.json())
      .then(data => {
        setDataDia(data.daily);
        setDataSemana(data.weekly);
        setDataMes(data.monthly);
        generarGraficos(); 
      })
      .catch(error => console.error(error));
  }, 
);

  const generarGraficos = () => {
    generarGraficoDiario();
    generarGraficoSemanal();
    generarGraficoMensual();
  };

  let chartDia;

const generarGraficoDiario = () => {
  if (chartDia) {
    chartDia.destroy();
  }
  const ctxDia = document.getElementById('chart-dia').getContext('2d');
  chartDia = new Chart(ctxDia, {
    type: 'bar',
    data: {
      labels: ['8:00', '10:00', '12:00', '14:00', '16:00', '18:00'],
      datasets: [{
        label: 'Visitas por Hora',
        data: dataDia, 
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50', '#FFC107', '#FF5722']
      }]
    }
  });
};
let chartSemana;

const generarGraficoSemanal = () => {
  if (chartSemana) {
    chartSemana.destroy();
  }
  const ctxSemana = document.getElementById('chart-semana').getContext('2d');
  chartSemana = new Chart(ctxSemana, {
    type: 'line',
    data: {
      labels: ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'],
      datasets: [{
        label: 'Visitas por Semana',
        data: dataSemana, 
        borderColor: '#FF6384',
        backgroundColor: 'rgba(255, 99, 132, 0.2)'
      }]
    }
  });
};

let chartMes;

const generarGraficoMensual = () => {
  if (chartMes) {
    chartMes.destroy();
  }
  const ctxMes = document.getElementById('chart-mes').getContext('2d');
  chartMes = new Chart(ctxMes, {
    type: 'bar',
    data: {
      labels: ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'],
      datasets: [{
        label: 'Visitas por Semana',
        data: dataMes, 
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50']
      }]
    }
  });
};

  const descargarPDF = (titulo) => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text(titulo, 20, 20);
    doc.setFontSize(12);
    doc.text('Este es el reporte generado.', 20, 30);
    doc.save(titulo + '.pdf');
  };

  return (
    <div>
      <HeaderReportes/>
      <div className="App">
        <h1 className="vigilante-title">Generación de Reportes</h1>
        <h2 className="access-check-title">Conjunto Residecial Zafiro La Prosperidad</h2>
        <h3 className="access-check-title">Access Check</h3>
      </div>
      <div className="reports-container">
        <div className="reports-wrapper">
          <div className="graph-container">
            <div className="visitor-report" id="report-diario">
              <div className="report-card">
                <h2>Reporte de Hoy</h2>
                <canvas id="chart-dia"></canvas>
                <div className="button-container">
                  <button className="ver-mas-button" onClick={generarGraficoDiario}>
                    <i className="fas fa-redo"></i> Regenerar Gráfico
                  </button>
                  <button className="ver-mas-button" onClick={() => descargarPDF('Reporte_Diario')}>
                    <i className="fas fa-download"></i> Descargar PDF
                  </button>
                </div>
              </div>
            </div>
            <div className="visitor-report" id="report-semanal">
              <div className="report-card">
                <h2>Reporte Semanal</h2>
                <canvas id="chart-semana"></canvas>
                <div className="button-container">
                  <button className="ver-mas-button" onClick={generarGraficoSemanal}>
                    <i className="fas fa-redo"></i> Regenerar Gráfico
                  </button>
                  <button className="ver-mas-button" onClick={() => descargarPDF('Reporte_Semanal')}>
                    <i className="fas fa-download"></i> Descargar PDF
                  </button>
                </div>
              </div>
            </div>
            <div className="visitor-report" id="report-mensual">
              <div className="report-card">
                <h2>Reporte Mensual</h2>
                <canvas id="chart-mes"></canvas>
                <div className="button-container">
                  <button className="ver-mas-button" onClick={generarGraficoMensual}>
                    <i className="fas fa-redo"></i> Regenerar Gráfico
                  </button>
                  <button className="ver-mas-button" onClick={() => descargarPDF('Reporte_Mensual')}>
                    <i className="fas fa-download"></i> Descargar PDF
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default VerReportes;