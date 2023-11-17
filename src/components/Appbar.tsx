"use client";

import React from "react";
import SigninButton from "./SigninButton";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";


const Appbar = () => {

  const { data: session } = useSession();


  if(session && session.user) {
    return (
      <header className="flex gap-4 p-4 bg-gradient-to-b from-white to-gray-200 shadow ">
        <Link className="text-gray-800 hover:text-sky-400 transition-colors" href={"/"}>
          Home
        </Link>
        <Link className="text-gray-800 hover:text-sky-400 transition-colors" href={"/profile"}>
          User Profile
        </Link>
        <Link className="text-gray-800 hover:text-sky-400 transition-colors" href={"/admin"}>
          Admin Dashboard
        </Link>
  
        <SigninButton />
      </header>
    );
  }

  return (
    <header className="flex gap-4 p-4 bg-gradient-to-b from-white to-gray-200 shadow ">
      <Link className="text-gray-800 hover:text-sky-400 transition-colors" href={"/"}>
        Home
      </Link>
      <SigninButton />
    </header>
  );

};

export default Appbar;
