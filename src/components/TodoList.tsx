import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaCross } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const TodoList = () => {
  const [list, setList] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/api/todos");
        setList(res.data);
      } catch (error) {
        console.error("Failed to fetch todos:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen  p-6 flex justify-center items-start">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4 text-center">Todo List</h2>

        {list.length === 0 ? (
          <p className="text-center text-gray-500">No todos found.</p>
        ) : (
          <ul className="space-y-3 max-h-64 overflow-y-auto pr-2">
            {list.map((todo) => (
              <li
                key={todo._id}
                className="bg-gray-50 px-4 flex items-center justify-between py-3 rounded-lg shadow-sm border hover:bg-blue-50 transition"
              >
                {todo.title}{" "}
                <span className="bg-red-400 rounded-full p-2">
                  <IoClose size={20} />
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default TodoList;
