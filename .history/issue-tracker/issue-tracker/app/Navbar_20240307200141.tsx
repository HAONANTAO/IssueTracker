"use client";
import Link from "next/link";
import React from "react";
import { FaBug } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { Box } from "@radix-ui/themes";
const Navbar = () => {
  const currentPath = usePathname();
  const { status, data: session } = useSession();
  // links labels
  const link = [
    { label: "Dashboard", href: "/" },
    { label: "Issue", href: "/issues" },
  ];

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
              <Link
                href={l.href}
                className={`hover:text-zinc-600 transition-colors ${
                  currentPath === l.href ? "text-zinc-800" : "text-zinc-400"
                }`}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <Box> {status==="authenticated"}</Box>
      </nav>
    </>
  );
};

export default Navbar;
