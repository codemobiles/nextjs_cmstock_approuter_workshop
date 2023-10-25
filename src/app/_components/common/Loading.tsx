import { Box } from "@mui/material";
import React from "react";

type Props = {};

export default function Loading({}: Props) {
  return (
    <Box className="flex justify-center items-center h-screen text-blue-300">
      Loading..
    </Box>
  );
}
