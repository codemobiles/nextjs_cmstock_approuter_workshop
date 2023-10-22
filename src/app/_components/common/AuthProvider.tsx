"use client";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {};

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  router.push("/stock");
  return null;

  // return <div>{children}</div>;
}
