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

export default function StockCreate() {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const onSubmit = async (values: ProductData) => {
    alert(JSON.stringify(values));
  };

  const showPreviewImage = () => {
    return (
      <Image alt="" src="/static/img/cm_logo.png" width={100} height={100} />
    );
  };

  return (
    <form noValidate onSubmit={() => {}}>
      <Card>
        <CardContent className="p-8">
          <Typography gutterBottom variant="h3">
            Create Product
          </Typography>

          <TextField
            label="Name"
            variant="outlined"
            margin="normal"
            fullWidth
            autoFocus
          />

          <TextField
            label="Price"
            variant="outlined"
            margin="normal"
            fullWidth
            autoFocus
          />

          <TextField
            label="Stock"
            variant="outlined"
            margin="normal"
            fullWidth
            autoFocus
          />

          <Box>{showPreviewImage()}</Box>

          <TextField
            className="mt-4"
            type="file"
            fullWidth
            onChange={(e: React.ChangeEvent<any>) => {
              e.preventDefault();
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
