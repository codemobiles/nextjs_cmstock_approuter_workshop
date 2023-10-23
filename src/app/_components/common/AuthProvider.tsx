"use client";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

type Props = {};

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const path = usePathname();
  if (path == "/") {
    router.push("/stock");
    return;
  }

  return <div>{children}</div>;
}
