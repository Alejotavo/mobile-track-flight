import axios from 'axios';
import type { Flight } from '../model/flight';

// Variables de entorno de Vite
const API_BASE_URL = 'https://aerodatabox.p.rapidapi.com';
const API_KEY = '5f48490d98mshbcc88803618d5f0p15b981jsn316beeee4e7f';

// Cliente axios configurado
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'X-RapidAPI-Key': API_KEY,
    'X-RapidAPI-Host': 'aerodatabox.p.rapidapi.com',
  },
});

// GET específico para tickets con fecha y número
export const postTicketData = async (fecha: string, numeroTicket: string): Promise<Flight> => {
  // Construir la URL específica para Aerodatabox
  const endpoint = `/flights/number/${numeroTicket}/${fecha}?withAircraftImage=false&withLocation=false&dateLocalRole=Both`;
  
  // Cambiar a GET ya que la API de Aerodatabox usa GET
  const response = await apiClient.get<Flight>(endpoint);
  return response.data;
};