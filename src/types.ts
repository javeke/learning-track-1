export interface Transaction {
  id: number;
  first_name: string;
  last_name: string;
  role: string;
  show: string;
  rating: number;
}

export enum OrderType {
  SELL = 'SELL',
  BUY = 'BUY'
}
