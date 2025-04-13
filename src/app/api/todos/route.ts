import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Todo from "@/models/Todo";

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
