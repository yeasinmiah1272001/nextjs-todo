"use client";
import TodoList from "@/components/TodoList";
import axios from "axios";
import React from "react";

const Page = () => {
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const title = e.target.title.value;
    try {
      const res = await axios.post(`/api/todos`, { title });
      console.log("New Todo Added:", res.data);
    } catch (err) {
      console.error("Error adding todo:", err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-2xl shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-semibold mb-4 text-center">Add Title</h2>
        <div className="flex items-center gap-2">
          <input
            name="title"
            type="text"
            placeholder="Enter a title"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Add
          </button>
        </div>
        <TodoList />
      </form>
    </div>
  );
};

export default Page;
