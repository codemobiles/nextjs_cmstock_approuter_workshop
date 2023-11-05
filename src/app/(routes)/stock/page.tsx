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
import {
  deleteProduct,
  getProducts,
  productSelector,
} from "@/src/store/slices/productSlice";
import { useAppDispatch } from "@/src/store/store";
import Image from "next/image";
import { productImageURL } from "@/src/utils/commonUtil";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Fab,
  Grid,
  IconButton,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import { NumericFormat } from "react-number-format";
import dayjs from "dayjs";
import {
  Add,
  AddShoppingCart,
  AssignmentReturn,
  Delete,
  Edit,
  NewReleases,
  Star,
} from "@mui/icons-material";
import { useRouter } from "next/navigation";
import { userSelector } from "@/src/store/slices/userSlice";
import StockCard from "../../_components/common/StockCard";
import { ProductData } from "@/src/models/product.model";
import { useState } from "react";

export default function Stock() {
  const productReducer = useSelector(productSelector);
  const userReducer = useSelector(userSelector);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductData | null>(
    null
  );

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
              setSelectedProduct(row);
              setOpenDialog(true);
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

  const handleDeleteConfirm = async () => {
    if (selectedProduct) {
      const result = await dispatch(deleteProduct(String(selectedProduct.id)));
      if (result.meta.requestStatus == "fulfilled") {
        dispatch(getProducts());
        setOpenDialog(false);
      } else {
        alert("Failed to delete");
      }
    }
  };

  const showDialog = () => {
    if (selectedProduct === null) {
      return;
    }

    return (
      <Dialog
        open={openDialog}
        keepMounted
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          <Image
            width={100}
            height={100}
            alt="product image"
            src={productImageURL(selectedProduct.image)}
            style={{ width: 100, borderRadius: "5%", objectFit: "cover" }}
          />
          <br />
          Confirm to delete the product? : {selectedProduct.name}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            You cannot restore deleted product.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)} color="info">
            Cancel
          </Button>
          <Button onClick={handleDeleteConfirm} color="primary">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    );
  };

  return (
    <Box style={{ height: 400, width: "100%" }}>
      {/* Cards */}
      <Grid container style={{ marginBottom: 16 }} spacing={7}>
        <Grid item lg={3} md={6} sm={12}>
          <StockCard
            icon={AddShoppingCart}
            title="TOTAL"
            subtitle="112 THB"
            color="#00a65a"
          />
        </Grid>

        <Grid item lg={3} md={6} sm={12}>
          <StockCard
            icon={NewReleases}
            title="EMPTY"
            subtitle="9 PCS."
            color="#f39c12"
          />
        </Grid>

        <Grid item lg={3} md={6} sm={12}>
          <StockCard
            icon={AssignmentReturn}
            title="RETURN"
            subtitle="1 PCS."
            color="#dd4b39"
          />
        </Grid>

        <Grid item lg={3} md={6} sm={12}>
          <StockCard
            icon={Star}
            title="LOSS"
            subtitle="5 PCS."
            color="#00c0ef"
          />
        </Grid>
      </Grid>

      {/* Table */}
      <DataGrid
        sx={{ backgroundColor: "white", height: "70vh" }}
        rows={productReducer.products}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[10]}
        slots={{
          toolbar: CustomToolbar,
        }}
      />

      {showDialog()}
    </Box>
  );
}
