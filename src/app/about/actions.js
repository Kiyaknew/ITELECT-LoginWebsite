"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function Logout() {
  const cookieData = await cookies();
  cookieData.delete("login");

  redirect("/");
}
