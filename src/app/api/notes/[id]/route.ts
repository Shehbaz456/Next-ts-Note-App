import { connectDB } from "@/lib/connectDB";
import Note from "@/models/Note";
import { NextResponse } from "next/server";

type Params = {
  params: Promise<{ id: string }>;
};

export async function PUT(req: Request, { params }: Params) {
  await connectDB();

  const { id } = await params; // ✅ await params
  const { title, content } = await req.json();

  const updatedNote = await Note.findByIdAndUpdate(
    id,
    { title, content },
    { new: true }
  );

  return NextResponse.json(updatedNote);
}

export async function DELETE(_: Request, { params }: Params) {
  await connectDB();

  const { id } = await params; // ✅ await params
  await Note.findByIdAndDelete(id);

  return NextResponse.json({ message: "Note deleted" });
}
