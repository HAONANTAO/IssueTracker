import Link from "next/link";
import React from "react";
import { FaBug } from "react-icons/fa6";
const Navbar = () => {
  return (
    <>
   
        <nav className="flex space-x-4"></nav>
        <Link href="/">
          {/* import he bug logo into the navbar */}
          <FaBug />
        </Link>
        <ul className="flex space-x-4 border ">
          <li>
            <Link href="/">Dashboard</Link>
          </li>
          <li>
            <Link href="/issue">Issue</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
