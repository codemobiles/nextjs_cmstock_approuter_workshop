"use client";
import React, { useEffect } from "react";
import { store } from "@/src/store/store";
import { getSession } from "@/src/store/slices/userSlice";

type Props = {};

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    store.dispatch(getSession());
  }, []);

  return <div>{children}</div>;
}
