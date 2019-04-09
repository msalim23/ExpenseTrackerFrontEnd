import {IExpense} from './IExpense';

export interface IUser {
  id: string;
  login: string;
  password: string;
  nom: string;
  prenom: string;
  email: string;
  solde: number;
  expenses: IExpense[];
}
