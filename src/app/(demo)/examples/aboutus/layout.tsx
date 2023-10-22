import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function AboutUsLayout({ children }: Props) {
  return (
    <div>
      <h4>Section</h4>
      {children}
    </div>
  );
}
