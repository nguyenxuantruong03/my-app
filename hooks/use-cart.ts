import { Headphone, Ipad, Laptop, Mouse, Product,Product1,Product10,Product11,Product2,Product3,Product4,Product5,Product6,Product7,Product8,Product9, Tivi, Watch } from "@/types";
import toast from "react-hot-toast";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export type ProductUnion = Product | Product1 | Product2 | Product3 |Product4 |Product5| Product6 | Product7 |Product8 |Product9 | Product10 | Product11| Ipad | Laptop | Headphone | Tivi | Watch | Mouse;

interface CartStore {
  items: ProductUnion[];
  addItem: (data: ProductUnion) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
}

const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      addItem: (data: ProductUnion) => {
        const currentItem = get().items;
        const existingItem = currentItem.find((item) => item.id === data.id);

        if (existingItem) {
          return toast("Sản phẩm đã thêm vào giỏ hàng");
        }

        set({ items: [...get().items, data] });
        toast.success("Sản phẩm thêm thành công");
      },
      removeItem: (id: string) => {
        set({ items: [...get().items.filter((item) => item.id !== id)] });
        toast.success("Sản phẩm đã xóa khỏi giỏ hàng.");
      },
      removeAll: () => set({ items: [] }),
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCart;

