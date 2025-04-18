"use client";

export function getTokenFromClient() {
  if (typeof window === "undefined") return null;
  const cookies = document.cookie.split("; ");
  const token = cookies.find((c) => c.startsWith("token="));
  return token?.split("=")[1] ?? null;
}
