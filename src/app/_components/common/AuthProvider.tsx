"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { store } from "@/src/store/store";
import { useSelector } from "react-redux";
import { getSession, userSelector } from "@/src/store/slices/userSlice";
import { Box } from "@mui/material";
import Loading from "./Loading";

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
