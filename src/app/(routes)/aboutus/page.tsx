import React from "react";

type Props = {};

export default async function AboutUS({}: Props) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return <div>AboutUS</div>;
}
