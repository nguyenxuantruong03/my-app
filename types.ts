
export interface Store {
  name: string;
}

export interface Billboard {
  id: string;
  label: string;
  imagebillboard: ImageBillboard[];
}

export interface ImageBillboard {
  id: string;
  url: string;
}

export interface Billboardmini {
  id: string;
  label: string;
  imagebillboardmini: ImageBillboardmini[];
}

export interface ImageBillboardmini {
  id: string;
  url: string;
}

export interface Billboardsale {
  id: string;
  label: string;
  imageUrl: string;
}

export interface Category {
  id: string;
  name: string;
  categoryType: CategoryType.CATEGORY;
}
export interface Category1 {
  id: string;
  name: string;
  categoryType: CategoryType.CATEGORY1;
}

export interface Category2 {
  id: string;
  name: string;
  categoryType: CategoryType.CATEGORY2;
}

export interface Category3 {
  id: string;
  name: string;
  categoryType: CategoryType.CATEGORY3;
}

export interface Category4 {
  id: string;
  name: string;
  categoryType: CategoryType.CATEGORY4;
}

export interface Category5 {
  id: string;
  name: string;
  categoryType: CategoryType.CATEGORY5;
}

export interface Category6 {
  id: string;
  name: string;
  categoryType: CategoryType.CATEGORY6;
}

export interface Category7 {
  id: string;
  name: string;
  categoryType: CategoryType.CATEGORY7;
}

export interface Category8 {
  id: string;
  name: string;
  categoryType: CategoryType.CATEGORY8;
}

export interface Category9 {
  id: string;
  name: string;
  categoryType: CategoryType.CATEGORY9;
}

export interface Category10 {
  id: string;
  name: string;
  categoryType: CategoryType.CATEGORY10;
}

export interface Category11 {
  id: string;
  name: string;
  categoryType: CategoryType.CATEGORY11;
}

export enum CategoryType {
  CATEGORY,
  CATEGORY1,
  CATEGORY2,
  CATEGORY3,
  CATEGORY4,
  CATEGORY5,
  CATEGORY6,
  CATEGORY7,
  CATEGORY8,
  CATEGORY9,
  CATEGORY10,
  CATEGORY11,
}

export enum ProductType {
  PRODUCT,
  PRODUCT1,
  PRODUCT2,
  PRODUCT3,
  PRODUCT4,
  PRODUCT5,
  PRODUCT6,
  PRODUCT7,
  PRODUCT8,
  PRODUCT9,
  PRODUCT10,
  PRODUCT11,
}
export interface Product {
  id: string;
  productType: ProductType.PRODUCT;
  category: Category;
  size: Size;
  color: Color;
  images: Image[];
  // Specification
  descriptionspecifications: string;
  valuespecifications: string;
  description2specifications: string;
  value2specifications: string;
  description3specifications: string;
  value3specifications: string;
  description4specifications: string;
  value4specifications: string;
  description5specifications: string;
  value5specifications: string;
  description6specifications: string;
  value6specifications: string;
  description7specifications: string;
  value7specifications: string;
  description8specifications: string;
  value8specifications: string;
  description9specifications: string;
  value9specifications: string;
  description10specifications: string;
  value10specifications: string;
  description11specifications: string;
  value11specifications: string;
  description12specifications: string;
  value12specifications: string;
  description13specifications: string;
  value13specifications: string;
  description14specifications: string;
  value14specifications: string;
  // salientfeatures
  descriptionsalientfeatures: string;
  description2salientfeatures: string;
  description3salientfeatures: string;
  description4salientfeatures: string;
  contentsalientfeatures: string;
  imagesalientfeatures: Imagesalientfeaturesproduct[];
  name: string;
  heading: string;
  description: string;
  price: number;
  percentpromotion: number;
  // Khuyến mãi
  promotionheading: string;
  promotiondescription: string;
  //Bảo hành
  guaranteeheading: string;
  guaranteedescription: string;
  guaranteeinfomation: string;
  guaranteeprice: string;
  userId:any
  isFeatured: boolean;
  quantity: number;
  selectedWarranty: any;
}


export interface Product1 {
  id: string;
  productType: ProductType.PRODUCT1;
  category: Category;
  size: Size;
  color: Color;
  images: Image[];
  // Specification
  descriptionspecifications: string;
  valuespecifications: string;
  description2specifications: string;
  value2specifications: string;
  description3specifications: string;
  value3specifications: string;
  description4specifications: string;
  value4specifications: string;
  description5specifications: string;
  value5specifications: string;
  description6specifications: string;
  value6specifications: string;
  description7specifications: string;
  value7specifications: string;
  description8specifications: string;
  value8specifications: string;
  description9specifications: string;
  value9specifications: string;
  description10specifications: string;
  value10specifications: string;
  description11specifications: string;
  value11specifications: string;
  description12specifications: string;
  value12specifications: string;
  description13specifications: string;
  value13specifications: string;
  description14specifications: string;
  value14specifications: string;
  // salientfeatures
  descriptionsalientfeatures: string;
  description2salientfeatures: string;
  description3salientfeatures: string;
  description4salientfeatures: string;
  contentsalientfeatures: string;
  imagesalientfeatures: Imagesalientfeaturesproduct[];
  name: string;
  heading: string;
  description: string;
  price: number;
  percentpromotion: number;
  // Khuyến mãi
  promotionheading: string;
  promotiondescription: string;
  //Bảo hành
  guaranteeheading: string;
  guaranteedescription: string;
  guaranteeinfomation: string;
  guaranteeprice: string;
  userId:any
  isFeatured: boolean;
  quantity: number;
  selectedWarranty: any;
}


export interface Product2 {
  id: string;
  productType: ProductType.PRODUCT2;
  category: Category;
  size: Size;
  color: Color;
  images: Image[];
  // Specification
  descriptionspecifications: string;
  valuespecifications: string;
  description2specifications: string;
  value2specifications: string;
  description3specifications: string;
  value3specifications: string;
  description4specifications: string;
  value4specifications: string;
  description5specifications: string;
  value5specifications: string;
  description6specifications: string;
  value6specifications: string;
  description7specifications: string;
  value7specifications: string;
  description8specifications: string;
  value8specifications: string;
  description9specifications: string;
  value9specifications: string;
  description10specifications: string;
  value10specifications: string;
  description11specifications: string;
  value11specifications: string;
  description12specifications: string;
  value12specifications: string;
  description13specifications: string;
  value13specifications: string;
  description14specifications: string;
  value14specifications: string;
  // salientfeatures
  descriptionsalientfeatures: string;
  description2salientfeatures: string;
  description3salientfeatures: string;
  description4salientfeatures: string;
  contentsalientfeatures: string;
  imagesalientfeatures: Imagesalientfeaturesproduct[];
  name: string;
  heading: string;
  description: string;
  price: number;
  percentpromotion: number;
  // Khuyến mãi
  promotionheading: string;
  promotiondescription: string;
  //Bảo hành
  guaranteeheading: string;
  guaranteedescription: string;
  guaranteeinfomation: string;
  guaranteeprice: string;
  userId:any
  isFeatured: boolean;
  quantity: number;
  selectedWarranty: any;
}


export interface Product3 {
  id: string;
  productType: ProductType.PRODUCT3;
  category: Category;
  size: Size;
  color: Color;
  images: Image[];
  // Specification
  descriptionspecifications: string;
  valuespecifications: string;
  description2specifications: string;
  value2specifications: string;
  description3specifications: string;
  value3specifications: string;
  description4specifications: string;
  value4specifications: string;
  description5specifications: string;
  value5specifications: string;
  description6specifications: string;
  value6specifications: string;
  description7specifications: string;
  value7specifications: string;
  description8specifications: string;
  value8specifications: string;
  description9specifications: string;
  value9specifications: string;
  description10specifications: string;
  value10specifications: string;
  description11specifications: string;
  value11specifications: string;
  description12specifications: string;
  value12specifications: string;
  description13specifications: string;
  value13specifications: string;
  description14specifications: string;
  value14specifications: string;
  // salientfeatures
  descriptionsalientfeatures: string;
  description2salientfeatures: string;
  description3salientfeatures: string;
  description4salientfeatures: string;
  contentsalientfeatures: string;
  imagesalientfeatures: Imagesalientfeaturesproduct[];
  name: string;
  heading: string;
  description: string;
  price: number;
  percentpromotion: number;
  // Khuyến mãi
  promotionheading: string;
  promotiondescription: string;
  //Bảo hành
  guaranteeheading: string;
  guaranteedescription: string;
  guaranteeinfomation: string;
  guaranteeprice: string;
  userId:any
  isFeatured: boolean;
  quantity: number;
  selectedWarranty: any;
}


export interface Product4 {
  id: string;
  productType: ProductType.PRODUCT4;
  category: Category;
  size: Size;
  color: Color;
  images: Image[];
  // Specification
  descriptionspecifications: string;
  valuespecifications: string;
  description2specifications: string;
  value2specifications: string;
  description3specifications: string;
  value3specifications: string;
  description4specifications: string;
  value4specifications: string;
  description5specifications: string;
  value5specifications: string;
  description6specifications: string;
  value6specifications: string;
  description7specifications: string;
  value7specifications: string;
  description8specifications: string;
  value8specifications: string;
  description9specifications: string;
  value9specifications: string;
  description10specifications: string;
  value10specifications: string;
  description11specifications: string;
  value11specifications: string;
  description12specifications: string;
  value12specifications: string;
  description13specifications: string;
  value13specifications: string;
  description14specifications: string;
  value14specifications: string;
  // salientfeatures
  descriptionsalientfeatures: string;
  description2salientfeatures: string;
  description3salientfeatures: string;
  description4salientfeatures: string;
  contentsalientfeatures: string;
  imagesalientfeatures: Imagesalientfeaturesproduct[];
  name: string;
  heading: string;
  description: string;
  price: number;
  percentpromotion: number;
  // Khuyến mãi
  promotionheading: string;
  promotiondescription: string;
  //Bảo hành
  guaranteeheading: string;
  guaranteedescription: string;
  guaranteeinfomation: string;
  guaranteeprice: string;
  userId:any
  isFeatured: boolean;
  quantity: number;
  selectedWarranty: any;
}


export interface Product5 {
  id: string;
  productType: ProductType.PRODUCT5;
  category: Category;
  size: Size;
  color: Color;
  images: Image[];
  // Specification
  descriptionspecifications: string;
  valuespecifications: string;
  description2specifications: string;
  value2specifications: string;
  description3specifications: string;
  value3specifications: string;
  description4specifications: string;
  value4specifications: string;
  description5specifications: string;
  value5specifications: string;
  description6specifications: string;
  value6specifications: string;
  description7specifications: string;
  value7specifications: string;
  description8specifications: string;
  value8specifications: string;
  description9specifications: string;
  value9specifications: string;
  description10specifications: string;
  value10specifications: string;
  description11specifications: string;
  value11specifications: string;
  description12specifications: string;
  value12specifications: string;
  description13specifications: string;
  value13specifications: string;
  description14specifications: string;
  value14specifications: string;
  // salientfeatures
  descriptionsalientfeatures: string;
  description2salientfeatures: string;
  description3salientfeatures: string;
  description4salientfeatures: string;
  contentsalientfeatures: string;
  imagesalientfeatures: Imagesalientfeaturesproduct[];
  name: string;
  heading: string;
  description: string;
  price: number;
  percentpromotion: number;
  // Khuyến mãi
  promotionheading: string;
  promotiondescription: string;
  //Bảo hành
  guaranteeheading: string;
  guaranteedescription: string;
  guaranteeinfomation: string;
  guaranteeprice: string;
  userId:any
  isFeatured: boolean;
  quantity: number;
  selectedWarranty: any;
}


export interface Product6 {
  id: string;
  productType: ProductType.PRODUCT6;
  category: Category;
  size: Size;
  color: Color;
  images: Image[];
  // Specification
  descriptionspecifications: string;
  valuespecifications: string;
  description2specifications: string;
  value2specifications: string;
  description3specifications: string;
  value3specifications: string;
  description4specifications: string;
  value4specifications: string;
  description5specifications: string;
  value5specifications: string;
  description6specifications: string;
  value6specifications: string;
  description7specifications: string;
  value7specifications: string;
  description8specifications: string;
  value8specifications: string;
  description9specifications: string;
  value9specifications: string;
  description10specifications: string;
  value10specifications: string;
  description11specifications: string;
  value11specifications: string;
  description12specifications: string;
  value12specifications: string;
  description13specifications: string;
  value13specifications: string;
  description14specifications: string;
  value14specifications: string;
  // salientfeatures
  descriptionsalientfeatures: string;
  description2salientfeatures: string;
  description3salientfeatures: string;
  description4salientfeatures: string;
  contentsalientfeatures: string;
  imagesalientfeatures: Imagesalientfeaturesproduct[];
  name: string;
  heading: string;
  description: string;
  price: number;
  percentpromotion: number;
  // Khuyến mãi
  promotionheading: string;
  promotiondescription: string;
  //Bảo hành
  guaranteeheading: string;
  guaranteedescription: string;
  guaranteeinfomation: string;
  guaranteeprice: string;
  userId:any
  isFeatured: boolean;
  quantity: number;
  selectedWarranty: any;
}


export interface Product7 {
  id: string;
  productType: ProductType.PRODUCT7;
  category: Category;
  size: Size;
  color: Color;
  images: Image[];
  // Specification
  descriptionspecifications: string;
  valuespecifications: string;
  description2specifications: string;
  value2specifications: string;
  description3specifications: string;
  value3specifications: string;
  description4specifications: string;
  value4specifications: string;
  description5specifications: string;
  value5specifications: string;
  description6specifications: string;
  value6specifications: string;
  description7specifications: string;
  value7specifications: string;
  description8specifications: string;
  value8specifications: string;
  description9specifications: string;
  value9specifications: string;
  description10specifications: string;
  value10specifications: string;
  description11specifications: string;
  value11specifications: string;
  description12specifications: string;
  value12specifications: string;
  description13specifications: string;
  value13specifications: string;
  description14specifications: string;
  value14specifications: string;
  // salientfeatures
  descriptionsalientfeatures: string;
  description2salientfeatures: string;
  description3salientfeatures: string;
  description4salientfeatures: string;
  contentsalientfeatures: string;
  imagesalientfeatures: Imagesalientfeaturesproduct[];
  name: string;
  heading: string;
  description: string;
  price: number;
  percentpromotion: number;
  // Khuyến mãi
  promotionheading: string;
  promotiondescription: string;
  //Bảo hành
  guaranteeheading: string;
  guaranteedescription: string;
  guaranteeinfomation: string;
  guaranteeprice: string;
  userId:any
  isFeatured: boolean;
  quantity: number;
  selectedWarranty: any;
}


export interface Product8 {
  id: string;
  productType: ProductType.PRODUCT8;
  category: Category;
  size: Size;
  color: Color;
  images: Image[];
  // Specification
  descriptionspecifications: string;
  valuespecifications: string;
  description2specifications: string;
  value2specifications: string;
  description3specifications: string;
  value3specifications: string;
  description4specifications: string;
  value4specifications: string;
  description5specifications: string;
  value5specifications: string;
  description6specifications: string;
  value6specifications: string;
  description7specifications: string;
  value7specifications: string;
  description8specifications: string;
  value8specifications: string;
  description9specifications: string;
  value9specifications: string;
  description10specifications: string;
  value10specifications: string;
  description11specifications: string;
  value11specifications: string;
  description12specifications: string;
  value12specifications: string;
  description13specifications: string;
  value13specifications: string;
  description14specifications: string;
  value14specifications: string;
  // salientfeatures
  descriptionsalientfeatures: string;
  description2salientfeatures: string;
  description3salientfeatures: string;
  description4salientfeatures: string;
  contentsalientfeatures: string;
  imagesalientfeatures: Imagesalientfeaturesproduct[];
  name: string;
  heading: string;
  description: string;
  price: number;
  percentpromotion: number;
  // Khuyến mãi
  promotionheading: string;
  promotiondescription: string;
  //Bảo hành
  guaranteeheading: string;
  guaranteedescription: string;
  guaranteeinfomation: string;
  guaranteeprice: string;
  userId:any
  isFeatured: boolean;
  quantity: number;
  selectedWarranty: any;
}


export interface Product9 {
  id: string;
  productType: ProductType.PRODUCT9;
  category: Category;
  size: Size;
  color: Color;
  images: Image[];
  // Specification
  descriptionspecifications: string;
  valuespecifications: string;
  description2specifications: string;
  value2specifications: string;
  description3specifications: string;
  value3specifications: string;
  description4specifications: string;
  value4specifications: string;
  description5specifications: string;
  value5specifications: string;
  description6specifications: string;
  value6specifications: string;
  description7specifications: string;
  value7specifications: string;
  description8specifications: string;
  value8specifications: string;
  description9specifications: string;
  value9specifications: string;
  description10specifications: string;
  value10specifications: string;
  description11specifications: string;
  value11specifications: string;
  description12specifications: string;
  value12specifications: string;
  description13specifications: string;
  value13specifications: string;
  description14specifications: string;
  value14specifications: string;
  // salientfeatures
  descriptionsalientfeatures: string;
  description2salientfeatures: string;
  description3salientfeatures: string;
  description4salientfeatures: string;
  contentsalientfeatures: string;
  imagesalientfeatures: Imagesalientfeaturesproduct[];
  name: string;
  heading: string;
  description: string;
  price: number;
  percentpromotion: number;
  // Khuyến mãi
  promotionheading: string;
  promotiondescription: string;
  //Bảo hành
  guaranteeheading: string;
  guaranteedescription: string;
  guaranteeinfomation: string;
  guaranteeprice: string;
  userId:any
  isFeatured: boolean;
  quantity: number;
  selectedWarranty: any;
}


export interface Product10 {
  id: string;
  productType: ProductType.PRODUCT10;
  category: Category;
  size: Size;
  color: Color;
  images: Image[];
  // Specification
  descriptionspecifications: string;
  valuespecifications: string;
  description2specifications: string;
  value2specifications: string;
  description3specifications: string;
  value3specifications: string;
  description4specifications: string;
  value4specifications: string;
  description5specifications: string;
  value5specifications: string;
  description6specifications: string;
  value6specifications: string;
  description7specifications: string;
  value7specifications: string;
  description8specifications: string;
  value8specifications: string;
  description9specifications: string;
  value9specifications: string;
  description10specifications: string;
  value10specifications: string;
  description11specifications: string;
  value11specifications: string;
  description12specifications: string;
  value12specifications: string;
  description13specifications: string;
  value13specifications: string;
  description14specifications: string;
  value14specifications: string;
  // salientfeatures
  descriptionsalientfeatures: string;
  description2salientfeatures: string;
  description3salientfeatures: string;
  description4salientfeatures: string;
  contentsalientfeatures: string;
  imagesalientfeatures: Imagesalientfeaturesproduct[];
  name: string;
  heading: string;
  description: string;
  price: number;
  percentpromotion: number;
  // Khuyến mãi
  promotionheading: string;
  promotiondescription: string;
  //Bảo hành
  guaranteeheading: string;
  guaranteedescription: string;
  guaranteeinfomation: string;
  guaranteeprice: string;
  userId:any
  isFeatured: boolean;
  quantity: number;
  selectedWarranty: any;
}


export interface Product11 {
  id: string;
  productType: ProductType.PRODUCT11
  category: Category;
  size: Size;
  color: Color;
  images: Image[];
  // Specification
  descriptionspecifications: string;
  valuespecifications: string;
  description2specifications: string;
  value2specifications: string;
  description3specifications: string;
  value3specifications: string;
  description4specifications: string;
  value4specifications: string;
  description5specifications: string;
  value5specifications: string;
  description6specifications: string;
  value6specifications: string;
  description7specifications: string;
  value7specifications: string;
  description8specifications: string;
  value8specifications: string;
  description9specifications: string;
  value9specifications: string;
  description10specifications: string;
  value10specifications: string;
  description11specifications: string;
  value11specifications: string;
  description12specifications: string;
  value12specifications: string;
  description13specifications: string;
  value13specifications: string;
  description14specifications: string;
  value14specifications: string;
  // salientfeatures
  descriptionsalientfeatures: string;
  description2salientfeatures: string;
  description3salientfeatures: string;
  description4salientfeatures: string;
  contentsalientfeatures: string;
  imagesalientfeatures: Imagesalientfeaturesproduct[];
  name: string;
  heading: string;
  description: string;
  price: number;
  percentpromotion: number;
  // Khuyến mãi
  promotionheading: string;
  promotiondescription: string;
  //Bảo hành
  guaranteeheading: string;
  guaranteedescription: string;
  guaranteeinfomation: string;
  guaranteeprice: string;
  userId:any
  isFeatured: boolean;
  quantity: number;
  selectedWarranty: any;
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

export interface Imagesalientfeaturesproduct {
  id: string;
  url: string;
}

//-------------------------Pacman---------------------------
export type Character = {
  velocity: number;
  size: number;
  border: number;
  topScoreBoard: number;
  color: string;
  name: string;
};

export enum COLOR {
  PACMAN_DEAD = "white",
  GHOST_DEAD = "white",
  RED = "red",
  BLUE = "blue",
  ORANGE = "orange",
  GREEN = "green",
}

export enum DIFFICULTY {
  EASY = "easy",
  MEDIUM = "medium",
  ADVANCED = "advanced",
}

export type Difficulty =
  | DIFFICULTY.EASY
  | DIFFICULTY.MEDIUM
  | DIFFICULTY.ADVANCED;

export enum DIRECTION {
  LEFT = "left",
  RIGHT = "right",
  UP = "up",
  DOWN = "down",
}

export type Direction =
  | DIRECTION.LEFT
  | DIRECTION.RIGHT
  | DIRECTION.UP
  | DIRECTION.DOWN;

export enum ARROW {
  LEFT = 37,
  RIGHT = 39,
  UP = 38,
  DOWN = 40,
}

export enum GAME_STATUS {
  IN_PROGRESS = "in_progress",
  PAUSED = "paused",
  LOST = "lost",
  WON = "won",
}

export type GameStatus =
  | GAME_STATUS.IN_PROGRESS
  | GAME_STATUS.LOST
  | GAME_STATUS.WON
  | GAME_STATUS.PAUSED;

export type Position = {
  top: number;
  left: number;
};

export const ghostStartPosition: Position = {
  top: 300,
  left: 300,
};

export const pacmanStartPosition: Position = {
  top: 0,
  left: 0,
};
