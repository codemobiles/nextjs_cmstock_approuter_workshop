"use client";
export const dynamic = "force-dynamic";
import * as React from "react";
import Box from "@mui/material/Box";
import Header from "../_components/layout/Header";
import Sidebar from "../_components/layout/Sidebar";
import DrawerHeader from "../_components/layout/DrawerHeader";

type Props = { children: React.ReactNode };

export default function DefaultLayout({
  children, // will be a page or nested layout
}: Props) {
  return (
    <section>
      <Box sx={{ display: "flex" }}>
        <Header />
        <Sidebar />

        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          {children}
        </Box>
      </Box>
    </section>
  );
}
