"use client";
import React from "react";
import Image from 'next/image'
import { useSession } from "next-auth/react";

export default function Home() {

  const { data: session } = useSession();

    if(session && session.user) {
      return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          Welcome to YouStud School
        </main>
      )
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          YouStud School Landing Page
        </main>
    )
}
