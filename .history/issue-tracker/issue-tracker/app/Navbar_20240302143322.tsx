"use client";
import Link from "next/link";
import React from "react";
import { FaBug } from "react-icons/fa6";
import { usePathname } from "next/navigation";
const Navbar = () => {
  // links labels
  const link = [
    { label: "Dashboard", href: "/" },
    { label: "Issue", href: "/issue" },
  ];
  const currentPath = usePathname();
  return (
    <>
      <nav className="flex  border-b space-x-4 px-2 py-2 mb-2 items-center">
        <Link href="/">
          {/* import he bug logo into the navbar */}
          <FaBug />
        </Link>
        <ul className="flex space-x-4 ">
          {link.map((l) => (
            <li key={l.label}>
              <Link href={l.href} className="text-zinc-400 hover:text-zinc-600">
                {l.label}
              </Link>
            </li>
          ))}
          {/* <li>
            <Link href="/" className="text-zinc-400 hover:text-zinc-600">
              Dashboard
            </Link>
          </li>
          <li>
            <Link href="/issue" className="text-zinc-400 hover:text-zinc-600">
              Issue
            </Link>
          </li> */}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
