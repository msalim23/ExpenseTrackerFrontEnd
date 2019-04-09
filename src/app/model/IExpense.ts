import {IUser} from './IUser';

export interface IExpense {
  id: string;
  name: string;
  amount: number;
  description: string;
  user: IUser;
}
