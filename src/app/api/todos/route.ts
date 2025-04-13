import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Todo from "@/models/Todo";
import { request } from "node:http";

export async function GET() {
  await dbConnect();
  const todos = await Todo.find();
  return NextResponse.json(todos);
}

export async function POST(request: Request) {
  await dbConnect();
  const { title } = await request.json(); // এখানে object destructuring
  const newTodo = await Todo.create({ title });
  return NextResponse.json(newTodo);
}

export const DELETE = async (request: Request) => {
  await dbConnect();
  const { id } = await request.json(); // request body থেকে id নেওয়া হচ্ছে

  try {
    const deletedTodo = await Todo.findByIdAndDelete(id);
    if (!deletedTodo) {
      return NextResponse.json({ message: "Todo not found" }, { status: 404 });
    }

    return NextResponse.json({
      message: "Todo deleted successfully",
      deletedTodo,
    });
  } catch (error) {
    return NextResponse.json(
      { message: "Error deleting todo", error },
      { status: 500 }
    );
  }
};
