export interface ICartProduct {
  description: string;
  name: string;
  type: string;
  images: string;
  price: number;
  objectID: string;
  quantity: number;
}

export interface OrderCart {
  aditionalInfo: AditionalInfo;
  productId: string;
  userId: string;
  status: string;
  createdAt: any;
}

export interface CreateOrder {
  items: any[];
  back_urls: {
    success: string;
  };
  notification_url: string;
}

export interface AditionalInfo {
  linkToPay: string;
  back_urls: BackUrls;
  items: Item[];
  notification_url: string;
  external_reference: string;
}

export interface BackUrls {
  success: string;
}

export interface Item {
  Designer: string[];
  Settings: string[];
  Images: any[];
  quantity: number;
  Type: string;
  Vendor: string[];
  Notes: string;
  objectID: string;
  Name: string;
  Color: string[];
  'Gross sales': number;
  unit_price: number;
  category_id: string;
  Description: string;
  Link: string;
  title: string;
  Materials: string[];
  currency_id: string;
  description: string;
  'Unit cost': number;
  'Size (WxLxH)': string;
  'Total units sold': number;
}

export interface OrderType {
  Notes?: string;
  Color: string[];
  'Gross sales': number;
  objectID: string;
  Vendor: string[];
  Type: string;
  'Unit cost': number;
  Images: any[];
  Description: string;
  Link: string;
  'Total units sold': number;
  cantidad: number;
  Settings: string[];
  Materials: string[];
  'Size (WxLxH)': string;
  Name: string;
  Designer: string[];
  Orders?: string[];
  'In stock'?: boolean;
}

export interface CartWrapperType {
  data: any;
}
