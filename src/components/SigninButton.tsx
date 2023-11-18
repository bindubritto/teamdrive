"use client";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "@/components/ui/button"
import Image from "next/image";




const SigninButton = () => {
  const { data: session } = useSession();

  if (session && session.user) {
    return (
      <div className="flex gap-4 ml-auto items-center">
        <Button onClick={() => signOut()} className="">Sign Out</Button>
      </div>
    );
  }
  return (
    <Button onClick={() => signIn()} className="">Sign In</Button>
  );
};

export default SigninButton;
