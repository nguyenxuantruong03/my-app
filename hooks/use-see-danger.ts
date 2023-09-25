import {create} from "zustand"


interface useSeeDangerStore{
    isOpen: boolean;
    onOpen: () => void;
    onClose: () =>void
}

const useSeeDanger= create <useSeeDangerStore>((set)=>({
    isOpen: false ,
    onOpen: () =>set({isOpen: true}),
    onClose: () => set({isOpen: false})
}))

export default useSeeDanger
