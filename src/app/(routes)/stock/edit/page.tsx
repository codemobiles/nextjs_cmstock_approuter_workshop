import { Box, Button, TextField } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useAppDispatch } from "@/store/store";

import { useForm, Controller } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { ProductData } from "@/src/models/product.model";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { doGetStockById } from "@/src/services/serverService";
import StockEditForm from "./StockEditForm";
import { Metadata, ResolvingMetadata } from "next";
import { productImageURL } from "@/src/utils/commonUtil";

const formValidateSchema = Yup.object().shape({
  name: Yup.string().required("Name is required").trim(),
  price: Yup.number().min(100, "Number must be greater than 100"),
  stock: Yup.number().min(100, "Number must be greater than 100"),
});

type Props = {
  searchParams: {
    id?: string;
  };
};

export async function generateMetadata(
  { searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  let product = {} as ProductData;

  if (searchParams.id) {
    product = await doGetStockById(searchParams.id);
  }

  return {
    title: product.name ?? "StockEdit",
    openGraph: {
      title: product.name,
      description: product.name + "price: " + product.price,
      url: "https://nextjs.org",
      siteName: "Next.js",
      images: [
        {
          url: productImageURL(product.image),
          width: 800,
          height: 600,
        },
        {
          url: "https://nextjs.org/og-alt.png",
          width: 1800,
          height: 1600,
          alt: "My custom alt",
        },
      ],
      locale: "en_US",
      type: "website",
    },
  };
}

export default async function StockEdit({ searchParams }: Props) {
  let product = {} as ProductData;
  if (searchParams.id) {
    product = await doGetStockById(searchParams.id);
    console.log("ssr fetch edit" + JSON.stringify(product));
  }

  return (
    <div>
      <StockEditForm product={product}></StockEditForm>
    </div>
  );
}
