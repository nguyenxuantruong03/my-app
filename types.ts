export interface Store{
  name: string;
}

export interface Billboard {
  id: string;
  label: string;
  imageUrl: string;
}

export interface Billboardmini {
  id: string;
  label: string;
  imageUrl: string;
}

export interface Billboardsale {
  id: string;
  label: string;
  imageUrl: string;
}

export interface Category {
  id: string;
  name: string;
  billboard: Billboard;
}

export interface Product {
  id: string;

  category: Category;
  size: Size;
  color: Color;
  images: Image[];
  specifications: Specifications;
  salientfeatures: Salientfeatures;
  name: string;
  heading: string;
  description: string;
  price: string;
  priceold: string;
  percentpromotion: string;
  // Thong tin san pham bao hanh VAT
  headingrecommend: string;
  infomationrecommend: string;
  warrantyrecommend: string;
  vatrecommend: string;
  // Khuyến mãi
  promotionheading: string;
  promotiondescription: string;
  //Bảo hành
  guaranteeheading: string;
  guaranteedescription: string;
  guaranteeinfomation: string;
  guaranteeprice: string;

  isFeatured: boolean;
}

export interface Size {
  id: string;
  name: string;
  value: string;
}
export interface Color {
  id: string;
  name: string;
  value: string;
}
export interface Image {
  id: string;
  url: string;
}
export interface Specifications {
  id: string;
  name: string;
  description: string;
  value: string;
  description2: string;
  value2: string;
  description3: string;
  value3: string;
  description4: string;
  value4: string;
  description5: string;
  value5: string;
  description6: string;
  value6: string;
  description7: string;
  value7: string;
  description8: string;
  value8: string;
  description9: string;
  value9: string;
  description10: string;
  value10: string;
}
export interface Salientfeatures {
  id: string;
  name: string;
  description: string;
  description2: string;
  description3: string;
  description4: string;
  content: string;
  imagesalientfeatures: Imagesalientfeatures[];
}

export interface Imagesalientfeatures {
  id: string;
  url: string;
}
