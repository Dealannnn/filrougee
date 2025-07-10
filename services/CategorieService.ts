import axios from 'axios';
import { ICategorie } from '../models/ICategorie';

const API_URL = 'https://localhost:8080/api/categorie'; // Remplace par ton URL réelle

export const getCategories = async (): Promise<ICategorie[]> => {
  try {
    const response = await axios.get<ICategorie[]>(API_URL);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des catégories :", error);
    throw error;
  }
};

