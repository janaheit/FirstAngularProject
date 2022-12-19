import {Category} from "./category.model";

export class Product {

  id: number;
  label: string;
  price: number;
  quantity: number;

  category: Category;
}
