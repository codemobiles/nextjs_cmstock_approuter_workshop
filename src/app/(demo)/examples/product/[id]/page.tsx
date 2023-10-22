import React from "react";

type Props = {
  params: { id: string };
};

export default function Product({ params }: Props) {
  return <div>Product: {params.id}</div>;
}
