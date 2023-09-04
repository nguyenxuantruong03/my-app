// Menu.js
import { useState, useEffect } from "react";
import MenuTree from "../slider-item/menutree";
import {
  getCategories,
  getCategories1,
  getCategories2,
  getCategories3,
  getCategories4,
  getCategories5,
  getCategories6,
  getCategories7,
  getCategories8,
  getCategories9,
  getCategories10,
  getCategories11,
} from "@/actions/categories/get-categories";
import {
  Category,
  Category1,
  Category10,
  Category11,
  Category2,
  Category3,
  Category4,
  Category5,
  Category6,
  Category7,
  Category8,
  Category9,
} from "../../types";

const Menu = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [categories1, setCategories1] = useState<Category1[]>([]);
  const [categories2, setCategories2] = useState<Category2[]>([]);
  const [categories3, setCategories3] = useState<Category3[]>([]);
  const [categories4, setCategories4] = useState<Category4[]>([]);
  const [categories5, setCategories5] = useState<Category5[]>([]);
  const [categories6, setCategories6] = useState<Category6[]>([]);
  const [categories7, setCategories7] = useState<Category7[]>([]);
  const [categories8, setCategories8] = useState<Category8[]>([]);
  const [categories9, setCategories9] = useState<Category9[]>([]);
  const [categories10, setCategories10] = useState<Category10[]>([]);
  const [categories11, setCategories11] = useState<Category11[]>([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data1 = await getCategories();
        setCategories(data1);

        const data2 = await getCategories1();
        setCategories1(data2);

        const data3 = await getCategories2();
        setCategories2(data3);

        const data4 = await getCategories3();
        setCategories3(data4);

        const data5 = await getCategories4();
        setCategories4(data5);

        const data6 = await getCategories5();
        setCategories5(data6);

        const data7 = await getCategories6();
        setCategories6(data7);

        const data8 = await getCategories7();
        setCategories7(data8);

        const data9 = await getCategories8();
        setCategories8(data9);

        const data10 = await getCategories9();
        setCategories9(data10);

        const data11 = await getCategories10();
        setCategories10(data11);

        const data12 = await getCategories11();
        setCategories11(data12);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
        <div className=" mx-auto max-w-7xl h-[377px] my-2 mt-[120px] bg-white rounded-md">
          <div className="flex space-x-5">
            <MenuTree
              data={categories}
              categories1={categories1}
              categories2={categories2}
              categories3={categories3}
              categories4={categories4}
              categories5={categories5}
              categories6={categories6}
              categories7={categories7}
              categories8={categories8}
              categories9={categories9}
              categories10={categories10}
              categories11={categories11}
            />
          </div>
        </div>
    </>
  );
};

export default Menu;
