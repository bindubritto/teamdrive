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
        <p className="text-sky-600">{session.user.name}</p>
        <Image
          src={session.user.image ?? ""}
          alt={session.user.name ?? ""}
          className=" rounded-full"
          width={32}
          height={32}
        />

        <Button onClick={() => signOut()} className="text-red-600 bg-white">Sign Out</Button>
      </div>
    );
  }
  return (
    <Button onClick={() => signIn()} className="text-green-600 ml-auto bg-white">Sign In</Button>
  );
};

export default SigninButton;
