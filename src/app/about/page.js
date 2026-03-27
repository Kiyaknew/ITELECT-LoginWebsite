"use client";

import { useRouter } from "next/navigation";

export default function AboutPage() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1 className="text-4xl font-bold">About Us</h1>
      <h1 className="text-2xl">Erika Dirilo: Login Designer </h1>
      <h1 className="text-2xl">Mika Madrigal: Home Page Designer </h1>
      <h1 className="text-2xl">Zeane Capuy: About Page Designer </h1>

      <button 
        onClick={() => router.back()}
        className="outline outline-1 outline-white mt-4 px-4 py-2 bg-black text-white rounded-md hover:opacity-80 transition-opacity"
      >
        Go Back
      </button>
    </div>
  );
}
