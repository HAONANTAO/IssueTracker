import Link from "next/link";
import React from "react";
import { FaBug } from "react-icons/fa6";
const Navbar = () => {
  return (
    <>
      <nav className="flex  border-b space-x-4 px-2 py-2 mb-2 items-center">
        <Link href="/">
          {/* import he bug logo into the navbar */}
          <FaBug />
        </Link>
        <ul className="flex space-x-4 text-t">
          <li>
            <Link href="/">Dashboard</Link>
          </li>
          <li>
            <Link href="/issue">Issue</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
