"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";

type Props = {};

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const path = usePathname();

  useEffect(() => {
    initialize();
  });

  const initialize = () => {
    if (path == "/") {
      router.push("/stock");
      return null;
    }
  };

  return <div>{children}</div>;
}
