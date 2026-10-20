"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function login(
  _prevState: { error?: string } | undefined,
  formData: FormData,
): Promise<{ error?: string }> {
  const password = formData.get("password");
  const validSecret = process.env.ADMIN_SECRET_KEY;

  if (!validSecret) {
    return { error: "Admin access is not configured on the server." };
  }

  if (typeof password !== "string" || password !== validSecret) {
    return { error: "Incorrect password." };
  }

  const cookieStore = await cookies();
  cookieStore.set("admin_session", validSecret, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 8, // 8 hours
  });

  redirect("/admin/logs");
}

export async function logout() {
  const cookieStore = await cookies();
  cookieStore.delete("admin_session");
  redirect("/admin/login");
}
