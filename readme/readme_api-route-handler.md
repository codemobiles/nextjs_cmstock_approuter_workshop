# API Route-handler

Route Handlers allow you to create custom request handlers for a given route using the Web Request and Response APIs.

TypeScript Warning: Although `Response.json()` is valid, native `TypeScript` types currently shows an error, you can use `NextResponse.json()` for typed responses instead.

```ts
import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch("https://data.mongodb-api.com/...", {
    headers: {
      "Content-Type": "application/json",
      "API-Key": process.env.DATA_API_KEY,
    },
  });
  const data = await res.json();

  return NextResponse.json({ data });
}
```

Alternatively, you can use abstractions on top of the underlying Web APIs to read `cookies` (NextRequest):

```ts
import { type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const token = request.cookies.get("token");
}
```
