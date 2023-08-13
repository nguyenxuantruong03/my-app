import {create} from "zustand"


interface useSeeDetail4Store{
    isOpen: boolean;
    onOpen: () => void;
    onClose: () =>void
}

const useSeeDetail4 = create <useSeeDetail4Store>((set)=>({
    isOpen: false ,
    onOpen: () =>set({isOpen: true}),
    onClose: () => set({isOpen: false})
}))

export default useSeeDetail4
