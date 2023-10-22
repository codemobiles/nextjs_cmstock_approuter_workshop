"use client";

import { useRouter } from "next/navigation";
import React from "react";

type Props = {};

export default function Dashboard({}: Props) {
  const router = useRouter();

  return (
    <div>
      <b>Dashboard</b>
      <br />
      <button onClick={() => router.push("/examples/aboutus")}>ABOUT US</button>
    </div>
  );
}
