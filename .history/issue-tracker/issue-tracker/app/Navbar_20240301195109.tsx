import Link from "next/link";
import React from "react";
import { FaBug } from "react-icons/fa6";
const Navbar = () => {
  return (
    <>
      <Link href="/"><FaBug></Link>
      <ul>
        <li>
          <Link href="/">Dashboard</Link>
        </li>
        <li>
          <Link href="/issue">Issue</Link>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
