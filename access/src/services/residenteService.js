import axios from 'axios';

const API_URL = 'http://localhost:2624/api/residentes';

// Crear un residente
export const createResidente = async (datos) => {
  try {
    const response = await axios.post(API_URL, datos); // Usar la constante API_URL
    return {
      success: response.status === 201, // Verifica si se creó el residente con éxito
      message: response.data.message || 'Registro realizado con éxito.',
    };
  } catch (error) {
    console.error('Error al registrar el residente:', error);
    if (error.response && error.response.data) {
      return {
        success: false,
        message: error.response.data.message || 'Error desconocido en el servidor.',
      };
    }
    return {
      success: false,
      message: 'Error en la conexión.',
    };
  }
};

// Obtener todos los residentes
export const getResidentes = async () => {
  try {
    const response = await axios.get(API_URL); // Usar la constante API_URL
    return response.data; // Devolver los residentes obtenidos
  } catch (error) {
    console.error('Error al obtener los residentes:', error);
    return [];
  }
};