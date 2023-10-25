"use client";
import * as React from "react";
import {
  DataGrid,
  GridColDef,
  GridRenderCellParams,
  GridValueGetterParams,
} from "@mui/x-data-grid";
import { useSelector } from "react-redux";
import { getProducts, productSelector } from "@/src/store/slices/productSlice";
import { useAppDispatch } from "@/src/store/store";
import Image from "next/image";
import { productImageURL } from "@/src/utils/commonUtil";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { Typography } from "@mui/material";
import { NumericFormat } from "react-number-format";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "image",
    headerName: "Image",
    width: 70,
    renderCell: ({ value }: GridRenderCellParams<String>) => (
      <Zoom>
        <Image
          key={value}
          height={500}
          width={500}
          alt="product image"
          src={productImageURL(value)}
          style={{
            width: 70,
            height: 70,
            borderRadius: "5%",
            objectFit: "cover",
          }}
        />
      </Zoom>
    ),
  },
  { field: "name", headerName: "Name", width: 350 },
  {
    field: "price",
    headerName: "Price",
    width: 130,
    renderCell: ({ value }: GridRenderCellParams<String>) => (
      <Typography variant="body1">
        <NumericFormat
          value={value}
          displayType={"text"}
          thousandSeparator={true}
          decimalScale={0}
          fixedDecimalScale={true}
        />
      </Typography>
    ),
  },
  { field: "stock", headerName: "Stock", width: 130 },
];

export default function Stock() {
  const productReducer = useSelector(productSelector);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={productReducer.products}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
      />
    </div>
  );
}
