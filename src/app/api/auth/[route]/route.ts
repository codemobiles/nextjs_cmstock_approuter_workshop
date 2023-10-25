// export const dynamic = 'auto'
// export const dynamicParams = true
// export const revalidate = false
// export const fetchCache = 'auto'
// export const runtime = 'nodejs'
// export const preferredRegion = 'auto'

import { ACCESS_TOKEN_KEY } from "@/utils/constant";
import httpClient from "@/src/utils/httpClient";
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

// GET
export async function GET(
  request: NextRequest,
  context: {
    params: {
      route: string;
    };
  }
): Promise<any> {
  const route = context.params.route;

  return NextResponse.json({ route });
}

// POST
export async function POST(
  request: NextRequest,
  context: {
    params: {
      route: string;
    };
  }
): Promise<any> {
  const route = context.params.route;
  const body = await request.json();
  if (route === "signin") {
    return NextResponse.json({ echo: body });
  }
}


// export async function PUT(request: Request) {}
// export async function DELETE(request: Request) {}
// export async function PATCH(request: Request) {}
