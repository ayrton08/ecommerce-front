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
}
