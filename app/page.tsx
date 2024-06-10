import Image from "next/image";
import Hub from "./Hub";
import { VercelClient } from "@vercel/postgres";
import { prisma } from "./api/db";

export default async function Home() {
  //const todos = await prisma.todo.findMany();
  //await prisma.todo.create({ data: { name: "test", complete: false } });
  
  /* Code for between <ul><ul/>
    {todos.map((todo) => (
          <li key={todo.id}>{todo.name}</li>
        ))}  
  */ 
  return (
    <div>
      <Hub></Hub>
      <h1 className="text-3xl px-5">Todos</h1>
      <ul className="pl-4">
        
      </ul>
    </div>
  );
}
