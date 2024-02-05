import {create} from "zustand"

import {Product, Product1, Product10, Product11, Product2, Product3, Product4, Product5, Product6, Product7, Product8, Product9 } from "@/types";

interface PreviewModalStore{
    isOpen: boolean;
    data?: Product | Product1 |Product2 |Product3 | Product4 |Product5 |Product6 |Product7 |Product8 |Product9 |Product10 |Product11;
    onOpen: (data: Product | Product1 |Product2 |Product3 | Product4 |Product5 |Product6 |Product7 |Product8 |Product9 |Product10 |Product11) => void;
    onClose: () =>void
}

const usePreviewModal = create <PreviewModalStore>((set)=>({
    isOpen: false ,
    data:undefined,
    onOpen: (data: Product | Product1 |Product2 |Product3 | Product4 |Product5 |Product6 |Product7 |Product8 |Product9 |Product10 |Product11) =>set({data, isOpen: true}),
    onClose: () => set({isOpen: false})
}))

export default usePreviewModal
