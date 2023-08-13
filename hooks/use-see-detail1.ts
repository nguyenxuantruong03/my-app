import {create} from "zustand"


interface useSeeDetail1Store{
    isOpen: boolean;
    onOpen: () => void;
    onClose: () =>void
}

const useSeeDetail1 = create <useSeeDetail1Store>((set)=>({
    isOpen: false ,
    onOpen: () =>set({isOpen: true}),
    onClose: () => set({isOpen: false})
}))

export default useSeeDetail1
