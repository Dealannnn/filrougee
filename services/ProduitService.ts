import { IProduit } from "../models/IProduit";

const BASE_URL = "http://10.0.2.2:8080/api/produits"; // adapter à ton backend

export const getProduits = async (): Promise<IProduit[]> => {
  try {
    const response = await fetch(BASE_URL);
    if (!response.ok) throw new Error("Erreur lors du chargement des produits");
    return await response.json();
  } catch (error) {
    console.error("Erreur dans getProduits:", error);
    return [];
  }
};
