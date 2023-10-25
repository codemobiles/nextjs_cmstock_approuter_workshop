"use client";
import * as React from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { useSelector } from "react-redux";
import { getProducts, productSelector } from "@/src/store/slices/productSlice";
import { useAppDispatch } from "@/src/store/store";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Name", width: 130 },
  { field: "price", headerName: "Price", width: 130 },
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
