import { NextResponse } from "next/server";

let todos: Array<{ id: number; task: string; completed: boolean}> = []

export async function GET() {
    
    return NextResponse.json({todos});
}

export async function POST(request: Request) {
    const {task} = await request.json();
    const newTodo = { id: todos.length + 1, task, completed: false}
    todos.push(newTodo)
    return (
        NextResponse.json({ message: 'To-do item added', todo: newTodo })
    )
}

  export async function PUT(request: Request) {
    const {id, task, completed} = await request.json();
    const todoIndex = todos.findIndex((todo) => todo.id === id);
    if (todoIndex === -1) {
        return NextResponse.json({ message: 'To-do item not found' }, { status: 404 });
      }
      todos[todoIndex] = { id, task, completed };
      return NextResponse.json({ message: 'To-do item updated', todo: todos[todoIndex] });
}
