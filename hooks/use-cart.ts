import { Product,Product1,Product10,Product11,Product2,Product3,Product4,Product5,Product6,Product7,Product8,Product9 } from "@/types";
import toast from "react-hot-toast";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export type ProductUnion =  Product | Product1 | Product2 | Product3 |Product4 |Product5| Product6 | Product7 |Product8 |Product9 | Product10 | Product11;


interface CartStore {
  items: ProductUnion[];
  userId: string | null;
  addItem: (data: ProductUnion, quantity: number,userId:any) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
  updateQuantity: (id: string, quantity: number) => void;
  selectedItems: string[]; // Array of selected item IDs
  selectAll: boolean; // Flag for "Select All" checkbox
  toggleSelectItem: (id: string) => void; // New method for toggling item selection
  toggleSelectAll: () => void; // New method for toggling "Select All" checkbox
  updateWarrantyOption: (id: string, warrantyOption: string) => void;
  getSelectedItemWarranty: (id: string) => string | null;
  selectedWarranties: Record<string, string | null>;
  removeSelectedItems: () => void;
}

const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
       userId: null,
      selectedItems: [], // Initialize with an empty array
      selectAll: false, // Initialize as false
      selectedWarranties: {},
      updateWarrantyOption: (id: string, warrantyOption: string | null) => {
        set((state) => ({
          items: state.items.map((item) =>
            item.id === id ? { ...item, selectedWarranty: warrantyOption } : item
          ),
          selectedWarranties: {
            ...state.selectedWarranties,
            [id]: warrantyOption,
          },
        }));
      },

      getSelectedItemWarranty: (id: string) => {
        return get().selectedWarranties[id] || null;
      },
      // Toggle the selection of an individual item
      toggleSelectItem: (id: string) => {
        set((state) => {
          const isSelected = state.selectedItems.includes(id);
          const updatedSelectedItems = isSelected
            ? state.selectedItems.filter((itemId) => itemId !== id)
            : [...state.selectedItems, id];
      
          return {
            selectedItems: updatedSelectedItems,
            selectAll: updatedSelectedItems.length === state.items.length,
          };
        });
      },
      // Toggle the "Select All" checkbox
      toggleSelectAll: () => {
        set((state) => {
          const updatedSelectedItems = state.selectAll
            ? []
            : state.items.map((item) => item.id);
      
          return {
            selectedItems: updatedSelectedItems,
            selectAll: !state.selectAll,
          };
        });
      },
      
      addItem: (data: ProductUnion, quantity: number,userId:any) => {
        const currentUserCart = get().items.filter(item => item.userId === userId);
        const existingItem = currentUserCart.find((item) => item.id === data.id);

    
        if (existingItem) {
          // Update the quantity of the existing item
          const updatedItems = currentUserCart.map((item) =>
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
      removeSelectedItems: () => {
        set((state) => ({
          items: state.items.filter((item) => !state.selectedItems.includes(item.id)),
          selectedItems: [],
          selectedWarranties: {}, // Clear selected warranties for removed items
        }));
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