# NextJS App router integrated w/ MUI

```bash
yarn add @mui/material @emotion/react @emotion/styled @emotion/cache # Install framework
yarn add @mui/icons-material # Install icons-material
```

## Test MUI Buttons

- https://mui.com/material-ui/react-button/

```ts
import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function BasicButtons() {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
  );
}
```

## MUI Drawer ('use client';)

- Don't forget to add 'use client'; at the top level
- https://mui.com/material-ui/react-drawer/#persistent-drawer
