import { Category } from './category.interface';

export interface AddProductInterface {
  description: string;
  name: string;
  price: number;
  quantityInStock: number;
  image: string;
  category: Category;
}
