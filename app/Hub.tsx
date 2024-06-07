import Link from "next/link";
import React from "react";

const hubLinks = [
  { name: "Home", href: "/" },
  { name: "New", href: "/new" },
];

const Hub = () => {
  return (
    <nav className="flex space-x-6 border-b border-gray-900 mb-5 h-10 px-5 items-center justify-between py-10">
      <ul className="space-x-6">
        {hubLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-2xl text-gray-900 border border-gray-900 hover:border-zinc-800 
            rounded hover:bg-zinc-400 focus-within:bg-zinc-400 outline-none px-2 py-1"
          >
            {link.name}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Hub;
