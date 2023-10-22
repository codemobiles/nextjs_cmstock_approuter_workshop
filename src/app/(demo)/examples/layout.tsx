import Link from "next/link";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function ExamplesLayout({ children }: Props) {
  return (
    <div>
      <nav>
        {/* <a href="/examples/dashboard/">Dashboard</a> |
        <a href="/examples/aboutus/"> AboutUs</a> */}
        <Link href="/examples/dashboard/">Dashboard</Link> |
        <Link href="/examples/aboutus/">AboutUs</Link>
      </nav>
      {children}
    </div>
  );
}
