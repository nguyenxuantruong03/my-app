
export interface Store{
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
}

export interface Category1 {
  id: string;
  name: string;
}

export interface Category2 {
  id: string;
  name: string;
}

export interface Category3 {
  id: string;
  name: string;
}

export interface Category4 {
  id: string;
  name: string;
}

export interface Category5 {
  id: string;
  name: string;
}

export interface Category6 {
  id: string;
  name: string;
}

export interface Category7 {
  id: string;
  name: string;
}

export interface Category8 {
  id: string;
  name: string;
}

export interface Category9 {
  id: string;
  name: string;
}

export interface Category10 {
  id: string;
  name: string;
}

export interface Category11 {
  id: string;
  name: string;
}

export interface Product {
  id: string;

  category: Category;
  size: Size;
  color: Color;
  images: Image[];
 // Specification
 descriptionspecifications   :string;                
 valuespecifications         :string;                
 description2specifications  :string;                
 value2specifications        :string;                
 description3specifications  :string;                
 value3specifications        :string;                
 description4specifications  :string;                
 value4specifications        :string;                
 description5specifications  :string;                
 value5specifications        :string;                
 description6specifications  :string;                
 value6specifications        :string;                
 description7specifications  :string;                
 value7specifications        :string;                
 description8specifications  :string;                
 value8specifications        :string;                
 description9specifications  :string;                
 value9specifications        :string;                
 description10specifications :string;                
 value10specifications       :string;                
 description11specifications :string;                
 value11specifications       :string;                
 description12specifications :string;                
 value12specifications       :string;                
 description13specifications :string;                
 value13specifications       :string;                
 description14specifications :string;                
 value14specifications       :string;                
 // salientfeatures
 descriptionsalientfeatures  :string;                
 description2salientfeatures :string;                
 description3salientfeatures :string;                
 description4salientfeatures :string;                
 contentsalientfeatures      :string;  
 imagesalientfeatures:Imagesalientfeaturesproduct[];              
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

isFeatured: boolean;
quantity:number
selectedWarranty:any
}
export interface Product1 {
  id: string;

  category: Category1;
  size: Size;
  color: Color;
  images: Image1[];
  descriptionspecifications   :string;                
 valuespecifications         :string;                
 description2specifications  :string;                
 value2specifications        :string;                
 description3specifications  :string;                
 value3specifications        :string;                
 description4specifications  :string;                
 value4specifications        :string;                
 description5specifications  :string;                
 value5specifications        :string;                
 description6specifications  :string;                
 value6specifications        :string;                
 description7specifications  :string;                
 value7specifications        :string;                
 description8specifications  :string;                
 value8specifications        :string;                
 description9specifications  :string;                
 value9specifications        :string;                
 description10specifications :string;                
 value10specifications       :string;                
 description11specifications :string;                
 value11specifications       :string;                
 description12specifications :string;                
 value12specifications       :string;                
 description13specifications :string;                
 value13specifications       :string;                
 description14specifications :string;                
 value14specifications       :string;                
 // salientfeatures
 descriptionsalientfeatures  :string;                
 description2salientfeatures :string;                
 description3salientfeatures :string;                
 description4salientfeatures :string;                
 contentsalientfeatures      :string;  
 imagesalientfeatures:Imagesalientfeaturesproduct1[]   
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

isFeatured: boolean;
quantity:number
selectedWarranty:any
}

export interface Product2 {
  id: string;

  category: Category2;
  size: Size;
  color: Color;
  images: Image2[];
  descriptionspecifications   :string;                
  valuespecifications         :string;                
  description2specifications  :string;                
  value2specifications        :string;                
  description3specifications  :string;                
  value3specifications        :string;                
  description4specifications  :string;                
  value4specifications        :string;                
  description5specifications  :string;                
  value5specifications        :string;                
  description6specifications  :string;                
  value6specifications        :string;                
  description7specifications  :string;                
  value7specifications        :string;                
  description8specifications  :string;                
  value8specifications        :string;                
  description9specifications  :string;                
  value9specifications        :string;                
  description10specifications :string;                
  value10specifications       :string;                
  description11specifications :string;                
  value11specifications       :string;                
  description12specifications :string;                
  value12specifications       :string;                
  description13specifications :string;                
  value13specifications       :string;                
  description14specifications :string;                
  value14specifications       :string;                
  // salientfeatures
  descriptionsalientfeatures  :string;                
  description2salientfeatures :string;                
  description3salientfeatures :string;                
  description4salientfeatures :string;                
  contentsalientfeatures      :string;  
  imagesalientfeatures:Imagesalientfeaturesproduct2[] 
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

isFeatured: boolean;
quantity:number
selectedWarranty:any
}

export interface Product3 {
  id: string;

  category: Category3;
  size: Size;
  color: Color;
  images: Image3[];
  descriptionspecifications   :string;                
 valuespecifications         :string;                
 description2specifications  :string;                
 value2specifications        :string;                
 description3specifications  :string;                
 value3specifications        :string;                
 description4specifications  :string;                
 value4specifications        :string;                
 description5specifications  :string;                
 value5specifications        :string;                
 description6specifications  :string;                
 value6specifications        :string;                
 description7specifications  :string;                
 value7specifications        :string;                
 description8specifications  :string;                
 value8specifications        :string;                
 description9specifications  :string;                
 value9specifications        :string;                
 description10specifications :string;                
 value10specifications       :string;                
 description11specifications :string;                
 value11specifications       :string;                
 description12specifications :string;                
 value12specifications       :string;                
 description13specifications :string;                
 value13specifications       :string;                
 description14specifications :string;                
 value14specifications       :string;                
 // salientfeatures
 descriptionsalientfeatures  :string;                
 description2salientfeatures :string;                
 description3salientfeatures :string;                
 description4salientfeatures :string;                
 contentsalientfeatures      :string;  
 imagesalientfeatures:Imagesalientfeaturesproduct3[] 
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

isFeatured: boolean;
quantity:number
selectedWarranty:any

}

export interface Product4 {
  id: string;

  category: Category4;
  size: Size;
  color: Color;
  images: Image4[];
  descriptionspecifications   :string;                
  valuespecifications         :string;                
  description2specifications  :string;                
  value2specifications        :string;                
  description3specifications  :string;                
  value3specifications        :string;                
  description4specifications  :string;                
  value4specifications        :string;                
  description5specifications  :string;                
  value5specifications        :string;                
  description6specifications  :string;                
  value6specifications        :string;                
  description7specifications  :string;                
  value7specifications        :string;                
  description8specifications  :string;                
  value8specifications        :string;                
  description9specifications  :string;                
  value9specifications        :string;                
  description10specifications :string;                
  value10specifications       :string;                
  description11specifications :string;                
  value11specifications       :string;                
  description12specifications :string;                
  value12specifications       :string;                
  description13specifications :string;                
  value13specifications       :string;                
  description14specifications :string;                
  value14specifications       :string;                
  // salientfeatures
  descriptionsalientfeatures  :string;                
  description2salientfeatures :string;                
  description3salientfeatures :string;                
  description4salientfeatures :string;                
  contentsalientfeatures      :string;  
  imagesalientfeatures:Imagesalientfeaturesproduct4[] 
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

isFeatured: boolean;
quantity:number
selectedWarranty:any

}

export interface Product5 {
  id: string;

  category: Category5;
  size: Size;
  color: Color;
  images: Image5[];
  descriptionspecifications   :string;                
 valuespecifications         :string;                
 description2specifications  :string;                
 value2specifications        :string;                
 description3specifications  :string;                
 value3specifications        :string;                
 description4specifications  :string;                
 value4specifications        :string;                
 description5specifications  :string;                
 value5specifications        :string;                
 description6specifications  :string;                
 value6specifications        :string;                
 description7specifications  :string;                
 value7specifications        :string;                
 description8specifications  :string;                
 value8specifications        :string;                
 description9specifications  :string;                
 value9specifications        :string;                
 description10specifications :string;                
 value10specifications       :string;                
 description11specifications :string;                
 value11specifications       :string;                
 description12specifications :string;                
 value12specifications       :string;                
 description13specifications :string;                
 value13specifications       :string;                
 description14specifications :string;                
 value14specifications       :string;                
 // salientfeatures
 descriptionsalientfeatures  :string;                
 description2salientfeatures :string;                
 description3salientfeatures :string;                
 description4salientfeatures :string;                
 contentsalientfeatures      :string;  
 imagesalientfeatures:Imagesalientfeaturesproduct5[] 
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

isFeatured: boolean;
quantity:number
selectedWarranty:any

}

export interface Product6 {
  id: string;

  category: Category6;
  size: Size;
  color: Color;
  images: Image6[];
  descriptionspecifications   :string;                
  valuespecifications         :string;                
  description2specifications  :string;                
  value2specifications        :string;                
  description3specifications  :string;                
  value3specifications        :string;                
  description4specifications  :string;                
  value4specifications        :string;                
  description5specifications  :string;                
  value5specifications        :string;                
  description6specifications  :string;                
  value6specifications        :string;                
  description7specifications  :string;                
  value7specifications        :string;                
  description8specifications  :string;                
  value8specifications        :string;                
  description9specifications  :string;                
  value9specifications        :string;                
  description10specifications :string;                
  value10specifications       :string;                
  description11specifications :string;                
  value11specifications       :string;                
  description12specifications :string;                
  value12specifications       :string;                
  description13specifications :string;                
  value13specifications       :string;                
  description14specifications :string;                
  value14specifications       :string;                
  // salientfeatures
  descriptionsalientfeatures  :string;                
  description2salientfeatures :string;                
  description3salientfeatures :string;                
  description4salientfeatures :string;                
  contentsalientfeatures      :string;  
  imagesalientfeatures:Imagesalientfeaturesproduct6[] 
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

isFeatured: boolean;
quantity:number
selectedWarranty:any

}

export interface Product7 {
  id: string;

  category: Category7;
  size: Size;
  color: Color;
  images: Image7[];
  descriptionspecifications   :string;                
  valuespecifications         :string;                
  description2specifications  :string;                
  value2specifications        :string;                
  description3specifications  :string;                
  value3specifications        :string;                
  description4specifications  :string;                
  value4specifications        :string;                
  description5specifications  :string;                
  value5specifications        :string;                
  description6specifications  :string;                
  value6specifications        :string;                
  description7specifications  :string;                
  value7specifications        :string;                
  description8specifications  :string;                
  value8specifications        :string;                
  description9specifications  :string;                
  value9specifications        :string;                
  description10specifications :string;                
  value10specifications       :string;                
  description11specifications :string;                
  value11specifications       :string;                
  description12specifications :string;                
  value12specifications       :string;                
  description13specifications :string;                
  value13specifications       :string;                
  description14specifications :string;                
  value14specifications       :string;                
  // salientfeatures
  descriptionsalientfeatures  :string;                
  description2salientfeatures :string;                
  description3salientfeatures :string;                
  description4salientfeatures :string;                
  contentsalientfeatures      :string;  
  imagesalientfeatures:Imagesalientfeaturesproduct7[] 
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

isFeatured: boolean;
quantity:number
selectedWarranty:any

}

export interface Product8 {
  id: string;

  category: Category8;
  size: Size;
  color: Color;
  images: Image8[];
  descriptionspecifications   :string;                
  valuespecifications         :string;                
  description2specifications  :string;                
  value2specifications        :string;                
  description3specifications  :string;                
  value3specifications        :string;                
  description4specifications  :string;                
  value4specifications        :string;                
  description5specifications  :string;                
  value5specifications        :string;                
  description6specifications  :string;                
  value6specifications        :string;                
  description7specifications  :string;                
  value7specifications        :string;                
  description8specifications  :string;                
  value8specifications        :string;                
  description9specifications  :string;                
  value9specifications        :string;                
  description10specifications :string;                
  value10specifications       :string;                
  description11specifications :string;                
  value11specifications       :string;                
  description12specifications :string;                
  value12specifications       :string;                
  description13specifications :string;                
  value13specifications       :string;                
  description14specifications :string;                
  value14specifications       :string;                
  // salientfeatures
  descriptionsalientfeatures  :string;                
  description2salientfeatures :string;                
  description3salientfeatures :string;                
  description4salientfeatures :string;                
  contentsalientfeatures      :string;  
  imagesalientfeatures:Imagesalientfeaturesproduct8[] 
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

isFeatured: boolean;
quantity:number
selectedWarranty:any

}

export interface Product9 {
  id: string;

  category: Category9;
  size: Size;
  color: Color;
  images: Image9[];
  descriptionspecifications   :string;                
  valuespecifications         :string;                
  description2specifications  :string;                
  value2specifications        :string;                
  description3specifications  :string;                
  value3specifications        :string;                
  description4specifications  :string;                
  value4specifications        :string;                
  description5specifications  :string;                
  value5specifications        :string;                
  description6specifications  :string;                
  value6specifications        :string;                
  description7specifications  :string;                
  value7specifications        :string;                
  description8specifications  :string;                
  value8specifications        :string;                
  description9specifications  :string;                
  value9specifications        :string;                
  description10specifications :string;                
  value10specifications       :string;                
  description11specifications :string;                
  value11specifications       :string;                
  description12specifications :string;                
  value12specifications       :string;                
  description13specifications :string;                
  value13specifications       :string;                
  description14specifications :string;                
  value14specifications       :string;                
  // salientfeatures
  descriptionsalientfeatures  :string;                
  description2salientfeatures :string;                
  description3salientfeatures :string;                
  description4salientfeatures :string;                
  contentsalientfeatures      :string;  
  imagesalientfeatures:Imagesalientfeaturesproduct9[] 
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

isFeatured: boolean;
quantity:number
selectedWarranty:any

}


export interface Product10 {
  id: string;

  category: Category10;
  size: Size;
  color: Color;
  images: Image10[];
  descriptionspecifications   :string;                
  valuespecifications         :string;                
  description2specifications  :string;                
  value2specifications        :string;                
  description3specifications  :string;                
  value3specifications        :string;                
  description4specifications  :string;                
  value4specifications        :string;                
  description5specifications  :string;                
  value5specifications        :string;                
  description6specifications  :string;                
  value6specifications        :string;                
  description7specifications  :string;                
  value7specifications        :string;                
  description8specifications  :string;                
  value8specifications        :string;                
  description9specifications  :string;                
  value9specifications        :string;                
  description10specifications :string;                
  value10specifications       :string;                
  description11specifications :string;                
  value11specifications       :string;                
  description12specifications :string;                
  value12specifications       :string;                
  description13specifications :string;                
  value13specifications       :string;                
  description14specifications :string;                
  value14specifications       :string;                
  // salientfeatures
  descriptionsalientfeatures  :string;                
  description2salientfeatures :string;                
  description3salientfeatures :string;                
  description4salientfeatures :string;                
  contentsalientfeatures      :string;  
  imagesalientfeatures:Imagesalientfeaturesproduct10[] 
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

isFeatured: boolean;
quantity:number
selectedWarranty:any

}


export interface Product11 {
  id: string;

  category: Category11;
  size: Size;
  color: Color;
  images: Image11[];
  descriptionspecifications   :string;                
  valuespecifications         :string;                
  description2specifications  :string;                
  value2specifications        :string;                
  description3specifications  :string;                
  value3specifications        :string;                
  description4specifications  :string;                
  value4specifications        :string;                
  description5specifications  :string;                
  value5specifications        :string;                
  description6specifications  :string;                
  value6specifications        :string;                
  description7specifications  :string;                
  value7specifications        :string;                
  description8specifications  :string;                
  value8specifications        :string;                
  description9specifications  :string;                
  value9specifications        :string;                
  description10specifications :string;                
  value10specifications       :string;                
  description11specifications :string;                
  value11specifications       :string;                
  description12specifications :string;                
  value12specifications       :string;                
  description13specifications :string;                
  value13specifications       :string;                
  description14specifications :string;                
  value14specifications       :string;                
  // salientfeatures
  descriptionsalientfeatures  :string;                
  description2salientfeatures :string;                
  description3salientfeatures :string;                
  description4salientfeatures :string;                
  contentsalientfeatures      :string;  
  imagesalientfeatures:Imagesalientfeaturesproduct11[] 
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

isFeatured: boolean;
quantity:number
selectedWarranty:any

}

export interface Laptop {
  id: string;

  category: Category10;
  size: Size;
  color: Color;
  images: Imagelaptop[];
  descriptionspecifications   :string;                
  valuespecifications         :string;                
  description2specifications  :string;                
  value2specifications        :string;                
  description3specifications  :string;                
  value3specifications        :string;                
  description4specifications  :string;                
  value4specifications        :string;                
  description5specifications  :string;                
  value5specifications        :string;                
  description6specifications  :string;                
  value6specifications        :string;                
  description7specifications  :string;                
  value7specifications        :string;                
  description8specifications  :string;                
  value8specifications        :string;                
  description9specifications  :string;                
  value9specifications        :string;                
  description10specifications :string;                
  value10specifications       :string;                
  description11specifications :string;                
  value11specifications       :string;                
  description12specifications :string;                
  value12specifications       :string;                
  description13specifications :string;                
  value13specifications       :string;                
  description14specifications :string;                
  value14specifications       :string;                
  // salientfeatures
  descriptionsalientfeatures  :string;                
  description2salientfeatures :string;                
  description3salientfeatures :string;                
  description4salientfeatures :string;                
  contentsalientfeatures      :string;  
  imagesalientfeatures:Imagesalientfeatureslaptop[] 
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

isFeatured: boolean;
quantity:number
selectedWarranty:any

}

export interface Headphone {
  id: string;

  category: Category2;
  size: Size;
  color: Color;
  images: Imageheadphone[];
  descriptionspecifications   :string;                
  valuespecifications         :string;                
  description2specifications  :string;                
  value2specifications        :string;                
  description3specifications  :string;                
  value3specifications        :string;                
  description4specifications  :string;                
  value4specifications        :string;                
  description5specifications  :string;                
  value5specifications        :string;                
  description6specifications  :string;                
  value6specifications        :string;                
  description7specifications  :string;                
  value7specifications        :string;                
  description8specifications  :string;                
  value8specifications        :string;                
  description9specifications  :string;                
  value9specifications        :string;                
  description10specifications :string;                
  value10specifications       :string;                
  description11specifications :string;                
  value11specifications       :string;                
  description12specifications :string;                
  value12specifications       :string;                
  description13specifications :string;                
  value13specifications       :string;                
  description14specifications :string;                
  value14specifications       :string;                
  // salientfeatures
  descriptionsalientfeatures  :string;                
  description2salientfeatures :string;                
  description3salientfeatures :string;                
  description4salientfeatures :string;                
  contentsalientfeatures      :string;  
  imagesalientfeatures:Imagesalientfeaturesheadphone[] 
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

isFeatured: boolean;
quantity:number
selectedWarranty:any

}

export interface Tivi {
  id: string;

  category: Category7;
  size: Size;
  color: Color;
  images: Imagetivi[];
  descriptionspecifications   :string;                
  valuespecifications         :string;                
  description2specifications  :string;                
  value2specifications        :string;                
  description3specifications  :string;                
  value3specifications        :string;                
  description4specifications  :string;                
  value4specifications        :string;                
  description5specifications  :string;                
  value5specifications        :string;                
  description6specifications  :string;                
  value6specifications        :string;                
  description7specifications  :string;                
  value7specifications        :string;                
  description8specifications  :string;                
  value8specifications        :string;                
  description9specifications  :string;                
  value9specifications        :string;                
  description10specifications :string;                
  value10specifications       :string;                
  description11specifications :string;                
  value11specifications       :string;                
  description12specifications :string;                
  value12specifications       :string;                
  description13specifications :string;                
  value13specifications       :string;                
  description14specifications :string;                
  value14specifications       :string;                
  // salientfeatures
  descriptionsalientfeatures  :string;                
  description2salientfeatures :string;                
  description3salientfeatures :string;                
  description4salientfeatures :string;                
  contentsalientfeatures      :string;  
  imagesalientfeatures:Imagesalientfeaturestivi[] 
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

isFeatured: boolean;
quantity:number
selectedWarranty:any

}

export interface Watch {
  id: string;

  category: Category3;
  size: Size;
  color: Color;
  images: Imagewatch[];
  descriptionspecifications   :string;                
  valuespecifications         :string;                
  description2specifications  :string;                
  value2specifications        :string;                
  description3specifications  :string;                
  value3specifications        :string;                
  description4specifications  :string;                
  value4specifications        :string;                
  description5specifications  :string;                
  value5specifications        :string;                
  description6specifications  :string;                
  value6specifications        :string;                
  description7specifications  :string;                
  value7specifications        :string;                
  description8specifications  :string;                
  value8specifications        :string;                
  description9specifications  :string;                
  value9specifications        :string;                
  description10specifications :string;                
  value10specifications       :string;                
  description11specifications :string;                
  value11specifications       :string;                
  description12specifications :string;                
  value12specifications       :string;                
  description13specifications :string;                
  value13specifications       :string;                
  description14specifications :string;                
  value14specifications       :string;                
  // salientfeatures
  descriptionsalientfeatures  :string;                
  description2salientfeatures :string;                
  description3salientfeatures :string;                
  description4salientfeatures :string;                
  contentsalientfeatures      :string;  
  imagesalientfeatures:Imagesalientfeatureswatch[] 
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

isFeatured: boolean;
quantity:number
selectedWarranty:any

}

export interface Ipad {
  id: string;

  category: Category1;
  size: Size;
  color: Color;
  images: Imageipad[];
  descriptionspecifications   :string;                
  valuespecifications         :string;                
  description2specifications  :string;                
  value2specifications        :string;                
  description3specifications  :string;                
  value3specifications        :string;                
  description4specifications  :string;                
  value4specifications        :string;                
  description5specifications  :string;                
  value5specifications        :string;                
  description6specifications  :string;                
  value6specifications        :string;                
  description7specifications  :string;                
  value7specifications        :string;                
  description8specifications  :string;                
  value8specifications        :string;                
  description9specifications  :string;                
  value9specifications        :string;                
  description10specifications :string;                
  value10specifications       :string;                
  description11specifications :string;                
  value11specifications       :string;                
  description12specifications :string;                
  value12specifications       :string;                
  description13specifications :string;                
  value13specifications       :string;                
  description14specifications :string;                
  value14specifications       :string;                
  // salientfeatures
  descriptionsalientfeatures  :string;                
  description2salientfeatures :string;                
  description3salientfeatures :string;                
  description4salientfeatures :string;                
  contentsalientfeatures      :string;  
  imagesalientfeatures:Imagesalientfeaturesipad[] 
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

isFeatured: boolean;
quantity:number
selectedWarranty:any

}


export interface Mouse {
  id: string;
  category: Category8;
  size: Size;
  color: Color;
  images: Imagemouse[];
  descriptionspecifications   :string;                
  valuespecifications         :string;                
  description2specifications  :string;                
  value2specifications        :string;                
  description3specifications  :string;                
  value3specifications        :string;                
  description4specifications  :string;                
  value4specifications        :string;                
  description5specifications  :string;                
  value5specifications        :string;                
  description6specifications  :string;                
  value6specifications        :string;                
  description7specifications  :string;                
  value7specifications        :string;                
  description8specifications  :string;                
  value8specifications        :string;                
  description9specifications  :string;                
  value9specifications        :string;                
  description10specifications :string;                
  value10specifications       :string;                
  description11specifications :string;                
  value11specifications       :string;                
  description12specifications :string;                
  value12specifications       :string;                
  description13specifications :string;                
  value13specifications       :string;                
  description14specifications :string;                
  value14specifications       :string;                
  // salientfeatures
  descriptionsalientfeatures  :string;                
  description2salientfeatures :string;                
  description3salientfeatures :string;                
  description4salientfeatures :string;                
  contentsalientfeatures      :string;  
  imagesalientfeatures:Imagesalientfeaturesmouse[] 
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

isFeatured: boolean;
quantity:number
selectedWarranty:any

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

export interface Image1 {
  id: string;
  url: string;
}

export interface Image2 {
  id: string;
  url: string;
}

export interface Image3 {
  id: string;
  url: string;
}

export interface Image4 {
  id: string;
  url: string;
}

export interface Image5 {
  id: string;
  url: string;
}

export interface Image6 {
  id: string;
  url: string;
}

export interface Image7 {
  id: string;
  url: string;
}

export interface Image8 {
  id: string;
  url: string;
}

export interface Image9 {
  id: string;
  url: string;
}

export interface Image10 {
  id: string;
  url: string;
}

export interface Image11 {
  id: string;
  url: string;
}
export interface Imagelaptop {
  id: string;
  url: string;
}

export interface Imageheadphone {
  id: string;
  url: string;
}

export interface Imageipad {
  id: string;
  url: string;
}

export interface Imagetivi {
  id: string;
  url: string;
}

export interface Imagewatch {
  id: string;
  url: string;
}

export interface Imagemouse{
  id: string;
  url: string;
}


export interface Imagesalientfeaturesproduct {
  id: string;
  url: string;
}

export interface Imagesalientfeaturesproduct1 {
  id: string;
  url: string;
}

export interface Imagesalientfeaturesproduct2 {
  id: string;
  url: string;
}

export interface Imagesalientfeaturesproduct3 {
  id: string;
  url: string;
}

export interface Imagesalientfeaturesproduct4 {
  id: string;
  url: string;
}

export interface Imagesalientfeaturesproduct5 {
  id: string;
  url: string;
}

export interface Imagesalientfeaturesproduct6 {
  id: string;
  url: string;
}

export interface Imagesalientfeaturesproduct7 {
  id: string;
  url: string;
}

export interface Imagesalientfeaturesproduct8 {
  id: string;
  url: string;
}

export interface Imagesalientfeaturesproduct9 {
  id: string;
  url: string;
}

export interface Imagesalientfeaturesproduct10 {
  id: string;
  url: string;
}

export interface Imagesalientfeaturesproduct11 {
  id: string;
  url: string;
}
export interface Imagesalientfeatureslaptop {
  id: string;
  url: string;
}

export interface Imagesalientfeaturestivi {
  id: string;
  url: string;
}

export interface Imagesalientfeaturesheadphone {
  id: string;
  url: string;
}

export interface Imagesalientfeatureswatch {
  id: string;
  url: string;
}

export interface Imagesalientfeaturesipad {
  id: string;
  url: string;
}

export interface Imagesalientfeaturesmouse {
  id: string;
  url: string;
}

//Pacman
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
    
