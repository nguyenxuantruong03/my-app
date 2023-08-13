import {create} from "zustand"


interface useSeeDetail3Store{
    isOpen: boolean;
    onOpen: () => void;
    onClose: () =>void
}

const useSeeDetail3 = create <useSeeDetail3Store>((set)=>({
    isOpen: false ,
    onOpen: () =>set({isOpen: true}),
    onClose: () => set({isOpen: false})
}))

export default useSeeDetail3
