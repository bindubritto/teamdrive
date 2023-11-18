"use client";
import React from "react";
import Image from 'next/image'
import { useSession } from "next-auth/react";

export default function Home() {

  const { data: session } = useSession();

    if(session && session.user) {
      return (
        <main className="flex min-h-screen flex-col items-center p-24">
          <h1 className=" text-center text-2xl text-black/50 font-medium leading-none tracking-tight sm:text-5xl lg:text-7xl">Welcome back!</h1>
          <p className="text-sky-600">Hi, {session.user.name}!</p>
          <p>Lets make something new!</p>
        </main>
      )
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24">
          <h1 className=" text-center text-3xl text-black/50 font-medium leading-none tracking-tight sm:text-5xl lg:text-7xl">Youstud. lets begin a new Journey 🚀</h1>
        </main>
    )
}
