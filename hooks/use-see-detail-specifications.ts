import {create} from "zustand"


interface useSeeDetailSpecificationsStore{
    isOpen: boolean;
    onOpen: () => void;
    onClose: () =>void
}

const useSeeDetailSpecifications = create <useSeeDetailSpecificationsStore>((set)=>({
    isOpen: false ,
    onOpen: () =>set({isOpen: true}),
    onClose: () => set({isOpen: false})
}))

export default useSeeDetailSpecifications
