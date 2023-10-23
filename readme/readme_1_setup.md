# Frontend setup

## Create nextjs lastest version & run project

```bash
npx create-next-app@latest <your-project-name>
yarn dev

✔ What is your project named? … my-nextjs-vidoeonline
✔ Would you like to use TypeScript? … Yes
✔ Would you like to use ESLint? …  Yes
✔ Would you like to use Tailwind CSS? … Yes
✔ Would you like to use `src/` directory? … Yes
✔ Would you like to use App Router? (recommended) … Yes
✔ Would you like to customize the default import alias (@/*)? … Yes
✔ What import alias would you like configured? … @/*

code <your-project-name>
yarn dev
```

## ###### Shortcut after init next app

```bash
# Install framework
yarn add @mui/material @emotion/react @emotion/styled @emotion/cache @mui/x-data-grid
# Install icons-material
yarn add @mui/icons-material
# all dependencies
yarn add react-hook-form @hookform/resolvers yup 
yarn add chart.js react-chartjs-2 @reduxjs/toolkit react-redux next-redux-wrapper axios react-medium-image-zoom react-iframe  dayjs
## Install react-medium-image-zoom & react-number-format
yarn add react-medium-image-zoom react-number-format
## Install Cookie (use cookies from next/headers instead
yarn add cookie
yarn add @types/cookie --dev
```

## Aliases

```yaml
"paths": { "@/*": ["./*"] }
```

## Install ChartJS

```bash
yarn add chart.js react-chartjs-2
```

## Install Redux ToolKit

```bash
yarn add @reduxjs/toolkit react-redux # for Redux Toolkit:
yarn add next-redux-wrapper  # additional package to take care of our server-side rendering:
```

## Install Dayjs (MomentJS replaced)

```bash
yarn add dayjs
```

## react-iframe

```bash
yarn add react-iframe
```

## Install utils dependencies (all)

```bash
yarn add formik formik-material-ui chart.js react-chartjs-2 @reduxjs/toolkit react-redux next-redux-wrapper axios react-medium-image-zoom react-iframe
```
