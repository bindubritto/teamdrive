"use client";

import React from "react";
import SigninButton from "./SigninButton";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";


const Appbar = () => {

  const { data: session } = useSession();


  if(session && session.user) {
    return (
      <header className="flex gap-4 p-4 shadow justify-between ">
        <Link className="text-[#5f9ea0] hover:text-sky-400 transition-colors" href={"/"}>
        youstud.
      </Link>
  
        <SigninButton />
      </header>
    );
  }

  return (
    <header className="flex gap-4 p-4 shadow justify-between">
      <Link className="text-[#5f9ea0] hover:text-sky-400 transition-colors" href={"/"}>
        youstud.
      </Link>
      <SigninButton />
    </header>
  );

};

export default Appbar;
