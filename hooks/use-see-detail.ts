import {create} from "zustand"


interface useSeeDetailStore{
    isOpen: boolean;
    onOpen: () => void;
    onClose: () =>void
}

const useSeeDetail = create <useSeeDetailStore>((set)=>({
    isOpen: false ,
    onOpen: () =>set({isOpen: true}),
    onClose: () => set({isOpen: false})
}))

export default useSeeDetail
