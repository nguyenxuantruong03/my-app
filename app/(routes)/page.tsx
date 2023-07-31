"use client"

import ProductList from "@/components/product/product-list/product-list";
import ProductListSingnle from "@/components/product/product-list-single/product-list-single";


export default function HomePage() {
  return (
    <div className="mx-auto max-w-7xl">
      
       <div className="my-14 ">
        <h1 className="my-7 font-bold text-3xl">Test</h1>
      <div className="h-[800px] ">
        <ProductList />
      </div>
      </div>

      <div className="my-14 ">
        <h1 className="my-7 font-bold text-3xl">Test</h1>
      <div className="h-[800px] ">
        <ProductList />
      </div>
      </div>

      <div className="my-14 ">
        <h1 className="my-7 font-bold text-3xl">Test</h1>
      <div className="h-[400px] bg-gray-500 ">
        <ProductListSingnle />
      </div>
      </div>

      <div className="my-14">
        <h1 className="my-7 font-bold text-3xl">Test</h1>
      <div className="h-[800px] ">
        <ProductList />
      </div>
      </div>

      <div className="my-14">
        <h1 className="my-7 font-bold text-3xl">Test</h1>
      <div className="h-[800px] ">
        <ProductList />
      </div>
      </div>

    </div>
  )
}
