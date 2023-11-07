"use client"
import './listproduct.css';
import { useState, useEffect } from "react";
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
} from "@/types";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";
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
  const [selectedTab, setSelectedTab] = useState('home');
  
  const handleTabChange = (tabId: string) => {
    setSelectedTab(tabId);
  };
  const pathname = usePathname()
  const categories0 = categories.map((route) =>({
    href:`/category/${route.name}`,
    label: route.name,
    active: pathname === `/category/${route.name}`
  }))
  const categories01 = categories1.map((categories) =>({
    href:`/category1/${categories.name}`,
    label: categories.name,
    active: pathname === `/category1/${categories.name}`
  }))
  const categories02 = categories2.map((categories) =>({
    href:`/category2/${categories.name}`,
    label: categories.name,
    active: pathname === `/category2/${categories.name}`
  }))
  const categories03 = categories3.map((categories) =>({
    href:`/category3/${categories.name}`,
    label: categories.name,
    active: pathname === `/category3/${categories.name}`
  }))
  const categories04 = categories4.map((categories) =>({
    href:`/category4/${categories.name}`,
    label: categories.name,
    active: pathname === `/category4/${categories.name}`
  }))
  const categories05 = categories5.map((categories) =>({
    href:`/category5/${categories.name}`,
    label: categories.name,
    active: pathname === `/category5/${categories.name}`
  }))
  const categories06 = categories6.map((categories) =>({
    href:`/category6/${categories.name}`,
    label: categories.name,
    active: pathname === `/category6/${categories.name}`
  }))
  const categories07 = categories7.map((categories) =>({
    href:`/category7/${categories.name}`,
    label: categories.name,
    active: pathname === `/category7/${categories.name}`
  }))
  const categories08 = categories8.map((categories) =>({
    href:`/category8/${categories.name}`,
    label: categories.name,
    active: pathname === `/category8/${categories.name}`
  }))
  const categories09 = categories9.map((categories) =>({
    href:`/category9/${categories.name}`,
    label: categories.name,
    active: pathname === `/category9/${categories.name}`
  }))
  const categories010 = categories10.map((categories) =>({
    href:`/category10/${categories.name}`,
    label: categories.name,
    active: pathname === `/category10/${categories.name}`
  }))
  const categories011 = categories11.map((categories) =>({
    href:`/category11/${categories.name}`,
    label: categories.name,
    active: pathname === `/category11/${categories.name}`
  }))
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
        <div className="maintab md:hidden">
      <div className="containerr">
        <div className="content grid grid-cols-2">
          <input
            type="radio"
            name="slider"
            checked={selectedTab === 'home'}
            id="home"
            onChange={() => handleTabChange('home')}
          />
          <input
            type="radio"
            name="slider"
            checked={selectedTab === 'blog'}
            id="blog"
            onChange={() => handleTabChange('blog')}
          />
          <input
            type="radio"
            name="slider"
            checked={selectedTab === 'help'}
            id="help"
            onChange={() => handleTabChange('help')}
          />
          <input
            type="radio"
            name="slider"
            checked={selectedTab === 'code'}
            id="code"
            onChange={() => handleTabChange('code')}
          />
          <input
            type="radio"
            name="slider"
            checked={selectedTab === 'about'}
            id="about"
            onChange={() => handleTabChange('about')}
          />
          <input
            type="radio"
            name="slider"
            checked={selectedTab === 'category'}
            id="category"
            onChange={() => handleTabChange('category')}
          />
          <input
            type="radio"
            name="slider"
            checked={selectedTab === 'category1'}
            id="category1"
            onChange={() => handleTabChange('category1')}
          />
          <input
            type="radio"
            name="slider"
            checked={selectedTab === 'category2'}
            id="category2"
            onChange={() => handleTabChange('category2')}
          />
          <input
            type="radio"
            name="slider"
            checked={selectedTab === 'category3'}
            id="category3"
            onChange={() => handleTabChange('category3')}
          />
          <input
            type="radio"
            name="slider"
            checked={selectedTab === 'category4'}
            id="category4"
            onChange={() => handleTabChange('category4')}
          />
          <input
            type="radio"
            name="slider"
            checked={selectedTab === 'category5'}
            id="category5"
            onChange={() => handleTabChange('category5')}
          />
           <input
            type="radio"
            name="slider"
            checked={selectedTab === 'category6'}
            id="category6"
            onChange={() => handleTabChange('category6')}
          />

          <div className="list">
            <label htmlFor="home" className="home">
              <span className="text-base">Pin</span>
            </label>
            <label htmlFor="blog" className="blog">
              <span className="text-base">Quạt</span>
            </label>
            <label htmlFor="help" className="help">
              <span className="text-base">Ống</span>
            </label>
            <label htmlFor="code" className="code">
              <span className="text-base">Dây điện</span>
            </label>
            <label htmlFor="about" className="about">
              <span className="text-base">Đá cắt</span>
            </label>
            <label htmlFor="category" className="category">
              <span className="text-base">Ổ khóa</span>
            </label>
            <label htmlFor="category1" className="category1">
              <span className="text-base">Keo</span>
            </label>
            <label htmlFor="category2" className="category2">
              <span className="text-base">Ổ cắm</span>
            </label>
            <label htmlFor="category3" className="category3">
              <span className="text-base">Sơn</span>
            </label>
            <label htmlFor="category4" className="category4">
              <span className="text-base">VL Nhà tắm</span>
            </label>
            <label htmlFor="category5" className="category5">
              <span className="text-base">Bóng đèn</span>
            </label>
            <label htmlFor="category6" className="category6">
              <span className="text-base">Thường dùng</span>
            </label>
            <div className="slider"></div>
          </div>

          <div className="text-content">
            <div className={`home text ${selectedTab === 'home' ? 'active' : ''}`}>
            <div className="grid grid-rows-1 space-y-3 py-2 bg-black rounded-md">
                {categories0.map((categories) => (
                    <Link
                      key={categories.href}
                      href={categories.href}
                      className={cn(
                        "text-sm font-medium transition-colors hover:text-red-300 p-1",
                        categories.active ? "text-red-300 font-medium" : "text-white font-medium"
                      )}
                    >
                      {categories.label}
                    </Link>
                  ))}
                </div>
            </div>
            <div className={`blog text ${selectedTab === 'blog' ? 'active' : ''}`}>
            <div className="grid grid-rows-1 space-y-3 py-2 bg-black rounded-md">
                {categories01.map((categories) => (
                    <Link
                      key={categories.href}
                      href={categories.href}
                      className={cn(
                        "text-sm font-medium transition-colors hover:text-red-300 p-1",
                        categories.active ? "text-red-300 font-medium" : "text-white font-medium"
                      )}
                    >
                      {categories.label}
                    </Link>
                  ))}
                </div>
            </div>
            <div className={`help text ${selectedTab === 'help' ? 'active' : ''}`}>
            <div className="grid grid-cols-1 space-y-3 py-2 bg-black rounded-md">
                {categories02.map((categories) => (
                    <Link
                      key={categories.href}
                      href={categories.href}
                      className={cn(
                        "text-sm font-medium transition-colors hover:text-red-300 p-1",
                        categories.active ? "text-red-300 font-medium" : "text-white font-medium"
                      )}
                    >
                      {categories.label}
                    </Link>
                  ))}
                </div>
            </div>
            <div className={`code text ${selectedTab === 'code' ? 'active' : ''}`}>
            <div className="grid grid-rows-1 space-y-3 py-2 bg-black rounded-md">
                {categories03.map((categories) => (
                    <Link
                      key={categories.href}
                      href={categories.href}
                      className={cn(
                        "text-sm font-medium transition-colors hover:text-red-300 p-1",
                        categories.active ? "text-red-300 font-medium" : "text-white font-medium"
                      )}
                    >
                      {categories.label}
                    </Link>
                  ))}
                </div>
            </div>
            <div className={`about text ${selectedTab === 'about' ? 'active' : ''}`}>
            <div className="grid grid-rows-1 space-y-3 py-2 bg-black rounded-md">
                {categories04.map((categories) => (
                    <Link
                      key={categories.href}
                      href={categories.href}
                      className={cn(
                        "text-sm font-medium transition-colors hover:text-red-300 p-1",
                        categories.active ? "text-red-300 font-medium" : "text-white font-medium"
                      )}
                    >
                      {categories.label}
                    </Link>
                  ))}
                </div>
            </div>
            <div className={`category text ${selectedTab === 'category' ? 'active' : ''}`}>
            <div className="grid grid-rows-1 space-y-3 py-2 bg-black rounded-md">
                {categories05.map((categories) => (
                    <Link
                      key={categories.href}
                      href={categories.href}
                      className={cn(
                        "text-sm font-medium transition-colors hover:text-red-300 p-1",
                        categories.active ? "text-red-300 font-medium" : "text-white font-medium"
                      )}
                    >
                      {categories.label}
                    </Link>
                  ))}
                </div>
            </div>
            <div className={`category1 text ${selectedTab === 'category1' ? 'active' : ''}`}>
            <div className="grid grid-rows-1 space-y-3 py-2 bg-black rounded-md">
                {categories06.map((categories) => (
                    <Link
                      key={categories.href}
                      href={categories.href}
                      className={cn(
                        "text-sm font-medium transition-colors hover:text-red-300 p-1",
                        categories.active ? "text-red-300 font-medium" : "text-white font-medium"
                      )}
                    >
                      {categories.label}
                    </Link>
                  ))}
                </div>
            </div>
            <div className={`category2 text ${selectedTab === 'category2' ? 'active' : ''}`}>
            <div className="grid grid-rows-1 space-y-3 py-2 bg-black rounded-md">
                {categories07.map((categories) => (
                    <Link
                      key={categories.href}
                      href={categories.href}
                      className={cn(
                        "text-sm font-medium transition-colors hover:text-red-300 p-1",
                        categories.active ? "text-red-300 font-medium" : "text-white font-medium"
                      )}
                    >
                      {categories.label}
                    </Link>
                  ))}
                </div>
            </div>
            <div className={`category3 text ${selectedTab === 'category3' ? 'active' : ''}`}>
            <div className="grid grid-rows-1 space-y-3 py-2 bg-black rounded-md">
                {categories08.map((categories) => (
                    <Link
                      key={categories.href}
                      href={categories.href}
                      className={cn(
                        "text-sm font-medium transition-colors hover:text-red-300 p-1",
                        categories.active ? "text-red-300 font-medium" : "text-white font-medium"
                      )}
                    >
                      {categories.label}
                    </Link>
                  ))}
                </div>
            </div>
            <div className={`category4 text ${selectedTab === 'category4' ? 'active' : ''}`}>
            <div className="grid grid-rows-1 space-y-3 py-2 bg-black rounded-md">
                {categories09.map((categories) => (
                    <Link
                      key={categories.href}
                      href={categories.href}
                      className={cn(
                        "text-sm font-medium transition-colors hover:text-red-300 p-1",
                        categories.active ? "text-red-300 font-medium" : "text-white font-medium"
                      )}
                    >
                      {categories.label}
                    </Link>
                  ))}
                </div>
            </div>
            <div className={`category5 text ${selectedTab === 'category5' ? 'active' : ''}`}>
            <div className="grid grid-rows-1 space-y-3 py-2 bg-black rounded-md">
                {categories010.map((categories) => (
                    <Link
                      key={categories.href}
                      href={categories.href}
                      className={cn(
                        "text-sm font-medium transition-colors hover:text-red-300 p-1",
                        categories.active ? "text-red-300 font-medium" : "text-white font-medium"
                      )}
                    >
                      {categories.label}
                    </Link>
                  ))}
                </div>
            </div>
            <div className={`category6 text ${selectedTab === 'category6' ? 'active' : ''}`}>
            <div className="grid grid-rows-1 space-y-3 py-2 bg-black rounded-md">
                {categories011.map((categories) => (
                    <Link
                      key={categories.href}
                      href={categories.href}
                      className={cn(
                        "text-sm font-medium transition-colors hover:text-red-300 p-1",
                        categories.active ? "text-red-300 font-medium" : "text-white font-medium"
                      )}
                    >
                      {categories.label}
                    </Link>
                  ))}
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Menu;
