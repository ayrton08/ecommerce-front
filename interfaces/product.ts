export interface IProduct {
  description: string;
  name: string;
  type: string;
  images: string;
  price: number;
  objectID: string;
  total: number;
}

export interface ProductType {
  description?: string;
  title: string;
  price: number;
  picture: string;
  id: string;
  className?: string;
  detail?: boolean;
  category?: string;
  onClick?: any;
  disable?: boolean;
  recomended?: boolean;
}
