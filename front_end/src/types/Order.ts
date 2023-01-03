export interface Order {
  _id: string;
  table: string;
  status: 'Waiting' | 'in_Production' | 'Done';
  products: {
    _id: string;
    quantity: number;
    product: {
      name: string;
      imagePath: string;
      price: number;
    };
  }[];
}
