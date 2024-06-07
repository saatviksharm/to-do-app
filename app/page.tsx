import Image from "next/image";
import Hub from "./Hub";
import { VercelClient } from "@vercel/postgres";

export default function Home() {
  return (
    <div>
      <Hub></Hub>
      <h1 className="text-3xl px-5">Todos</h1>
    </div>
  );
}
