import {create} from "zustand"


interface useSeeDetail2Store{
    isOpen: boolean;
    onOpen: () => void;
    onClose: () =>void
}

const useSeeDetail2 = create <useSeeDetail2Store>((set)=>({
    isOpen: false ,
    onOpen: () =>set({isOpen: true}),
    onClose: () => set({isOpen: false})
}))

export default useSeeDetail2
