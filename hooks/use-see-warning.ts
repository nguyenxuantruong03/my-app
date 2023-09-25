import {create} from "zustand"


interface useSeeWarningStore{
    isOpen: boolean;
    onOpen: () => void;
    onClose: () =>void
}

const useSeeWarning= create <useSeeWarningStore>((set)=>({
    isOpen: false ,
    onOpen: () =>set({isOpen: true}),
    onClose: () => set({isOpen: false})
}))

export default useSeeWarning
