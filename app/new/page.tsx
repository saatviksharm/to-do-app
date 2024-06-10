"use client";

import { log } from "console";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Todo {
  id: number;
  task: string;
  completed: boolean;
}

export default function NewPage() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTask, setNewTask] = useState<string>("");
  const [editTask, setEditTask] = useState<{ id: number; task: string }>({
    id: 0,
    task: "",
  });

  function FunctionTest() {
    fetch("/api/todo", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => setTodos(data.todos));
  }

  async function addTodo() {
    if (!newTask.trim()) {
      alert("Task cannot be empty");
      return;
    }

    const response = await fetch("/api/todo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ task: newTask }),
    });
    const data = await response.json();
    setTodos((prevTodos) => [...prevTodos, data.todo]);
    setNewTask("");
  }

  async function updateTodo(id: number) {
    const response = await fetch("/api/todo", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, task: editTask.task, completed: false }),
    });
    const data = await response.json();
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === id ? data.todo : todo))
    );
    setEditTask({ id: 0, task: "" });
  }

  const [test, setTest] = useState<String>("on");

  useEffect(() => {
    console.log("hello");
  }, []);

  return (
    <div>
      <h1 className="text-3xl px-5">Todos</h1>
      <form className="flex gap-2 felx-col px-10 py-3">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add new task"
          className="border border-gray-900 bg-transparent rounded px-2 py-1 outline-none focus-within:border-gray-700"
        />
      </form>
      <div className="px-10 py-3">
        <button
          className=" py-1 px-2 border border-gray-900"
          onClick={addTodo}
        >
          Add Task
        </button>
      </div>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.id === editTask.id ? (
              <input
                type="text"
                value={editTask.task}
                onChange={(e) =>
                  setEditTask({ id: todo.id, task: e.target.value })
                }
              />
            ) : (
              <span>{todo.task}</span>
            )}
            {todo.id === editTask.id ? (
              <button onClick={() => updateTodo(todo.id)}>Save</button>
            ) : (
              <button
                onClick={() => setEditTask({ id: todo.id, task: todo.task })}
              >
                {" "}
                Edit{" "}
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
