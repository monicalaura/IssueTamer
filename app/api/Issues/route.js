import Issue from "@/app/(models)/Issue";
import { NextResponse } from "next/server";

// POST function
export async function POST(req) {
  try {
    const body = await req.json();
    const issueData = body.formData;

    await Issue.create(issueData);

    return NextResponse.json({ message: "Issue Created" }, { status: 201 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}
export async function GET() {
  try {
    const issues = await Issue.find();
    return NextResponse.json({ issues }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
