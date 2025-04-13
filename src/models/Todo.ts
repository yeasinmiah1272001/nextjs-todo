// models/Todo.ts
import mongoose, { Schema, Document, model, models } from "mongoose";

export interface ITodo extends Document {
  title: string;
  completed: boolean;
}

const TodoSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default models.Todo || model<ITodo>("Todo", TodoSchema);
