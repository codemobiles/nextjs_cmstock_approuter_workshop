import { Box } from "@mui/material";
import React from "react";
import Image from "next/image";

type Props = {};

export default function Stock({}: Props) {
  return (
    <Box sx={{ mt: 1 }}>
      Stock
      <Image
        src="https://codemobiles.com/biz/images/codemobiles_logo.svg?ref=10"
        width={180}
        height={35}
        alt="logo"
      />
      <Image
        src="https://pospos.co/assets/images/ic_logo_pospos.svg"
        width={180}
        height={35}
        alt="logo"
      />
    </Box>
  );
}
