"use client"
import ErrorComponent from "@/components/ui/error";
import { useRouter } from "next/navigation";

const ErrorPage = () => {
  const router = useRouter()
  const resetFunction = () => {
    router.refresh();
  };

  return (
    <>
      <ErrorComponent reset={resetFunction} />
    </>
  );
};

export default ErrorPage;
