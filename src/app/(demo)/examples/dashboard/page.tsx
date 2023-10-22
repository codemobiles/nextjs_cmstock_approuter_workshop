"use client";

import { useRouter } from "next/navigation";
import React from "react";

type Props = {
  searchParams: {
    id?: string;
    type?: string;
  };
};

export default function Dashboard({ searchParams }: Props) {
  const router = useRouter();

  return (
    <div>
      <b>Dashboard</b>
      <br />
      id: {searchParams.id}, type: {searchParams.type}
      <br />
      <button onClick={() => router.push("/examples/aboutus")}>ABOUT US</button>
    </div>
  );
}
