import { NextResponse } from "next/server";

export async function POST(req, { params }) {
  //   const id = params.slug;
  const json = await req.json();

  return NextResponse.json({ message: "Hello World" }, { status: 200 });
}
