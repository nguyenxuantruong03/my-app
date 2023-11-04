"use client"
import { SignIn } from "@clerk/nextjs";
import { useEffect, useState } from "react";

const SignInPage = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return null;
  }
  return <SignIn />
}

export default SignInPage;