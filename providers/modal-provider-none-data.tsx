"use client";
import WarningModal from "@/components/modal/see-warning-model5";
import DangerModal from "@/components/modal/see-danger-model6";
import { useEffect, useState } from "react";
import WarningSpinModal from "@/components/modal/see-warning-spin-model7";

const ModalProviderNoneData = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <WarningModal />
      <DangerModal />
      <WarningSpinModal />
    </>
  );
};

export default ModalProviderNoneData;
