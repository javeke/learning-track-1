export interface Transaction {
  id: number;
  first_name: string;
  last_name: string;
  order_type: string;
  stock: string;
  order_price: number;
  quantity: number;
}

export enum OrderType {
  SELL = 'SELL',
  BUY = 'BUY'
}
