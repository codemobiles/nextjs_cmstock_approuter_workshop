# Routing Hooks

## example:

```ts
export default function ExamplePage2Slug() {
  // localhost:3000/examples/page2-client/test?id=1234
  // output: param: test, query: 1234
  const params = useParams(); // params (slug)
  const searchParams = useSearchParams(); // string query

  return (
    <div>
      param: {params.slug}, query: {searchParams.get("id")}
    </div>
  );
}
```

## next/navigation

A new router has been added to support the new behavior in the app directory.

In app, you should use the three new hooks imported from `next/navigation`: `useRouter()`,`usePathname()`, and `useSearchParams()`.

- The new `useRouter` does not return the `pathname` string. Use the separate `usePathname` hook instead.
- The new `useRouter` does not return the `query` object. Use the separate `useSearchParams` hook instead.

In summary:

| Result   | Page      | App (CSR)       |
| -------- | --------- | --------------- |
| params   | useRouter | useParams       |
| pathname | useRouter | usePathname     |
| query    | useRouter | useSearchParams |
| push()   | useRouter | useRouter       |

```tsx
// when use any hook in nextjs, you must declare the component as the client-side-rendering.
"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";

export default function ExampleClientComponent() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // ...
}
```

referrence:<https://nextjs.org/docs/app/building-your-application/upgrading/app-router-migration#step-5-migrating-routing-hooks>

## generateStaticParams

**Why use this?**

The `generateStaticParams` function can be used in combination with `dynamic route segments` to `statically generate` routes at build time instead of on-demand at request time.

`getStaticParams` => `generateStaticParams`
use to get `dynamic` parameters (routes)

generateStaticParams is an array of segments instead of an array of nested param objects or a string of resolved paths.

Future more you can [router event](https://nextjs.org/docs/app/api-reference/functions/use-router#router-events) these three from `next/navigation`

## dynamicParams (App) ~ fallback (Pages)

used to define the behavior of a page that isn't pre-rendered at build time.

Control what happens when a dynamic segment is visited that was not generated with `generateStaticParams`.

Example:

```tsx
export async function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
}
```

- `true` (default): Dynamic segments not included in `generateStaticParams` are generated on demand.
- `false`: Dynamic segments not included in `generateStaticParams` will return a 404.

```tsx
export const dynamicParams = true; // true | false,
```

references:
[Fallback-replacing](https://nextjs.org/docs/app/building-your-application/upgrading/app-router-migration#replacing-fallback)
[generateStaticParams](https://nextjs.org/docs/app/api-reference/functions/generate-static-params)
