import { ConnectDB } from "@/lib/config/db";
import TodoModel from "@/lib/models/TodoModel";
import { NextResponse } from "next/server";

const LoadDB = async () => {
  await ConnectDB();
};
LoadDB();
export async function GET(req) {
  const todos = await TodoModel.find({});
  return NextResponse.json({ todos: todos });
}

export async function POST(req) {
  const { title, description } = await req.json();
  await TodoModel.create({
    title,
    description,
  });
  return NextResponse.json({ msg: "todo created" });
}

export async function DELETE(req) {
  const mongoId = await req.nextUrl.searchParams.get(
    "mongoId"
  );
  await TodoModel.findByIdAndDelete(mongoId);
  return NextResponse.json({ msg: "todo deleted" });
}


export async function PUT(req) {
    const mongoId = await req.nextUrl.searchParams.get(
      "mongoId"
    );
    await TodoModel.findByIdAndUpdate(mongoId,{
        $set:{
            isCompleted:true
        }
    });
    return NextResponse.json({ msg: "todo completed" });
  }
  