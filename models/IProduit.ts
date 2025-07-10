import { ICategorie } from './ICategorie';

export interface IProduit {
  idProduit: number;
  nomProduit: string;
  prixProduit: number;
  dateCreation: string;
  categorie: ICategorie;
}
