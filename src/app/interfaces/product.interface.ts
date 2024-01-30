export interface Product {
    productId: number;
    name: string;
    description: string;
    price: number;
    quantityInStock: number;
    imageUrl: string;
    available: boolean;
    averageRating: number;
  }