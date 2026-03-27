"use client";

import { useRouter } from "next/navigation";

export default function AboutPage() {
  const router = useRouter();

  return (
    <div>
      <h1>About Us</h1>
      <h1>Learn More</h1>

      <button onClick={() => router.back()}>
        Go Back
      </button>
    </div>
  );
}