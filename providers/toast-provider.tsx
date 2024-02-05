"use client"

import PreviewModal from "@/components/modal/preview.modal";
import { Toaster } from "react-hot-toast";

const ToastProvider = () => {
    return ( 
        <>
        <div className="z-[9999]">
        <Toaster />
        </div>
        <PreviewModal />
      </>
     );
}

export default ToastProvider;