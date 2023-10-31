"use client";
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
import { productImageURL } from "@/src/utils/commonUtil";
import { editProduct } from "@/src/store/slices/productSlice";

const formValidateSchema = Yup.object().shape({
  name: Yup.string().required("Name is required").trim(),
  price: Yup.number().min(100, "Number must be greater than 100"),
  stock: Yup.number().min(100, "Number must be greater than 100"),
});

type Props = {
  product: ProductData;
};

export default function StockEditForm({ product }: Props) {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const onSubmit = async (values: ProductData) => {
    const result = await dispatch(editProduct(values));
    if (result.meta.requestStatus == "fulfilled") {
      router.push("/stock");
    } else {
      alert("Add failed");
    }
  };

  const {
    control,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<ProductData>({
    defaultValues: product,
    //@ts-ignore
    resolver: yupResolver(formValidateSchema),
  });

  const watchPreviewImage = watch("file_obj");

  const showPreviewImage = () => {
    if (watchPreviewImage) {
      return (
        <Image
          alt="product image"
          src={watchPreviewImage.toString()}
          width={100}
          height={100}
          style={{
            objectFit: "contain",
          }}
        />
      );
    } else if (product.image) {
      return (
        <Image
          key={product.image}
          alt="product image"
          src={productImageURL(product.image)}
          width={100}
          height={100}
          style={{
            objectFit: "contain",
          }}
        />
      );
    }
  };

  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)}>
      <Card>
        <CardContent className="p-8">
          <Typography gutterBottom variant="h3">
            Edit Product
          </Typography>

          <Controller
            name="name"
            control={control}
            render={({ field }) => {
              return (
                <TextField
                  {...field}
                  label="Name"
                  error={Boolean(errors.name?.message)}
                  helperText={errors.name?.message?.toString()}
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  autoFocus
                />
              );
            }}
          ></Controller>

          <Controller
            name="price"
            control={control}
            render={({ field }) => {
              return (
                <TextField
                  {...field}
                  label="Price"
                  type="number"
                  error={Boolean(errors.price?.message)}
                  helperText={errors.price?.message?.toString()}
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  autoFocus
                />
              );
            }}
          />

          <Controller
            name="stock"
            control={control}
            render={({ field }) => {
              return (
                <TextField
                  {...field}
                  type="number"
                  label="Stock"
                  error={Boolean(errors.stock?.message)}
                  helperText={errors.stock?.message?.toString()}
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  autoFocus
                />
              );
            }}
          />

          <Box>{showPreviewImage()}</Box>

          <TextField
            className="mt-4"
            type="file"
            fullWidth
            onChange={(e: React.ChangeEvent<any>) => {
              e.preventDefault();
              setValue("file", e.target.files[0]); // for upload
              setValue("file_obj", URL.createObjectURL(e.target.files[0])); // for preview image
            }}
          />
        </CardContent>
        <CardActions>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            type="submit"
            className="mr-2"
          >
            Create
          </Button>
          <Button
            fullWidth
            variant="outlined"
            onClick={() => router.push("/stock")}
          >
            Cancel
          </Button>
        </CardActions>
      </Card>
    </form>
  );
}
