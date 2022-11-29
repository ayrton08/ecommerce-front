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
  "Gross sales": number;
  unit_price: number;
  category_id: string;
  Description: string;
  Link: string;
  title: string;
  Materials: string[];
  currency_id: string;
  description: string;
  "Unit cost": number;
  "Size (WxLxH)": string;
  "Total units sold": number;
}
