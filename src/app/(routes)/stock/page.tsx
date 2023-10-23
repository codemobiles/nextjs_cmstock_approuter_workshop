import { Box } from "@mui/material";
import React from "react";
import Image from "next/image";

type Props = {};

export default function Stock({}: Props) {
  return (
    <Box sx={{ mt: 1 }}>
      Stock
      <Image
        src="/static/img/next_login.jpg"
        width={180}
        height={35}
        alt="logo"
        style={{ objectFit: "contain" }}
      />
    </Box>
  );
}
