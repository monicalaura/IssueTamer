import Issue from "@/app/(models)/Issue";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { id } = params;

  const foundIssue = await Issue.findOne({ _id: id });
  return NextResponse.json({ foundIssue }, { status: 200 });
}

// PUT (edit) function
export async function PUT(req, { params }) {
  try {
    const { id } = params;

    const body = await req.json();
    const issueData = body.formData;

    const updateIssueData = await Issue.findByIdAndUpdate(id, {
      ...issueData,
    });

    return NextResponse.json({ message: "Issue updated" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
export async function DELETE(req, { params }) {
  try {
    const { id } = params;
    await Issue.findByIdAndDelete(id);
    return NextResponse.json({ message: "Issue deleted" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error deleting issue", error },
      {
        status: 500,
      }
    );
  }
}
