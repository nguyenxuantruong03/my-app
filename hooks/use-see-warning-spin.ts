import {create} from "zustand"


interface useSeeWarningSpinStore{
    isOpen: boolean;
    onOpen: () => void;
    onClose: () =>void
}

const useSeeWarningSpin= create <useSeeWarningSpinStore>((set)=>({
    isOpen: false ,
    onOpen: () =>set({isOpen: true}),
    onClose: () => set({isOpen: false})
}))

export default useSeeWarningSpin
