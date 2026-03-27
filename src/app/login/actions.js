"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Submit(_, formData) {
  const email = formData.get("email");
  const password = formData.get("password");

  if (!email.endsWith("@gmail.com")) {
    return {
      errors: "Email mismatch.",
    };
  }

  if (password !== "Testing123!") {
    return {
      errors: "Incorrect password.",
    };
  }

  const cookieData = await cookies();

  cookieData.set("login", email, {
    httpOnly: true,
  });

  // It succeds
  console.log("Ok");
  redirect("/home");
}
