export interface IProduct {
  description: string;
  name: string;
  type: string;
  images: string;
  price: number;
  objectID: string;
  total?: number;
}

export interface ProductType {
  description?: string;
  title: string;
  price: number;
  image: string;
  id: string;
  className?: string;
  detail?: boolean;
  category?: string;
  onClick?: any;
  disable?: boolean;
  recomended?: boolean;
}

export interface IProductResponse {
  Description: string;
  Notes: string;
  Link: string;
  Name: string;
  Type: string;
  Images: any;
  Materials: string[];
  'Size (WxLxH)': string;
  'Unit cost': number;
  Settings: string[];
  Vendor: string[];
  Color: string[];
  Designer: string[];
  'Total units sold': number;
  'Gross sales': number;
  objectID: string;
  _highlightResult: any;
}
