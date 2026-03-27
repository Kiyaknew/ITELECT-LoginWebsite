"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Submit(_, formData) {
  const username = formData.get("username");
  const password = formData.get("password");

  if (!username || username.length < 3) {
    return {
      errors: "Username must be at least 3 characters long.",
    };
  }

  if (password !== "adriangreen") {
    return {
      errors: "Incorrect password.",
    };
  }

  const cookieData = await cookies();

  cookieData.set("login", username, {
    httpOnly: true,
  });

  console.log("Login Successful");
  redirect("/home");
}
