"use client";
import * as React from "react";
import {
  DataGrid,
  GridColDef,
  GridRenderCellParams,
  GridToolbarContainer,
  GridToolbarFilterButton,
  GridValueGetterParams,
} from "@mui/x-data-grid";
import { useSelector } from "react-redux";
import { getProducts, productSelector } from "@/src/store/slices/productSlice";
import { useAppDispatch } from "@/src/store/store";
import Image from "next/image";
import { productImageURL } from "@/src/utils/commonUtil";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { Fab, IconButton, Link, Stack, Typography } from "@mui/material";
import { NumericFormat } from "react-number-format";
import dayjs from "dayjs";
import { Add, Delete, Edit } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import { userSelector } from "@/src/store/slices/userSlice";

export default function Stock() {
  const productReducer = useSelector(productSelector);
  const userReducer = useSelector(userSelector);
  const dispatch = useAppDispatch();
  const router = useRouter();

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
    {
      field: "createdAt",
      headerName: "Timestamp",
      width: 230,
      renderCell: ({ value }) => (
        <Typography variant="body1">
          {dayjs(value).format("DD/MM/YYYY HH:mm")}
        </Typography>
      ),
    },
    {
      headerName: "ACTION",
      field: ".",
      width: 120,
      renderCell: ({ row }: GridRenderCellParams<any>) => (
        <Stack direction="row">
          <IconButton
            aria-label="edit"
            size="large"
            onClick={() => router.push(`/stock/edit?id=${row.id}`)}
          >
            <Edit fontSize="inherit" />
          </IconButton>
          <IconButton
            aria-label="delete"
            size="large"
            onClick={() => {
              // setSelectedProduct(row);
              // setOpenDialog(true);
            }}
          >
            <Delete fontSize="inherit" />
          </IconButton>
        </Stack>
      ),
    },
  ];

  React.useEffect(() => {
    if (!userReducer.isAuthenticating) {
      dispatch(getProducts());
    }
  }, [dispatch, userReducer.isAuthenticating]);

  const CustomToolbar: React.FunctionComponent<{
    setFilterButtonEl: React.Dispatch<
      React.SetStateAction<HTMLButtonElement | null>
    >;
  }> = ({ setFilterButtonEl }) => (
    <GridToolbarContainer>
      <GridToolbarFilterButton ref={setFilterButtonEl} />
      <Link href="/stock/add">
        <Fab
          color="primary"
          aria-label="add"
          sx={{
            position: "absolute",
            top: 10,
            right: 10,
          }}
        >
          <Add />
        </Fab>
      </Link>
    </GridToolbarContainer>
  );

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
        slots={{
          toolbar: CustomToolbar,
        }}
      />
    </div>
  );
}
