import { Headphone, Ipad, Laptop, Mouse,Product,Product1,Product10,Product11,Product2,Product3,Product4,Product5,Product6,Product7,Product8,Product9, Tivi, Watch } from "@/types";
import toast from "react-hot-toast";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export type ProductUnion =  Product | Product1 | Product2 | Product3 |Product4 |Product5| Product6 | Product7 |Product8 |Product9 | Product10 | Product11| Ipad | Laptop | Headphone | Tivi | Watch | Mouse;

interface CartStore {
  items: ProductUnion[];
  addItem: (data: ProductUnion, quantity: number) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
  updateQuantity: (id: string, quantity: number) => void;
   selectedItems: string[]; // Array of selected item IDs
  selectAll: boolean; // Flag for "Select All" checkbox
  toggleSelectItem: (id: string) => void; // New method for toggling item selection
  toggleSelectAll: () => void; // New method for toggling "Select All" checkbox
}

const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      selectedItems: [], // Initialize with an empty array
      selectAll: false, // Initialize as false
      // ... other methods ...

      // Toggle the selection of an individual item
      toggleSelectItem: (id: string) => {
        set((state) => {
          const isSelected = state.selectedItems.includes(id);
          const updatedSelectedItems = isSelected
            ? state.selectedItems.filter((itemId) => itemId !== id)
            : [...state.selectedItems, id];

          return { selectedItems: updatedSelectedItems };
        });
      },

      // Toggle the "Select All" checkbox
      toggleSelectAll: () => {
        set((state) => ({
          selectedItems: state.selectAll ? [] : state.items.map((item) => item.id),
          selectAll: !state.selectAll,
        }));
      },
      addItem: (data: ProductUnion, quantity: number) => {
        const currentItem = get().items;
        const existingItem = currentItem.find((item) => item.id === data.id);
    
        if (existingItem) {
          // Update the quantity of the existing item
          const updatedItems = currentItem.map((item) =>
            item.id === existingItem.id ? { ...item, quantity: item.quantity + quantity } : item
          );
    
          set({ items: updatedItems });
          toast.success("Sản phẩm đã được cập nhật số lượng trong giỏ hàng.");
        } else {
          // Add the new item to the cart
          set({ items: [...get().items, { ...data, quantity }] });
          toast.success("Sản phẩm đã thêm vào giỏ hàng.");
        }
        
      },
      updateQuantity: (id: string, quantity: number) => {
        set((state) => ({
          items: state.items.map((item) =>
            item.id === id ? { ...item, quantity } : item
          ),
        }));
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

